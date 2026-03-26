type Props = {
  areas?: string[]
  heading?: string
}

export default function CoverageSection({ areas, heading }: Props) {
  if (!areas?.length) return null

  return (
    <section className="coverage">
      <div className="container">
        <div className="section-heading">
          <h2>{heading ?? 'Areas We Serve'}</h2>
        </div>
        <div className="coverage-areas">
          {areas.map((area, i) => (
            <span key={i} className="coverage-tag">{area}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
