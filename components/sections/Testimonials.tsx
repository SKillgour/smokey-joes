'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

// ── Types ──────────────────────────────────────────────────────────────────
type Testimonial = {
  _id?: string
  id?: string | number
  quote: string
  name: string
  location?: string
  rating?: number
}

type Props = {
  testimonials?: Testimonial[]
  heading?: string
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Sarah T.',      location: 'Palmerston North', rating: 5,
    quote: 'Burst pipe at 10pm on a Friday. Kiwi Plumbing were at my door in under 45 minutes. Sorted, cleaned up, no dramas. Absolute legends.' },
  { id: 2, name: 'Mark H.',       location: 'Feilding',          rating: 5,
    quote: 'Full bathroom reno — new shower, toilet, vanity. Honest pricing upfront, no surprises on the invoice. Result looks incredible.' },
  { id: 3, name: 'Jo & Dave R.', location: 'Palmerston North', rating: 5,
    quote: 'Gas hob install plus Healthy Homes report done same day. Super professional, had all paperwork sorted on the spot. Will use again.' },
  { id: 4, name: 'Craig M.',      location: 'Ashhurst',          rating: 5,
    quote: 'Hot water cylinder packed in before a long weekend. Kiwi had a new unit in by midday Saturday. Lifesavers — genuinely outstanding service.' },
  { id: 5, name: 'Leanne W.',     location: 'Palmerston North', rating: 5,
    quote: 'Blocked drain cleared in under an hour. No mess, no fuss, fair price. First call I\'ll make next time anything goes wrong.' },
]

// Duplicate array for seamless infinite loop
function doubled<T>(arr: T[]): T[] {
  return [...arr, ...arr]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: '1rem' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? 'var(--color-accent-2)' : 'none'}
          stroke={i < rating ? 'var(--color-accent-2)' : 'rgba(226,232,240,0.2)'}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

// ── Component ──────────────────────────────────────────────────────────────
export default function Testimonials({
  testimonials = DEFAULT_TESTIMONIALS,
  heading = 'Trusted Across Manawatu',
}: Props) {
  const [paused, setPaused] = useState(false)
  const cards = doubled(testimonials)
  const CARD_W = 360
  const GAP = 24
  const totalW = testimonials.length * (CARD_W + GAP)

  return (
    <section
      id="testimonials"
      style={{
        background: 'var(--color-surface)',
        padding: '6rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ padding: '0 2.5rem', marginBottom: '3.5rem' }}
      >
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
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
              What Our Customers Say
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: 'var(--color-text)',
              lineHeight: 1.08,
            }}
          >
            {heading}
          </h2>
        </div>
      </motion.div>

      {/* Scrolling track */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ overflow: 'hidden', cursor: 'default' }}
      >
        <motion.div
          animate={{ x: paused ? undefined : [-0, -totalW] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: testimonials.length * 6,
              ease: 'linear',
            },
          }}
          style={{
            display: 'flex',
            gap: GAP,
            width: 'max-content',
            padding: '0.5rem 0 1.5rem',
          }}
        >
          {cards.map((t, i) => (
            <div
              key={i}
              style={{
                width: CARD_W,
                flexShrink: 0,
                background: '#fff',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {t.rating != null && <StarRating rating={t.rating} />}

              <blockquote
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--color-text)',
                  marginBottom: '1.5rem',
                  fontStyle: 'normal',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    {t.name}
                  </div>
                  {t.location && (
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.78rem',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {t.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div
        style={{
          position: 'relative',
          pointerEvents: 'none',
          marginTop: -8,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: 'linear-gradient(to right, var(--color-surface), transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: 'linear-gradient(to left, var(--color-surface), transparent)',
          }}
        />
      </div>
    </section>
  )
}
