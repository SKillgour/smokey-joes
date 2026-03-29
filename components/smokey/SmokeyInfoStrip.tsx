export default function SmokeyInfoStrip() {
  const items = [
    { label: 'Hours', value: 'Mon–Thu: 7am–3:20pm', sub: 'Friday: 7am–2pm' },
    { label: 'Location', value: '16 Bennett Street', sub: 'Palmerston North' },
    { label: 'Phone', value: '06-354 2009', sub: 'Text orders: 027 249 3465' },
    { label: 'Order Ahead', value: 'Text or call your order', sub: 'Ready when you arrive' },
  ]

  return (
    <section style={{ background: 'var(--color-accent)', padding: '0' }}>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 0,
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: '28px 32px',
              borderRight: i < items.length - 1 ? '1px solid rgba(24,18,14,0.2)' : 'none',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 10,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(24,18,14,0.6)',
              marginBottom: 6,
            }}>
              {item.label}
            </p>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 17,
              fontWeight: 600,
              color: 'var(--color-primary)',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
            }}>
              {item.value}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'rgba(24,18,14,0.65)',
              marginTop: 3,
            }}>
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
