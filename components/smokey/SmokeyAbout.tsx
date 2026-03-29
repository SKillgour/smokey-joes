import Image from 'next/image'

export default function SmokeyAbout() {
  return (
    <section id="about" style={{ background: 'var(--color-surface)', padding: '100px 0' }}>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 'var(--radius)' }}>
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80"
            alt="Inside Smokey Joe's Lunch Bar"
            fill
            style={{ objectFit: 'cover', borderRadius: 'var(--radius)' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Accent badge */}
          <div style={{
            position: 'absolute',
            bottom: -24,
            right: -24,
            background: 'var(--color-accent)',
            padding: '20px 24px',
            borderRadius: 'var(--radius)',
          }}>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 36,
              fontWeight: 700,
              color: 'var(--color-primary)',
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}>7am</p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              color: 'rgba(24,18,14,0.7)',
              marginTop: 4,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>Open daily</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: 16,
          }}>
            About Us
          </p>

          <h2 style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            color: 'var(--color-cream)',
            marginBottom: 28,
          }}>
            Homemade.<br />
            Every day.
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            lineHeight: 1.8,
            color: 'var(--color-text-muted)',
            marginBottom: 20,
          }}>
            Smokey Joe's has been feeding Palmerston North from the heart of Bennett Street
            for years. We're a proper NZ lunch bar — the kind that makes things fresh,
            knows your name, and never serves you something frozen and microwaved.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            lineHeight: 1.8,
            color: 'var(--color-text-muted)',
            marginBottom: 36,
          }}>
            From our bain marie to our homemade baking to our burgers — everything
            is made with care. Come in, grab a seat, or text ahead and we'll have
            your order ready when you arrive.
          </p>

          <div style={{ display: 'flex', gap: 40 }}>
            {[
              { stat: '7am', label: 'Open every morning' },
              { stat: '100%', label: 'Homemade' },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 40,
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  lineHeight: 1,
                }}>{stat}</p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--color-text-muted)',
                  marginTop: 4,
                  letterSpacing: '0.05em',
                }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
