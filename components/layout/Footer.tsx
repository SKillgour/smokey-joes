import { getSiteSettings } from '@/lib/getSiteSettings'
import { getContactSettings } from '@/lib/getContactSettings'

export default async function Footer() {
  const [site, contact] = await Promise.all([
    getSiteSettings(),
    getContactSettings(),
  ])

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">{site?.businessName}</div>
          {site?.tagline && <p>{site.tagline}</p>}
        </div>
        <div className="footer-contact">
          {contact?.phone && <a href={`tel:${contact.phone}`}>{contact.phone}</a>}
          {contact?.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
          {contact?.address && (
            <address>
              {contact.address}, {contact.suburb}, {contact.city}
            </address>
          )}
        </div>
        <div className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/news">News</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="footer-base">
        <p>&copy; {new Date().getFullYear()} {site?.businessName}. All rights reserved.</p>
      </div>
    </footer>
  )
}
