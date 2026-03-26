type Props = {
  heading?: string
  businessName?: string
  ctaLabel?: string
  ctaUrl?: string
  phone?: string
}

export default function HeroSplit({ heading, businessName, ctaLabel, ctaUrl, phone }: Props) {
  return (
    <section className="hero-split">
      <div className="hero-split-inner">
        <div className="hero-split-content">
          {businessName && <p className="eyebrow">{businessName}</p>}
          <h1>{heading ?? 'Welcome'}</h1>
          <div className="hero-actions">
            {ctaUrl && (
              <a href={ctaUrl} className="btn btn-primary">
                {ctaLabel ?? 'Get in Touch'}
              </a>
            )}
            {phone && (
              <a href={`tel:${phone}`} className="btn btn-outline">
                {phone}
              </a>
            )}
          </div>
        </div>
        <div className="hero-split-image" />
      </div>
    </section>
  )
}
