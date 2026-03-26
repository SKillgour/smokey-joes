type Props = {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, heading, subheading, align = 'left' }: Props) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{heading}</h2>
      {subheading && <p className="subheading">{subheading}</p>}
    </div>
  )
}
