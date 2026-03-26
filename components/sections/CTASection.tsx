type Props = {
  heading: string
  subheading?: string
  ctaLabel?: string
  ctaUrl?: string
}

export default function CTASection({ heading, subheading, ctaLabel, ctaUrl }: Props) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>{heading}</h2>
        {subheading && <p>{subheading}</p>}
        {ctaUrl && (
          <a href={ctaUrl} className="btn btn-primary">
            {ctaLabel ?? 'Get Started'}
          </a>
        )}
      </div>
    </section>
  )
}
