export default function SmokeyOrderCTA() {
  return (
    <section style={{
      background: 'var(--color-accent)',
      padding: '80px 0',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 11,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
          marginBottom: 16,
        }}>
          Order Ahead
        </p>
        <h2 style={{
          fontSize: 'clamp(36px, 6vw, 72px)',
          color: '#ffffff',
          marginBottom: 16,
        }}>
          Skip the wait.
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 18,
          color: 'rgba(255,255,255,0.75)',
          marginBottom: 40,
          lineHeight: 1.7,
        }}>
          Text or call your order ahead, we'll have it ready when you walk in.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="sms:0272493465"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 14,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-cream)',
              background: 'var(--color-primary)',
              padding: '18px 36px',
              borderRadius: 'var(--radius)',
            }}
          >
            Text: 027 249 3465
          </a>
          <a
            href="tel:063542009"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 14,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              border: '2px solid rgba(255,255,255,0.45)',
              padding: '18px 36px',
              borderRadius: 'var(--radius)',
            }}
          >
            Call: 06-354 2009
          </a>
        </div>
      </div>
    </section>
  )
}
