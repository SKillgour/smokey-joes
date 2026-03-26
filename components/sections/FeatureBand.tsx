type Feature = {
  icon?: string
  label: string
}

type Props = {
  features?: Feature[]
}

export default function FeatureBand({ features }: Props) {
  if (!features?.length) return null

  return (
    <div className="feature-band">
      <div className="container">
        {features.map((feature, i) => (
          <div key={i} className="feature-band-item">
            {feature.icon && <span>{feature.icon}</span>}
            <span>{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
