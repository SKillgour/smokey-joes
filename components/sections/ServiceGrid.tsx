type Service = {
  _id: string
  title: string
  excerpt?: string
  icon?: string
  slug?: { current: string }
}

type Props = {
  services: Service[]
}

export default function ServiceGrid({ services }: Props) {
  if (!services?.length) return null

  return (
    <section className="service-grid">
      <div className="container">
        <div className="section-heading">
          <h2>Our Services</h2>
        </div>
        <div className="service-grid-items">
          {services.map((service) => (
            <div key={service._id} className="service-card">
              {service.icon && <div className="service-icon">{service.icon}</div>}
              <h3>{service.title}</h3>
              {service.excerpt && <p>{service.excerpt}</p>}
              {service.slug && (
                <a href={`/services/${service.slug.current}`} className="card-link">
                  Learn more
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
