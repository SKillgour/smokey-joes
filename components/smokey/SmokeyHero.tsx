import Image from 'next/image'

export default function SmokeyHero() {
  return (
    <section
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end' }}
    >
      {/* Full-bleed background image */}
      <Image
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&q=80"
        alt="Smokey Joe's burgers"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        sizes="100vw"
      />

      {/* Dark overlay — heavier at bottom */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(24,18,14,0.3) 0%, rgba(24,18,14,0.55) 50%, rgba(24,18,14,0.92) 100%)',
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: 80 }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 11,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: 20,
        }}>
          Palmerston North · Since Day One
        </p>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(52px, 9vw, 120px)',
          fontWeight: 700,
          textTransform: 'uppercase',
          color: 'var(--color-cream)',
          lineHeight: 1,
          marginBottom: 28,
          maxWidth: 800,
        }}>
          Real food.<br />
          <span style={{ color: 'var(--color-accent)' }}>No fuss.</span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: 'rgba(245,240,232,0.75)',
          lineHeight: 1.7,
          maxWidth: 460,
          marginBottom: 40,
        }}>
          Homemade goodies, hot bain marie meals and proper burgers.
          Open 7am till 3:20pm — 16 Bennett Street.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:0272493465"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-heading)',
              fontSize: 14,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              background: 'var(--color-accent)',
              padding: '16px 32px',
              borderRadius: 'var(--radius)',
              transition: 'background var(--transition)',
            }}
          >
            Call to Order
          </a>
          <a
            href="#menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-heading)',
              fontSize: 14,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-cream)',
              border: '1px solid rgba(245,240,232,0.3)',
              padding: '16px 32px',
              borderRadius: 'var(--radius)',
              transition: 'border-color var(--transition)',
            }}
          >
            See the Menu
          </a>
        </div>
      </div>
    </section>
  )
}
