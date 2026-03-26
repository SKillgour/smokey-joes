type Testimonial = {
  _id: string
  quote: string
  name: string
  location?: string
  rating?: number
}

type Props = {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: Props) {
  if (!testimonials?.length) return null

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading">
          <h2>What Our Customers Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t._id} className="testimonial-card">
              {t.rating && (
                <div className="stars">
                  {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                </div>
              )}
              <blockquote>{t.quote}</blockquote>
              <cite>
                {t.name}
                {t.location && <span> — {t.location}</span>}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
