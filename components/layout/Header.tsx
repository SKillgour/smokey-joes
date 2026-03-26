import { getSiteSettings } from '@/lib/getSiteSettings'
import { getContactSettings } from '@/lib/getContactSettings'

export default async function Header() {
  const [site, contact] = await Promise.all([
    getSiteSettings(),
    getContactSettings(),
  ])

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">{site?.businessName ?? 'Site Name'}</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/news">News</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="header-actions">
          {contact?.phone && (
            <a href={`tel:${contact.phone}`} className="header-phone">
              {contact.phone}
            </a>
          )}
          {site?.primaryCtaUrl && (
            <a href={site.primaryCtaUrl} className="btn btn-primary">
              {site.primaryCtaLabel ?? 'Get in Touch'}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
