import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kiwi Plumbing & Gas | Palmerston North',
  description: 'Palmerston North\'s trusted plumbing and gas specialists. Available 24/7 for emergencies. Licensed, local, reliable.',
}

const PHONE = '06 406 3920'
const PHONE_HREF = 'tel:0064064063920'
const EMAIL = 'info@kiwiplumbingandgas.co.nz'
const ADDRESS = 'Church Street, Palmerston North'

const services = [
  {
    icon: '🔧',
    title: 'General Plumbing',
    desc: 'Leaks, burst pipes, tap repairs, toilet installations, pipe replacements — done right the first time.',
  },
  {
    icon: '🔥',
    title: 'Gas Fitting',
    desc: 'LPG and natural gas installations, appliance connections, safety checks and compliance certificates.',
  },
  {
    icon: '🚿',
    title: 'Hot Water Systems',
    desc: 'Electric, gas and heat pump hot water cylinder supply, installation and replacement.',
  },
  {
    icon: '🏠',
    title: 'Bathroom Renovations',
    desc: 'Full bathroom fit-outs, wet rooms, tiling-ready plumbing and modern fixture upgrades.',
  },
  {
    icon: '🌊',
    title: 'Drain Unblocking',
    desc: 'Blocked drains cleared fast with high-pressure jetting and CCTV drain inspection.',
  },
  {
    icon: '🏢',
    title: 'Commercial Work',
    desc: 'Offices, hospitality, retail and light industrial — compliant commercial plumbing solutions.',
  },
]

const testimonials = [
  {
    name: 'Sarah T.',
    location: 'Palmerston North',
    stars: 5,
    text: 'Had a burst pipe at 10pm on a Friday. Called Kiwi Plumbing and they were at my door within 45 minutes. Couldn\'t believe it. Job was done cleanly, no mess left behind. Absolute legends.',
  },
  {
    name: 'Mark H.',
    location: 'Feilding',
    stars: 5,
    text: 'Used them for a full bathroom renovation — new shower, toilet, vanity, the lot. Honest pricing upfront, no surprises on the invoice. The finished result looks incredible. Highly recommended.',
  },
  {
    name: 'Dave & Kim R.',
    location: 'Palmerston North',
    stars: 5,
    text: 'Got our gas hob installed and a Healthy Homes inspection done. Super professional, explained everything clearly and had all the paperwork sorted same day. Will use again for sure.',
  },
]

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '800+', label: 'Jobs Completed' },
  { value: '24/7', label: 'Emergency Service' },
  { value: '100%', label: 'Licensed & Insured' },
]

