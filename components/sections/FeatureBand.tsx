'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

// ── Types ──────────────────────────────────────────────────────────────────
type Stat = {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
}

type Props = {
  stats?: Stat[]
  heading?: string
  subheading?: string
}

const DEFAULT_STATS: Stat[] = [
  { value: 15,   suffix: '+', label: 'Years Experience',    description: 'Serving Manawatu since 2009' },
  { value: 1200, suffix: '+', label: 'Jobs Completed',      description: 'Across residential & commercial' },
  { value: 45,   suffix: 'min', label: 'Emergency Response', description: 'Average arrival time' },
  { value: 100,  suffix: '%',  label: 'Licensed & Insured',  description: 'Every single job, no exceptions' },
]

// ── Animated counter ───────────────────────────────────────────────────────
function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 20 })
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString())

  useEffect(() => {
    if (inView) mv.set(value)
  }, [inView, value, mv])

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

// ── Component ──────────────────────────────────────────────────────────────
export default function FeatureBand({
  stats = DEFAULT_STATS,
  heading = 'Numbers That Matter',
  subheading = 'Kiwi Plumbing & Gas has built a reputation on results, not promises.',
}: Props) {
  return (
    <section
      style={{
        background: 'var(--color-primary)',
        position: 'relative',
        padding: '5.5rem 2.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Accent line top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
        }}
      />

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span style={{ width: 24, height: 2, background: 'var(--color-accent)', display: 'inline-block' }} />
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
              Why Choose Kiwi
            </span>
            <span style={{ width: 24, height: 2, background: 'var(--color-accent)', display: 'inline-block' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#fff',
              lineHeight: 1.08,
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              color: 'rgba(226,232,240,0.5)',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              marginTop: '0.75rem',
            }}
          >
            {subheading}
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 'var(--radius)',
                background: 'rgba(255,255,255,0.02)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle corner accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 40,
                  height: 40,
                  borderTop: '2px solid var(--color-accent)',
                  borderLeft: '2px solid var(--color-accent)',
                  opacity: 0.4,
                  borderRadius: 'var(--radius) 0 0 0',
                }}
              />

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                  color: 'var(--color-accent)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#fff',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                }}
              >
                {stat.label}
              </div>

              {stat.description && (
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    color: 'rgba(226,232,240,0.4)',
                  }}
                >
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accent line bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)',
        }}
      />
    </section>
  )
}
