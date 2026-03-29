export default function SmokeyContact() {
  return (
    <section id="find-us" style={{ background: 'var(--color-surface)', padding: '100px 0' }}>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
      >
        {/* Info */}
        <div>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: 16,
          }}>
            Find Us
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: 'var(--color-cream)',
            marginBottom: 40,
          }}>
            Come in for lunch.
          </h2>

          {[
            { label: 'Address', lines: ['16 Bennett Street', 'Palmerston North'] },
            { label: 'Hours', lines: ['Mon–Thu: 7am – 3:20pm', 'Friday: 7am – 2pm'] },
            { label: 'Phone', lines: ['06-354 2009', '027 249 3465 (text orders)'] },
            { label: 'Email', lines: ['smokeyjoes@xtra.co.nz'] },
          ].map(({ label, lines }) => (
            <div key={label} style={{ marginBottom: 32 }}>
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 10,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: 6,
              }}>
                {label}
              </p>
              {lines.map((line) => (
                <p key={line} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  color: 'var(--color-cream)',
                  lineHeight: 1.6,
                }}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Map embed */}
        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', height: 440 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.2!2d175.608!3d-40.3565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s16+Bennett+Street%2C+Palmerston+North!5e0!3m2!1sen!2snz!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(60%) invert(10%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Smokey Joe's location"
          />
        </div>
      </div>
    </section>
  )
}
