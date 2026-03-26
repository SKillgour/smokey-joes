type Props = {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  children: React.ReactNode
  className?: string
}

export default function Button({ href, onClick, variant = 'primary', children, className }: Props) {
  const cls = `btn btn-${variant}${className ? ` ${className}` : ''}`

  if (href) {
    return <a href={href} className={cls}>{children}</a>
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
