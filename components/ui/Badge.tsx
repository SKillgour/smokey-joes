type Props = {
  label: string
  variant?: 'default' | 'accent' | 'muted'
}

export default function Badge({ label, variant = 'default' }: Props) {
  return (
    <span className={`badge badge--${variant}`}>{label}</span>
  )
}
