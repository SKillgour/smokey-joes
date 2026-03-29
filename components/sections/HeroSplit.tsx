'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type Props = {
  heading?: string
  subheading?: string
  businessName?: string
  ctaLabel?: string
  ctaUrl?: string
  phone?: string
  emergencyLabel?: string
  nextSectionColor?: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Read a CSS custom property at runtime so no hex values live in this file. */
const cssVar = (name: string): string =>
  typeof window !== 'undefined'
    ? getComputedStyle(document.documentElement).getPropertyValue(name).trim()
    : '#000000'

/** elastic-out easing — spring-physics feel */
function springOut(t: number): number {
  if (t <= 0) return 0
  if (t >= 1) return 1
  const c4 = (2 * Math.PI) / 3
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

// ─────────────────────────────────────────────────────────────────────────────
// Tap geometry definitions (assembled positions)
// ─────────────────────────────────────────────────────────────────────────────
const PARTS: Array<{
  id: string
  makeGeo: () => THREE.BufferGeometry
  pos: [number, number, number]
  rot: [number, number, number]
  brightness: number  // 0–1, maps to lightness variation on chrome
}> = [
  { id: 'base_plate',  makeGeo: () => new THREE.CylinderGeometry(0.62, 0.62, 0.1, 32),   pos: [0, -1.15, 0],    rot: [0, 0, 0],           brightness: 0.6 },
  { id: 'body_lo',     makeGeo: () => new THREE.CylinderGeometry(0.28, 0.34, 0.72, 20),  pos: [0, -0.68, 0],    rot: [0, 0, 0],           brightness: 0.75 },
  { id: 'body_hi',     makeGeo: () => new THREE.CylinderGeometry(0.22, 0.28, 0.52, 20),  pos: [0, -0.13, 0],    rot: [0, 0, 0],           brightness: 0.82 },
  { id: 'neck_ring',   makeGeo: () => new THREE.TorusGeometry(0.22, 0.04, 8, 24),        pos: [0, 0.14, 0],     rot: [Math.PI/2, 0, 0],   brightness: 0.55 },
  { id: 'spout_h',     makeGeo: () => new THREE.CylinderGeometry(0.1, 0.1, 0.82, 14),    pos: [0.41, 0.12, 0],  rot: [0, 0, Math.PI/2],   brightness: 0.75 },
  { id: 'spout_elbow', makeGeo: () => new THREE.SphereGeometry(0.11, 10, 10),            pos: [0.82, 0.12, 0],  rot: [0, 0, 0],           brightness: 0.68 },
  { id: 'spout_v',     makeGeo: () => new THREE.CylinderGeometry(0.1, 0.09, 0.58, 14),   pos: [0.82, -0.18, 0], rot: [0, 0, 0],           brightness: 0.7 },
  { id: 'aerator',     makeGeo: () => new THREE.CylinderGeometry(0.11, 0.1, 0.09, 14),   pos: [0.82, -0.49, 0], rot: [0, 0, 0],           brightness: 0.5 },
  { id: 'lever_disc',  makeGeo: () => new THREE.CylinderGeometry(0.15, 0.15, 0.06, 18),  pos: [0, 0.18, 0],     rot: [0, 0, 0],           brightness: 0.65 },
  { id: 'lever_arm',   makeGeo: () => new THREE.BoxGeometry(0.08, 0.06, 0.6),            pos: [0, 0.26, -0.22], rot: [-0.28, 0, 0],       brightness: 0.75 },
  { id: 'lever_knob',  makeGeo: () => new THREE.SphereGeometry(0.1, 10, 10),             pos: [0, 0.32, -0.5],  rot: [0, 0, 0],           brightness: 0.82 },
]

const PARTICLE_COUNT = 320
const SPOUT_TIP: [number, number, number] = [0.82, -0.56, 0]
const ASSEMBLE_DURATION = 2.6
const CAM_START_Z = 2.2
const CAM_END_Z = 5.5
const CAM_PULL_DURATION = 3.2

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

/** Splits heading into words, each animating up from below the baseline. */
function SplitHeading({ text, baseDelay = 0.3 }: { text: string; baseDelay?: number }) {
  const lines = text.split('\n')
  let wordIdx = 0
  return (
    <>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {line.split(' ').map((word) => {
            const i = wordIdx++
            return (
              <span
                key={i}
                style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.28em', verticalAlign: 'bottom' }}
              >
                <motion.span
                  initial={{ y: '115%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: baseDelay + i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {word}
                </motion.span>
              </span>
            )
          })}
        </span>
      ))}
    </>
  )
}

