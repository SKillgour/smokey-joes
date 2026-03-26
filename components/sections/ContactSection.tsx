type Contact = {
  phone?: string
  email?: string
  address?: string
  suburb?: string
  city?: string
  googleMapsUrl?: string
  bookingUrl?: string
  hours?: { days: string; hours: string }[]
  serviceAreas?: string[]
}

type Props = {
  contact?: Contact
}

export default function ContactSection({ contact }: Props) {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-heading">
          <h2>Get in Touch</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-details">
            {contact?.phone && (
              <div className="contact-row">
                <strong>Phone</strong>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </div>
            )}
            {contact?.email && (
              <div className="contact-row">
                <strong>Email</strong>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            )}
            {contact?.address && (
              <div className="contact-row">
                <strong>Address</strong>
                <address>
                  {contact.address}<br />
                  {contact.suburb}, {contact.city}
                </address>
              </div>
            )}
            {contact?.hours && contact.hours.length > 0 && (
              <div className="contact-row">
                <strong>Hours</strong>
                <ul>
                  {contact.hours.map((h, i) => (
                    <li key={i}>{h.days}: {h.hours}</li>
                  ))}
                </ul>
              </div>
            )}
            {contact?.bookingUrl && (
              <a href={contact.bookingUrl} className="btn btn-primary">
                Book / Get a Quote
              </a>
            )}
          </div>
          {contact?.googleMapsUrl && (
            <div className="contact-map">
              <a href={contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
