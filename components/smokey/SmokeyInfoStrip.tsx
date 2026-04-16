export default function SmokeyInfoStrip() {
  const items = [
    { label: 'Hours', value: 'Mon–Thu: 7am–3:20pm', sub: 'Friday: 7am–2pm' },
    { label: 'Location', value: '16 Bennett Street', sub: 'Palmerston North' },
    { label: 'Phone', value: '06-354 2009', sub: 'Text orders: 027 249 3465' },
    { label: 'Order Ahead', value: 'Text or call your order', sub: 'Ready when you arrive' },
  ]

  return (
    <section className="sj-info-strip">
      <div className="container">
        {items.map((item, i) => (
          <div key={i} className="sj-info-item">
            <p className="sj-info-label">{item.label}</p>
            <p className="sj-info-value">{item.value}</p>
            <p className="sj-info-sub">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