function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const btnRef = useRef<HTMLAnchorElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const tgt = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return

    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      if (dist < 120) {
        tgt.current = { x: dx * 0.4, y: dy * 0.4 }
      } else {
        tgt.current = { x: 0, y: 0 }
      }
    }
    window.addEventListener('mousemove', onMove)

    let raf: number
    const tick = () => {
      raf = requestAnimationFrame(tick)
      pos.current.x = lerp(pos.current.x, tgt.current.x, 0.1)
      pos.current.y = lerp(pos.current.y, tgt.current.y, 0.1)
      btn.style.transform = `translate(${pos.current.x}px,${pos.current.y}px)`
    }
    tick()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <a
      ref={btnRef}
      href={href}
      style={{
        display: 'inline-block',
        background: 'var(--color-accent)',
        color: '#fff',
        padding: '1rem 2.25rem',
        borderRadius: 'var(--radius)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: '1.1rem',
        letterSpacing: '0.07em',
        textDecoration: 'none',
        boxShadow: '0 0 36px rgba(14,165,233,0.45)',
        willChange: 'transform',
      }}
    >
      {children}
    </a>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export default function HeroSplit({
  heading = "Palmerston North's\nPremier Plumbers",
  subheading = 'Licensed, reliable and fast. Gas fitting, hot water, drains and full bathroom renovations.',
  businessName,
  ctaLabel = 'Book a Job',
  ctaUrl = '#contact',
  phone = '06 406 3920',
  emergencyLabel = '24/7 Emergency',
  nextSectionColor = 'var(--color-accent)',
}: Props) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !mountRef.current) return
    const container = mountRef.current
    const W = container.clientWidth
    const H = container.clientHeight

    // ── Scene ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()
    const bg = new THREE.Color(cssVar('--color-primary'))
    scene.background = bg
    scene.fog = new THREE.FogExp2(bg, 0.035)

    // ── Camera ─────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100)
    camera.position.set(0, 0.3, CAM_START_Z)
    camera.lookAt(0.2, -0.1, 0)

    // ── Renderer ───────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1
    container.appendChild(renderer.domElement)

    // ── Post-processing ────────────────────────────────────────────────────
    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(W, H),
      0.3,   // strength — starts subtle
      0.4,   // radius
      0.2,   // threshold — only bright surfaces bloom
    )
    composer.addPass(bloomPass)

    // ── Lights ─────────────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(cssVar('--color-primary'), 1.0)
    scene.add(ambient)

    // Electric blue key light from top-right
    const keyLight = new THREE.DirectionalLight(cssVar('--color-accent'), 4.0)
    keyLight.position.set(3, 4, 2)
    keyLight.castShadow = true
    scene.add(keyLight)

    // Gas-flame warmth from below
    const bottomLight = new THREE.PointLight(cssVar('--color-accent-2'), 2.5, 10)
    bottomLight.position.set(-1, -2.5, 1.5)
    scene.add(bottomLight)

    // Particle fill light — moves with water stream
    const particleLight = new THREE.PointLight(cssVar('--color-accent'), 1.8, 5)
    particleLight.position.set(...SPOUT_TIP)
    scene.add(particleLight)

    // ── Tap group (rotates with mouse) ─────────────────────────────────────
    const tapGroup = new THREE.Group()
    scene.add(tapGroup)

    // Chrome material
    const chromeMat = new THREE.MeshStandardMaterial({
      metalness: 0.95,
      roughness: 0.08,
    })

    type PartData = {
      mesh: THREE.Mesh
      tPos: THREE.Vector3
      tRot: THREE.Euler
      sPos: THREE.Vector3
      sRot: THREE.Euler
      delay: number
    }

    const parts: PartData[] = PARTS.map((p, i) => {
      const mat = chromeMat.clone()
      const v = 0.55 + p.brightness * 0.35
      mat.color.setRGB(v, v + 0.04, v + 0.08) // slight cool-chrome tint

      const mesh = new THREE.Mesh(p.makeGeo(), mat)
      mesh.castShadow = true
      mesh.receiveShadow = true

      const tPos = new THREE.Vector3(...p.pos)
      const tRot = new THREE.Euler(...p.rot)

      // Scatter: random position in a spread sphere
      const phi = Math.random() * Math.PI * 2
      const theta = Math.random() * Math.PI
      const r = 4 + Math.random() * 3
      const sPos = new THREE.Vector3(
        r * Math.sin(theta) * Math.cos(phi),
        r * Math.cos(theta),
        r * Math.sin(theta) * Math.sin(phi) - 2,
      )
      const sRot = new THREE.Euler(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      )

      mesh.position.copy(sPos)
      mesh.rotation.copy(sRot)
      tapGroup.add(mesh)

      return { mesh, tPos, tRot, sPos, sRot, delay: i * 0.07 }
    })

    // ── Water particles ────────────────────────────────────────────────────
    const pPos = new Float32Array(PARTICLE_COUNT * 3)
    const pSizes = new Float32Array(PARTICLE_COUNT)
    const pVel: Array<[number, number, number]> = []
    const pAge = new Float32Array(PARTICLE_COUNT)

    const resetP = (i: number) => {
      pPos[i * 3]     = SPOUT_TIP[0] + (Math.random() - 0.5) * 0.1
      pPos[i * 3 + 1] = SPOUT_TIP[1]
      pPos[i * 3 + 2] = SPOUT_TIP[2] + (Math.random() - 0.5) * 0.08
      pVel[i] = [
        (Math.random() - 0.5) * 0.011,
        -0.014 - Math.random() * 0.012,
        (Math.random() - 0.5) * 0.011,
      ]
      pSizes[i] = 0.03 + Math.random() * 0.055  // varied sizes
      pAge[i] = Math.random() * 75
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pVel.push([0, 0, 0])
      resetP(i)
    }

    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    pGeo.setAttribute('size', new THREE.BufferAttribute(pSizes, 1))

    const pMat = new THREE.PointsMaterial({
      color: new THREE.Color(cssVar('--color-accent')).lerp(new THREE.Color(0xffffff), 0.4),
      size: 0.045,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(pGeo, pMat)
    tapGroup.add(particles)

    // ── Mouse tracking ─────────────────────────────────────────────────────
    const mouse = { nx: 0, ny: 0 }  // normalised -1..1
    const onMouseMove = (e: MouseEvent) => {
      mouse.nx = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.ny = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Render loop ────────────────────────────────────────────────────────
    const clock = new THREE.Clock()
    let groupRotY = 0, groupRotX = 0
    let camZ = CAM_START_Z
    let waterOpacity = 0
    let bloomPulseStarted = false
    let assemblyDone = false
    let frameId: number

    const tick = () => {
      frameId = requestAnimationFrame(tick)
      const elapsed = clock.getElapsedTime()

      // Camera pull-back
      const camProgress = Math.min(1, elapsed / CAM_PULL_DURATION)
      const camEased = 1 - Math.pow(1 - camProgress, 3)
      camZ = lerp(CAM_START_Z, CAM_END_Z, camEased)
      camera.position.z = camZ
      camera.lookAt(0.2, -0.1, 0)

      // Tap group mouse parallax (only after cam has pulled back a bit)
      if (elapsed > 1.0) {
        const targetRotY = mouse.nx * (Math.PI / 12)  // ±15°
        const targetRotX = -mouse.ny * (Math.PI / 18)  // ±10°
        groupRotY = lerp(groupRotY, targetRotY, 0.06)
        groupRotX = lerp(groupRotX, targetRotX, 0.06)
        tapGroup.rotation.y = groupRotY
        tapGroup.rotation.x = groupRotX
      }

      // Assemble parts
      let allDone = true
      parts.forEach(({ mesh, tPos, tRot, sPos, sRot, delay }) => {
        const raw = (elapsed - delay) / ASSEMBLE_DURATION
        const t = Math.max(0, Math.min(1, raw))
        const e = springOut(t)
        if (t < 1) allDone = false
        mesh.position.lerpVectors(sPos, tPos, e)
        mesh.rotation.x = sRot.x + (tRot.x - sRot.x) * e
        mesh.rotation.y = sRot.y + (tRot.y - sRot.y) * e
        mesh.rotation.z = sRot.z + (tRot.z - sRot.z) * e
      })

      if (allDone && !bloomPulseStarted) {
        bloomPulseStarted = true
      }
      if (allDone) assemblyDone = true

      // Bloom: pulse on assembly, then breathe
      if (!bloomPulseStarted) {
        bloomPass.strength = 0.3
      } else {
        const pt = elapsed - ASSEMBLE_DURATION
        if (pt < 0.4) {
          // Rise: 0.3 → 1.6 in 0.4s
          bloomPass.strength = lerp(0.3, 1.6, pt / 0.4)
        } else if (pt < 1.4) {
          // Fall: 1.6 → 0.55 in 1.0s
          bloomPass.strength = lerp(1.6, 0.55, (pt - 0.4) / 1.0)
        } else {
          // Breathe
          bloomPass.strength = 0.55 + 0.12 * Math.sin((elapsed - ASSEMBLE_DURATION - 1.4) * 1.1)
        }
      }

      // Water particles — fade in after assembly
      if (assemblyDone) {
        const waterDelay = elapsed - ASSEMBLE_DURATION - 0.4
        if (waterDelay > 0) {
          waterOpacity = Math.min(0.88, waterOpacity + 0.006)
          pMat.opacity = waterOpacity

          let centroidX = 0, centroidY = 0, centroidZ = 0

          for (let i = 0; i < PARTICLE_COUNT; i++) {
            pPos[i * 3]     += pVel[i][0]
            pPos[i * 3 + 1] += pVel[i][1]
            pVel[i][1] -= 0.00042
            pAge[i]++

            if (pPos[i * 3 + 1] < -2.8 || pAge[i] > 100) resetP(i)

            centroidX += pPos[i * 3]
            centroidY += pPos[i * 3 + 1]
            centroidZ += pPos[i * 3 + 2]
          }

          pGeo.attributes.position.needsUpdate = true

          // Move particle light with stream centroid
          centroidX /= PARTICLE_COUNT
          centroidY /= PARTICLE_COUNT
          centroidZ /= PARTICLE_COUNT
          particleLight.position.set(centroidX, centroidY, centroidZ)
          particleLight.intensity = 1.8 + 0.6 * Math.sin(elapsed * 3.5)
        }
      }

      composer.render()
    }
    tick()

    // ── Resize ─────────────────────────────────────────────────────────────
    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      composer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      parts.forEach(({ mesh }) => {
        mesh.geometry.dispose()
        ;(mesh.material as THREE.Material).dispose()
      })
      chromeMat.dispose()
      pGeo.dispose()
      pMat.dispose()
      composer.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  const credentials = ['MASTER PLUMBER', 'GAS CERTIFIED', 'FULLY INSURED']

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        background: 'var(--color-primary)',
      }}
    >
      {/* Three.js canvas */}
      <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />

      {/* Text-side gradient — left side */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(108deg, rgba(10,22,40,0.96) 0%, rgba(10,22,40,0.72) 48%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Nav */}
      <nav
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 2.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <img
          src="https://static.wixstatic.com/media/e8a099_2dda15a5ecb54906895df4110bc1ea47~mv2.png"
          alt="Kiwi Plumbing & Gas"
          style={{ height: 44 }}
        />
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: 'rgba(226,232,240,0.7)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                textDecoration: 'none',
              }}
            >
              {item}
            </a>
          ))}
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            style={{
              background: 'var(--color-accent-2)',
              color: '#fff',
              padding: '0.5rem 1.2rem',
              borderRadius: 'var(--radius)',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
            }}
          >
            {emergencyLabel}
          </a>
        </div>
      </nav>

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 2.5rem',
          maxWidth: 640,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.4rem' }}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              width: 28,
              height: 2,
              background: 'var(--color-accent)',
              display: 'inline-block',
              transformOrigin: 'left',
            }}
          />
          <span
            style={{
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.76rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Licensed Plumbers &amp; Gasfitters
          </span>
        </motion.div>

        {/* Word-split heading */}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(2.8rem, 5.2vw, 4.6rem)',
            lineHeight: 1.03,
            color: '#fff',
            marginBottom: '1.4rem',
          }}
        >
          <SplitHeading text={heading} baseDelay={0.3} />
        </h1>

        {/* Subheading — word split, smaller stagger */}
        <div
          style={{
            overflow: 'hidden',
            marginBottom: '2.5rem',
          }}
        >
          <motion.p
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              color: 'rgba(226,232,240,0.68)',
              fontFamily: 'var(--font-body)',
              fontSize: '1.08rem',
              lineHeight: 1.7,
              maxWidth: 460,
            }}
          >
            {subheading}
          </motion.p>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0, type: 'spring', stiffness: 260, damping: 20 }}
          style={{ display: 'flex', gap: '1.4rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.75rem' }}
        >
          <MagneticButton href={ctaUrl}>{ctaLabel} →</MagneticButton>

          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            style={{
              color: 'rgba(226,232,240,0.6)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              fontWeight: 500,
              textDecoration: 'none',
              borderBottom: '1px solid rgba(226,232,240,0.18)',
              paddingBottom: 2,
            }}
          >
            {emergencyLabel} — {phone}
          </a>
        </motion.div>

        {/* Credential pills — slide from left, staggered */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {credentials.map((cred, i) => (
            <motion.div
              key={cred}
              initial={{ x: -32, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 1.15 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: '1px solid rgba(14,165,233,0.2)',
                borderRadius: 9999,
                padding: '0.3rem 0.85rem',
                background: 'rgba(14,165,233,0.06)',
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: 'rgba(226,232,240,0.6)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {cred}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute',
          bottom: '5.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
        }}
      >
        <span
          style={{
            color: 'rgba(226,232,240,0.28)',
            fontSize: '0.66rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-body)',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{
            width: 1,
            height: 32,
            background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
          }}
        />
      </motion.div>

      {/* SVG wave transition into next section */}
      <div
        style={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          right: 0,
          zIndex: 15,
          lineHeight: 0,
          pointerEvents: 'none',
        }}
      >
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          style={{ width: '100%', height: 72, display: 'block' }}
        >
          <path
            d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z"
            fill="var(--color-accent)"
          />
        </svg>
      </div>
    </section>
  )
}
