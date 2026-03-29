export default function SmokeyFooter() {
  return (
    <footer style={{ background: 'var(--color-primary)', borderTop: '1px solid var(--color-border)', padding: '48px 0 32px' }}>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 40,
        }}
      >
        {/* Brand */}
        <div>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-cream)',
            marginBottom: 12,
          }}>
            Smokey Joe&apos;s
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            lineHeight: 1.7,
            color: 'var(--color-text-muted)',
          }}>
            Real food. No fuss.<br />
            Palmerston North&apos;s lunch bar since forever.
          </p>
        </div>

        {/* Hours */}
        <div>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 10,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: 12,
          }}>
            Hours
          </p>
          {[
            'Mon–Thu: 7am – 3:20pm',
            'Friday: 7am – 2pm',
            'Sat–Sun: Closed',
          ].map((line) => (
            <p key={line} style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'var(--color-text-muted)',
              lineHeight: 1.8,
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 10,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: 12,
          }}>
            Contact
          </p>
          {[
            { label: '16 Bennett Street, Palmerston North', href: 'https://maps.google.com/?q=16+Bennett+Street+Palmerston+North' },
            { label: '06-354 2009', href: 'tel:063542009' },
            { label: '027 249 3465 (text orders)', href: 'sms:0272493465' },
            { label: 'smokeyjoes@xtra.co.nz', href: 'mailto:smokeyjoes@xtra.co.nz' },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{
              display: 'block',
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'var(--color-text-muted)',
              lineHeight: 1.8,
              textDecoration: 'none',
            }}>
              {label}
            </a>
          ))}
        </div>

        {/* Order CTA */}
        <div>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 10,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: 12,
          }}>
            Order Ahead
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
            marginBottom: 16,
          }}>
            Text or call your order — we&apos;ll have it ready when you walk in.
          </p>
          <a
            href="sms:0272493465"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-heading)',
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              background: 'var(--color-accent)',
              padding: '12px 24px',
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
            }}
          >
            Text to Order
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="container"
        style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          color: 'var(--color-text-muted)',
        }}>
          &copy; {new Date().getFullYear()} Smokey Joe&apos;s Lunch Bar
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          color: 'var(--color-text-muted)',
        }}>
          Site by Insightly
        </p>
      </div>
    </footer>
  )
}
