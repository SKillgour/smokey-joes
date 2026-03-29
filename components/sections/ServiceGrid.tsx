'use client'

import { motion } from 'framer-motion'
import {
  Wrench,
  Flame,
  Droplets,
  ShowerHead,
  Wind,
  Building2,
  type LucideIcon,
} from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────
type Service = {
  _id?: string
  id?: string | number
  title: string
  excerpt?: string
  description?: string
  icon?: string
}

type Props = {
  services?: Service[]
  heading?: string
  subheading?: string
}

// ── Icon map ───────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  wrench: Wrench,
  flame: Flame,
  droplets: Droplets,
  shower: ShowerHead,
  wind: Wind,
  building: Building2,
  default: Wrench,
}

const DEFAULT_SERVICES: Service[] = [
  { id: 1, title: 'General Plumbing',    icon: 'wrench',   excerpt: 'Leaks, burst pipes, tap repairs, toilet installations — diagnosed and fixed properly the first time.' },
  { id: 2, title: 'Gas Fitting',          icon: 'flame',    excerpt: 'LPG and natural gas installations, appliance connections, and same-day compliance certificates.' },
  { id: 3, title: 'Hot Water Systems',    icon: 'droplets', excerpt: 'Electric, gas and heat-pump hot water — supply, install or replace, all brands.' },
  { id: 4, title: 'Bathroom Renovations', icon: 'shower',   excerpt: 'Full wet-area fit-outs and tiling-ready plumbing. We work with your builder or manage the whole job.' },
  { id: 5, title: 'Drain Unblocking',     icon: 'wind',     excerpt: 'High-pressure water jetting and CCTV drain inspection. Most blockages cleared within the hour.' },
  { id: 6, title: 'Commercial',           icon: 'building', excerpt: 'Offices, hospitality and light industrial. Fully compliant, minimal disruption to your operation.' },
]

// ── Animation variants ─────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

// ── Component ──────────────────────────────────────────────────────────────
export default function ServiceGrid({
  services = DEFAULT_SERVICES,
  heading = 'Everything Your Property Needs',
  subheading = 'From a dripping tap to a full commercial fit-out — licensed, insured and on time.',
}: Props) {
  return (
    <section
      id="services"
      style={{
        background: 'var(--color-primary)',
        position: 'relative',
        padding: '6rem 2.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Blueprint grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(rgba(14,165,233,0.06) 0 1px, transparent 1px 100%),
            repeating-linear-gradient(90deg, rgba(14,165,233,0.06) 0 1px, transparent 1px 100%)
          `,
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <span
              style={{
                width: 24,
                height: 2,
                background: 'var(--color-accent)',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.76rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Our Services
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#fff',
              lineHeight: 1.08,
              maxWidth: 560,
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              color: 'rgba(226,232,240,0.55)',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              marginTop: '0.75rem',
              maxWidth: 480,
            }}
          >
            {subheading}
          </p>
        </motion.div>

        {/* Service grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5px',
          }}
        >
          {services.map((svc, i) => {
            const iconKey = (svc.icon ?? 'default').toLowerCase()
            const Icon = ICON_MAP[iconKey] ?? ICON_MAP.default
            const num = String(i + 1).padStart(2, '0')

            return (
              <motion.div
                key={svc._id ?? svc.id ?? i}
                variants={item}
                whileHover="hover"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {/* Card */}
                <motion.div
                  whileHover={{ borderColor: 'rgba(14,165,233,0.5)', background: 'rgba(14,165,233,0.05)' }}
                  style={{
                    height: '100%',
                    padding: '2rem',
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(255,255,255,0.02)',
                    cursor: 'default',
                    transition: 'background 0.3s, border-color 0.3s',
                  }}
                >
                  {/* Number */}
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      color: 'rgba(14,165,233,0.4)',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {num}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      border: '1px solid rgba(14,165,233,0.25)',
                      borderRadius: 'var(--radius)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      color: 'var(--color-accent)',
                    }}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: '#fff',
                      letterSpacing: '0.03em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'rgba(226,232,240,0.55)',
                      lineHeight: 1.65,
                    }}
                  >
                    {svc.excerpt ?? svc.description}
                  </p>

                  {/* Bottom accent line — appears on hover via CSS workaround */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'linear-gradient(90deg, var(--color-accent), transparent)',
                      opacity: 0,
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
