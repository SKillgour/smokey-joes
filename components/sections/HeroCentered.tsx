type Props = {
  heading?: string
  subheading?: string
  ctaLabel?: string
  ctaUrl?: string
}

export default function HeroCentered({ heading, subheading, ctaLabel, ctaUrl }: Props) {
  return (
    <section className="hero-centered">
      <div className="container">
        <h1>{heading ?? 'Welcome'}</h1>
        {subheading && <p>{subheading}</p>}
        {ctaUrl && (
          <a href={ctaUrl} className="btn btn-primary">
            {ctaLabel ?? 'Get in Touch'}
          </a>
        )}
      </div>
    </section>
  )
}