export default function KiwiPlumbingPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#f8fafc', background: '#0c1220' }}>
      <style>{`
        .kiwi-nav-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.15s;
          font-weight: 500;
          font-size: 0.875rem;
        }
        .kiwi-nav-link:hover { color: #fff; }
        .kiwi-service-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 2rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .kiwi-service-card:hover {
          border-color: rgba(14,165,233,0.4);
          background: rgba(14,165,233,0.07);
        }
      `}</style>

      {/* ── NAV ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(12,18,32,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '2rem', height: 68 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem',
            }}>💧</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.1, color: '#fff', letterSpacing: '-0.02em' }}>KIWI PLUMBING</div>
              <div style={{ fontSize: '0.65rem', color: '#0ea5e9', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>&amp; Gas</div>
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '2rem', marginLeft: 'auto', fontSize: '0.875rem', fontWeight: 500 }}>
            {['Services', 'About', 'Testimonials', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="kiwi-nav-link">
                {link}
              </a>
            ))}
          </nav>
          <a href={PHONE_HREF} style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            color: '#fff', fontWeight: 700, fontSize: '0.9rem',
            padding: '0.55rem 1.25rem', borderRadius: 8, textDecoration: 'none',
            flexShrink: 0,
          }}>
            📞 {PHONE}
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '92vh',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #0c1220 0%, #0f2040 50%, #0c1220 100%)',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(14,165,233,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '20%', right: '10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 1.5rem', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.3)',
              borderRadius: 100, padding: '0.35rem 1rem', marginBottom: '1.5rem',
              fontSize: '0.8rem', fontWeight: 700, color: '#0ea5e9', letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              ✓ Licensed Master Plumber &amp; Gasfitter
            </div>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900,
              lineHeight: 1.08, letterSpacing: '-0.03em', color: '#fff',
              marginBottom: '1.5rem',
            }}>
              Palmerston North&apos;s Most{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Trusted
              </span>{' '}
              Plumbing &amp; Gas Team
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 480 }}>
              From emergency burst pipes to full bathroom renovations — we show up, we fix it properly, and we leave your place cleaner than we found it.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a href={PHONE_HREF} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                color: '#fff', fontWeight: 700, fontSize: '1.1rem',
                padding: '0.9rem 2rem', borderRadius: 10, textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(249,115,22,0.35)',
              }}>
                📞 Call {PHONE}
              </a>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', fontWeight: 600, fontSize: '1rem',
                padding: '0.9rem 1.75rem', borderRadius: 10, textDecoration: 'none',
              }}>
                Get a Free Quote →
              </a>
            </div>
            {/* Trust pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['⚡ 24/7 Emergency', '🛡️ Fully Insured', '📍 Locally Owned', '✅ No Call-out Fee'].map(item => (
                <span key={item} style={{
                  fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6, padding: '0.3rem 0.75rem',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div style={{ position: 'relative' }}>
            {/* Main card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(37,99,235,0.1))',
              border: '1px solid rgba(14,165,233,0.25)',
              borderRadius: 20, padding: '2.5rem',
              backdropFilter: 'blur(12px)',
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem', textAlign: 'center' }}>🔧</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, textAlign: 'center', color: '#fff', marginBottom: '0.25rem' }}>
                Available Now
              </div>
              <div style={{ textAlign: 'center', color: '#0ea5e9', fontWeight: 600, marginBottom: '2rem', fontSize: '1rem' }}>
                Emergency response in 45 minutes
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                {stats.map(s => (
                  <div key={s.value} style={{
                    background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.25rem',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0ea5e9', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem', fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} style={{
                display: 'block', textAlign: 'center',
                background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
                color: '#fff', fontWeight: 700, fontSize: '1rem',
                padding: '1rem', borderRadius: 10, textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(14,165,233,0.3)',
              }}>
                Call Now — We Answer 24/7
              </a>
            </div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: -16, right: -16,
              background: 'linear-gradient(135deg, #f97316, #dc2626)',
              color: '#fff', fontWeight: 800, fontSize: '0.75rem',
              padding: '0.5rem 1rem', borderRadius: 100,
              boxShadow: '0 4px 16px rgba(249,115,22,0.4)',
              letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>
              🚨 Emergency? Call Now
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: 'linear-gradient(135deg, #0ea5e9, #2563eb)', padding: '1.25rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
          {[
            '🏅 Master Plumber Certified',
            '🔐 Licensed Gasfitter',
            '⚡ Same-Day Service Available',
            '📋 Compliance Certificates Issued',
            '🌿 Healthy Homes Inspections',
          ].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.875rem', color: '#fff', whiteSpace: 'nowrap' }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '6rem 0', background: '#0f1827' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0ea5e9', marginBottom: '1rem' }}>
              What We Do
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 1rem' }}>
              Every Plumbing &amp; Gas Job, Done Properly
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto' }}>
              Residential and commercial. Routine maintenance to urgent callouts. One team, fully covered.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <div key={i} className="kiwi-service-card">
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', marginBottom: '1.25rem',
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem', margin: '0 0 0.6rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY BANNER ── */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #7f1d1d, #991b1b, #dc2626)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚨</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: '#fff', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Burst Pipe? Gas Leak? Blocked Drain?
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
            We answer 24 hours a day, 7 days a week. No after-hours surcharge on most callouts.
          </p>
          <a href={PHONE_HREF} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            background: '#fff', color: '#dc2626',
            fontWeight: 800, fontSize: '1.3rem',
            padding: '1rem 2.5rem', borderRadius: 12, textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}>
            📞 {PHONE} — Call Us Now
          </a>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="about" style={{ padding: '6rem 0', background: '#0c1220' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          {/* Left — visual */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(37,99,235,0.08))',
              border: '1px solid rgba(14,165,233,0.2)',
              borderRadius: 20, padding: '3rem', textAlign: 'center',
            }}>
              <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🏡</div>
              <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                <strong style={{ color: '#fff', display: 'block', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  Palmerston North born and bred.
                </strong>
                We&apos;re not a franchise. We&apos;re your neighbours — and we treat every job like it&apos;s our own home.
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                {[
                  { icon: '🛡️', text: 'Fully Licensed' },
                  { icon: '📋', text: 'Gas Compliance Certs' },
                  { icon: '⚡', text: 'Fast Turnaround' },
                  { icon: '💬', text: 'Clear Communication' },
                ].map(item => (
                  <div key={item.text} style={{
                    background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: '1rem',
                    fontSize: '0.875rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right — content */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0ea5e9', marginBottom: '1rem' }}>
              About Us
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              15 Years Keeping Palmerston North&apos;s Water Flowing
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
              Kiwi Plumbing &amp; Gas has been serving homes and businesses across Palmerston North and the wider Manawatu region since 2009. We started small — one van, one plumber — and grew purely on word of mouth. That tells you something.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1rem' }}>
              Every member of our team is fully licensed and certified. We carry comprehensive insurance, and we&apos;re proud to issue gas compliance certificates and Healthy Homes reports on the same day.
            </p>
            <div style={{ display: 'flex', gap: '3rem' }}>
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '800+', label: 'Happy Clients' },
                { value: '4.9★', label: 'Google Rating' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0ea5e9', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', fontWeight: 600, marginTop: '0.25rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ padding: '6rem 0', background: '#0f1827' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0ea5e9', marginBottom: '1rem' }}>
              What Our Customers Say
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>
              Don&apos;t Just Take Our Word For It
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16, padding: '2rem',
              }}>
                <div style={{ color: '#f97316', fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  {'★'.repeat(t.stars)}
                </div>
                <blockquote style={{ margin: '0 0 1.5rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontSize: '0.95rem', fontStyle: 'italic' }}>
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.15rem' }}>{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '6rem 0', background: '#0c1220' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0ea5e9', marginBottom: '1rem' }}>
              Simple Process
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>
              How It Works
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { step: '01', icon: '📞', title: 'Call or Email', desc: 'Get in touch any time. We answer 24/7 for emergencies, or book a convenient time.' },
              { step: '02', icon: '🕐', title: 'Fast Response', desc: 'We confirm your booking and give you a clear time window — no all-day waiting around.' },
              { step: '03', icon: '🔧', title: 'Job Done Right', desc: 'Our licensed team arrives on time, fully equipped, and fixes it properly first time.' },
              { step: '04', icon: '✅', title: 'Clean & Clear', desc: 'We tidy up, explain what we did, and issue any compliance docs on the spot.' },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(14,165,233,0.2), rgba(37,99,235,0.15))',
                  border: '1px solid rgba(14,165,233,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.75rem', margin: '0 auto 1.25rem',
                }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0ea5e9', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  STEP {item.step}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', margin: '0 0 0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / FINAL CTA ── */}
      <section id="contact" style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #0f2040, #0c1220)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0ea5e9', marginBottom: '1rem' }}>
              Get in Touch
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Let&apos;s Sort Your Plumbing Out
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Whether it&apos;s an urgent callout or a planned renovation, we&apos;re ready to help. Call, email or use the form — we respond quickly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: '📞', label: 'Phone', value: PHONE, href: PHONE_HREF },
                { icon: '📧', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: '📍', label: 'Location', value: ADDRESS, href: '#' },
                { icon: '🕐', label: 'Hours', value: 'Mon–Fri 7am–6pm | Emergency 24/7', href: '#' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                  }}>
                    {row.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                      {row.label}
                    </div>
                    <a href={row.href} style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>
                      {row.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right — contact form */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20, padding: '2.5rem',
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.75rem', margin: '0 0 1.75rem' }}>
              Request a Free Quote
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Your Name', type: 'text', placeholder: 'John Smith' },
                { label: 'Phone Number', type: 'tel', placeholder: '027 000 0000' },
                { label: 'Email Address', type: 'email', placeholder: 'john@email.com' },
              ].map(field => (
                <div key={field.label}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 8, padding: '0.75rem 1rem',
                      color: '#fff', fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  What Do You Need?
                </label>
                <select style={{
                  width: '100%', boxSizing: 'border-box',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 8, padding: '0.75rem 1rem',
                  color: '#fff', fontSize: '0.95rem', outline: 'none',
                }}>
                  <option>General plumbing repair</option>
                  <option>Gas fitting / installation</option>
                  <option>Hot water system</option>
                  <option>Bathroom renovation</option>
                  <option>Drain unblocking</option>
                  <option>Emergency callout</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a bit about the job..."
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 8, padding: '0.75rem 1rem',
                    color: '#fff', fontSize: '0.95rem',
                    outline: 'none', resize: 'vertical',
                  }}
                />
              </div>
              <button style={{
                background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
                color: '#fff', fontWeight: 700, fontSize: '1rem',
                padding: '0.9rem', borderRadius: 10, border: 'none',
                cursor: 'pointer', width: '100%',
                boxShadow: '0 8px 24px rgba(14,165,233,0.3)',
              }}>
                Send Request →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#070d18', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '3rem 0 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 7,
                background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              }}>💧</div>
              <div style={{ fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>KIWI PLUMBING &amp; GAS</div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 280 }}>
              Licensed plumbers and gasfitters serving Palmerston North and the Manawatu region since 2009.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['General Plumbing', 'Gas Fitting', 'Hot Water Systems', 'Bathroom Renos', 'Drain Unblocking', 'Commercial'].map(s => (
                <a key={s} href="#services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', textDecoration: 'none' }}>{s}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)' }}>
              <a href={PHONE_HREF} style={{ color: '#0ea5e9', fontWeight: 600, textDecoration: 'none' }}>{PHONE}</a>
              <a href={`mailto:${EMAIL}`} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.45)' }}>{EMAIL}</a>
              <address style={{ fontStyle: 'normal' }}>{ADDRESS}</address>
              <div>Emergency: 24/7</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', maxWidth: 1200, margin: '0 auto', padding: '1.5rem 1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Kiwi Plumbing &amp; Gas Limited. All rights reserved.
          </div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>
            Licensed Master Plumber &amp; Gasfitter — Palmerston North, NZ
          </div>
        </div>
      </footer>

    </div>
  )
}
