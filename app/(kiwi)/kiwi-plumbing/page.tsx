// Kiwi Plumbing & Gas — Concept site
// Brand: charcoal #3d4f5c · teal #009bbe · font: Barlow Condensed / Barlow

const PHONE = '06 406 3920'
const PHONE_HREF = 'tel:0064064063920'
const EMAIL = 'info@kiwiplumbingandgas.co.nz'
const ADDRESS = 'Palmerston North, Manawatu'
const LOGO_URL = 'https://static.wixstatic.com/media/e8a099_2dda15a5ecb54906895df4110bc1ea47~mv2.png'

// Unsplash photos — dark overlay means graceful fallback if they miss
const HERO_IMG   = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80'
const ABOUT_IMG  = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80'
const CTA_IMG    = 'https://images.unsplash.com/photo-1504222490345-c075b7c74399?w=1920&q=80'

const services = [
  { n: '01', title: 'General Plumbing',       desc: 'Leaks, burst pipes, tap repairs, toilet installations — diagnosed and fixed properly the first time.',   icon: <IconWrench /> },
  { n: '02', title: 'Gas Fitting',             desc: 'LPG and natural gas installations, appliance connections, and same-day compliance certificates.',          icon: <IconFlame /> },
  { n: '03', title: 'Hot Water Systems',       desc: 'Electric, gas and heat-pump hot water — supply, install or replace, all brands.',                          icon: <IconDroplet /> },
  { n: '04', title: 'Bathroom Renovations',    desc: 'Full wet-area fit-outs and tiling-ready plumbing. We work with your builder or manage the whole job.',     icon: <IconShower /> },
  { n: '05', title: 'Drain Unblocking',        desc: 'High-pressure water jetting and CCTV drain inspection. Most blockages cleared within the hour.',           icon: <IconPipe /> },
  { n: '06', title: 'Commercial',              desc: 'Offices, hospitality and light industrial. Fully compliant, minimal disruption to your operation.',         icon: <IconBuilding /> },
]

const testimonials = [
  { name: 'Sarah T.', suburb: 'Palmerston North', text: 'Burst pipe at 10pm on a Friday. Kiwi Plumbing were at my door in under 45 minutes. Sorted, cleaned up, no dramas. Absolute legends.' },
  { name: 'Mark H.',  suburb: 'Feilding',          text: 'Full bathroom reno — new shower, toilet, vanity. Honest pricing upfront, no surprises on the invoice. Result looks incredible.' },
  { name: 'Jo & Dave R.', suburb: 'Palmerston North', text: 'Gas hob install plus Healthy Homes report done same day. Super professional, had all paperwork sorted on the spot. Will use again.' },
]

// ── SVG Icons ─────────────────────────────────────────────────────────────────
function IconWrench() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
}
function IconFlame() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
}
function IconDroplet() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5-2 1.6-3 3.5-3 5.5a7 7 0 0 0 7 7z"/></svg>
}
function IconShower() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h3a2 2 0 0 1 2 2v14H4V6a2 2 0 0 0-2-2z"/><path d="M9 6h11v14H9V6z"/><path d="M12 10v4"/><path d="M16 10v4"/><path d="M12 16v2"/><path d="M16 16v2"/></svg>
}
function IconPipe() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v4z"/></svg>
}
function IconBuilding() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
}
function IconPhone() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function IconMail() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
}
function IconPin() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
}
function IconCheck() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
}
function IconStar() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="#009bbe" stroke="#009bbe" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
}
function IconArrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function KiwiPlumbingPage() {
  return (
    <div style={{ fontFamily: "'Barlow', system-ui, sans-serif", color: '#1a252e', background: '#fff' }}>
      <style>{`
        .kp-font-heading { font-family: 'Barlow Condensed', system-ui, sans-serif; }
        .kp-nav-link { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 0.9rem; font-weight: 500; letter-spacing: 0.01em; transition: color 0.15s; }
        .kp-nav-link:hover { color: #fff; }
        .kp-service-card { background: #f8f9fa; border: 1px solid #e8edf0; border-radius: 12px; padding: 2rem; transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s; }
        .kp-service-card:hover { border-color: #009bbe; box-shadow: 0 8px 32px rgba(0,155,190,0.12); transform: translateY(-2px); }
        .kp-service-icon { color: #009bbe; margin-bottom: 1.25rem; }
        .kp-tcard:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .kp-tcard { transition: box-shadow 0.2s, transform 0.2s; }
        .kp-btn-teal { background: #009bbe; color: #fff; border: none; border-radius: 6px; font-weight: 600; font-size: 1rem; padding: 0.85rem 2rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; transition: background 0.15s, transform 0.15s; font-family: 'Barlow', system-ui, sans-serif; }
        .kp-btn-teal:hover { background: #007fa0; transform: translateY(-1px); }
        .kp-btn-outline { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.5); border-radius: 6px; font-weight: 600; font-size: 1rem; padding: 0.8rem 1.75rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; transition: border-color 0.15s; font-family: 'Barlow', system-ui, sans-serif; }
        .kp-btn-outline:hover { border-color: #fff; }
        .kp-input { width: 100%; box-sizing: border-box; background: #f8f9fa; border: 1px solid #dde3e7; border-radius: 6px; padding: 0.8rem 1rem; font-size: 0.95rem; color: #1a252e; font-family: 'Barlow', system-ui, sans-serif; outline: none; transition: border-color 0.15s; }
        .kp-input:focus { border-color: #009bbe; }
        .kp-footer-link { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.875rem; transition: color 0.15s; }
        .kp-footer-link:hover { color: #fff; }
        @keyframes kp-fadeup { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .kp-fadeup { animation: kp-fadeup 0.7s ease both; }
        .kp-fadeup-2 { animation: kp-fadeup 0.7s 0.15s ease both; }
        .kp-fadeup-3 { animation: kp-fadeup 0.7s 0.3s ease both; }
      `}</style>

      {/* ── NAV ────────────────────────────────────────────────────────── */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#3d4f5c', boxShadow: '0 1px 0 rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '2rem', height: 72 }}>
          <a href="#top" style={{ flexShrink: 0, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src={LOGO_URL} alt="Kiwi Plumbing and Gas" style={{ height: 42, width: 'auto', display: 'block' }} />
          </a>
          <nav style={{ display: 'flex', gap: '2rem', marginLeft: 'auto' }}>
            {[['#services', 'Services'], ['#about', 'About Us'], ['#testimonials', 'Reviews'], ['#contact', 'Contact']].map(([href, label]) => (
              <a key={href} href={href} className="kp-nav-link">{label}</a>
            ))}
          </nav>
          <a href={PHONE_HREF} className="kp-btn-teal" style={{ flexShrink: 0, fontSize: '0.9rem', padding: '0.6rem 1.25rem' }}>
            <IconPhone />{PHONE}
          </a>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section id="top" style={{
        minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden',
        backgroundImage: `linear-gradient(to right, rgba(28,43,53,0.96) 45%, rgba(28,43,53,0.7)), url('${HERO_IMG}')`,
        backgroundSize: 'cover', backgroundPosition: 'center right',
        backgroundColor: '#1c2b35',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 1.5rem', width: '100%' }}>
          <div style={{ maxWidth: 640 }}>
            <div className="kp-fadeup" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem',
              background: 'rgba(0,155,190,0.15)', border: '1px solid rgba(0,155,190,0.4)',
              borderRadius: 4, padding: '0.35rem 0.9rem',
            }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#009bbe' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#009bbe', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Licensed Master Plumber &amp; Gasfitter — Palmerston North
              </span>
            </div>
            <h1 className="kp-font-heading kp-fadeup-2" style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, lineHeight: 0.95,
              letterSpacing: '-0.02em', color: '#fff', margin: '0 0 1.5rem', textTransform: 'uppercase',
            }}>
              Plumbing &amp; Gas<br />
              <span style={{ color: '#009bbe' }}>Done Right.</span>
            </h1>
            <p className="kp-fadeup-3" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 480 }}>
              Palmerston North&apos;s go-to team for plumbing, gas fitting and hot water. We show up, we fix it properly, and we leave the place how we found it.
            </p>
            <div className="kp-fadeup-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
              <a href={PHONE_HREF} className="kp-btn-teal" style={{ fontSize: '1.05rem', padding: '0.9rem 2rem' }}>
                <IconPhone /> Call {PHONE}
              </a>
              <a href="#contact" className="kp-btn-outline">
                Get a Free Quote <IconArrow />
              </a>
            </div>
            {/* Trust pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {['24/7 Emergency', 'No Call-Out Fee', 'Locally Owned', 'Same-Day Available'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', fontWeight: 500 }}>
                  <div style={{ color: '#009bbe' }}><IconCheck /></div>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating card bottom-right */}
        <div style={{
          position: 'absolute', bottom: '3rem', right: '3rem',
          background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '1.5rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {[
            { value: '15+', label: 'Years in Business' },
            { value: '800+', label: 'Jobs Completed' },
            { value: '4.9★', label: 'Google Rating' },
          ].map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
              <span className="kp-font-heading" style={{ fontSize: '2rem', fontWeight: 900, color: '#009bbe', lineHeight: 1 }}>{s.value}</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BAND ─────────────────────────────────────────────────── */}
      <section style={{ background: '#f0f7fa', borderBottom: '1px solid #dceef4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 3rem' }}>
          {[
            '✔ Master Plumber Certified',
            '✔ Licensed Gasfitter',
            '✔ Gas Compliance Certificates',
            '✔ Healthy Homes Inspections',
            '✔ Same-Day Service',
          ].map(item => (
            <span key={item} style={{ fontSize: '0.82rem', fontWeight: 700, color: '#3d4f5c', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────── */}
      <section id="services" style={{ padding: '7rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
            {/* Left — section label */}
            <div style={{ position: 'sticky', top: '6rem' }}>
              <div style={{ width: 40, height: 3, background: '#009bbe', marginBottom: '1.5rem' }} />
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#009bbe', marginBottom: '1rem' }}>
                What We Do
              </div>
              <h2 className="kp-font-heading" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.05, textTransform: 'uppercase', color: '#1a252e', margin: '0 0 1.5rem' }}>
                Every Job,<br />Done Properly
              </h2>
              <p style={{ color: '#5a6b77', lineHeight: 1.75, fontSize: '1rem', marginBottom: '2rem' }}>
                Residential and commercial. One call gets you a licensed team that&apos;s done this a thousand times.
              </p>
              <a href={PHONE_HREF} className="kp-btn-teal">
                <IconPhone /> Book a Job
              </a>
            </div>

            {/* Right — service grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {services.map((s) => (
                <div key={s.n} className="kp-service-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div className="kp-service-icon">{s.icon}</div>
                    <span className="kp-font-heading" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#c8d6dd', letterSpacing: '-0.02em' }}>{s.n}</span>
                  </div>
                  <h3 className="kp-font-heading" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a252e', margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '0.01em' }}>
                    {s.title}
                  </h3>
                  <p style={{ color: '#5a6b77', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NUMBERS ────────────────────────────────────────────────────── */}
      <section style={{ background: '#1a252e', padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: '15+',   label: 'Years serving\nPalmerston North' },
              { value: '800+',  label: 'Jobs completed\nand counting'      },
              { value: '24/7',  label: 'Emergency service\nevery day'        },
              { value: '100%',  label: 'Licensed and\nfully insured'         },
            ].map(s => (
              <div key={s.value} style={{ padding: '1rem 0', borderTop: '2px solid rgba(0,155,190,0.3)' }}>
                <div className="kp-font-heading" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)', fontWeight: 900, color: '#009bbe', lineHeight: 1, marginBottom: '0.75rem' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500, lineHeight: 1.5, whiteSpace: 'pre-line', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY ──────────────────────────────────────────────────── */}
      <section style={{
        padding: '5rem 0', position: 'relative', overflow: 'hidden',
        background: '#009bbe',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: `url('${CTA_IMG}')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', position: 'relative' }}>
          <div>
            <h2 className="kp-font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', margin: '0 0 0.5rem', textTransform: 'uppercase' }}>
              Burst Pipe? Gas Leak? Blocked Drain?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', margin: 0 }}>
              We answer around the clock. Most emergency callouts within 45 minutes.
            </p>
          </div>
          <a href={PHONE_HREF} style={{
            background: '#fff', color: '#009bbe', borderRadius: 8,
            fontWeight: 800, fontSize: '1.3rem', padding: '1.1rem 2.5rem',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)', whiteSpace: 'nowrap', flexShrink: 0,
            fontFamily: "'Barlow Condensed', system-ui, sans-serif", letterSpacing: '0.01em',
          }}>
            <IconPhone /> {PHONE}
          </a>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────── */}
      <section id="testimonials" style={{ padding: '7rem 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ width: 40, height: 3, background: '#009bbe', marginBottom: '1.5rem' }} />
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#009bbe', marginBottom: '1rem' }}>
              Customer Reviews
            </div>
            <h2 className="kp-font-heading" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, color: '#1a252e', margin: 0, textTransform: 'uppercase' }}>
              What Our Customers Say
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="kp-tcard" style={{ background: '#fff', borderRadius: 12, padding: '2.25rem', border: '1px solid #e8edf0' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_, j) => <IconStar key={j} />)}
                </div>
                <blockquote style={{ margin: '0 0 1.75rem', color: '#3d4f5c', lineHeight: 1.75, fontSize: '1rem', fontStyle: 'italic' }}>
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid #f0f3f5', paddingTop: '1.25rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#009bbe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{t.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1a252e', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#8a9ba4' }}>{t.suburb}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────── */}
      <section id="about" style={{ padding: '7rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          {/* Photo */}
          <div style={{
            borderRadius: 16, overflow: 'hidden', aspectRatio: '4/5',
            backgroundImage: `url('${ABOUT_IMG}')`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundColor: '#e0edf2', position: 'relative',
          }}>
            {/* Overlay card */}
            <div style={{
              position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem',
              background: 'rgba(28,43,53,0.9)', backdropFilter: 'blur(12px)',
              borderRadius: 10, padding: '1.25rem 1.5rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
            }}>
              <div style={{ background: '#009bbe', borderRadius: 8, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontSize: '1.4rem' }}>🏆</span>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Master Plumber Certified</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>Gas Compliance Certificates Issued</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div style={{ width: 40, height: 3, background: '#009bbe', marginBottom: '1.5rem' }} />
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#009bbe', marginBottom: '1rem' }}>
              About Us
            </div>
            <h2 className="kp-font-heading" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, color: '#1a252e', margin: '0 0 1.5rem', textTransform: 'uppercase', lineHeight: 1.05 }}>
              15 Years Keeping<br />Palmerston North<br />Running
            </h2>
            <p style={{ color: '#5a6b77', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Kiwi Plumbing &amp; Gas has been working in homes and businesses across the Manawatu since 2009. We started with one van and grew purely on word of mouth — which tells you everything about how we operate.
            </p>
            <p style={{ color: '#5a6b77', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Every tradesperson on our team is fully licensed. We&apos;re comprehensive insurance holders, issue gas compliance certificates, and complete Healthy Homes assessments on the day of the job.
            </p>
            {/* Credentials list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Licensed Master Plumber & Gasfitter',
                'Gas compliance certificates issued same-day',
                'Healthy Homes inspections',
                'Fully insured — residential & commercial',
                'Palmerston North & Manawatu-wide coverage',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: '#3d4f5c', fontWeight: 500 }}>
                  <div style={{ color: '#009bbe', flexShrink: 0 }}><IconCheck /></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ width: 40, height: 3, background: '#009bbe', margin: '0 auto 1.5rem' }} />
            <h2 className="kp-font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#1a252e', margin: 0, textTransform: 'uppercase' }}>
              How It Works
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[
              { n: '01', title: 'Call or Email',      desc: 'Get in touch any time. Emergencies answered 24/7, or book a time that suits you.' },
              { n: '02', title: 'Quick Confirmation', desc: 'We confirm your booking and give you a specific time window — not an all-day slot.' },
              { n: '03', title: 'We Show Up',         desc: 'Our licensed team arrives on time, fully equipped. No subcontractors, no surprises.' },
              { n: '04', title: 'All Sorted',         desc: 'Job done right, site cleaned up, compliance docs issued. Simple as that.' },
            ].map(step => (
              <div key={step.n} style={{ background: '#fff', borderRadius: 12, padding: '2rem', border: '1px solid #e8edf0' }}>
                <div className="kp-font-heading" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#e0edf2', lineHeight: 1, marginBottom: '1.25rem' }}>
                  {step.n}
                </div>
                <h3 className="kp-font-heading" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a252e', margin: '0 0 0.6rem', textTransform: 'uppercase' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#5a6b77', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: '7rem 0', background: '#1a252e' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div style={{ width: 40, height: 3, background: '#009bbe', marginBottom: '1.5rem' }} />
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#009bbe', marginBottom: '1rem' }}>
              Get in Touch
            </div>
            <h2 className="kp-font-heading" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', margin: '0 0 1.5rem', textTransform: 'uppercase', lineHeight: 1.05 }}>
              Let&apos;s Sort Your<br />Plumbing Out
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '3rem', fontSize: '1rem' }}>
              Whether it&apos;s an urgent callout or a planned job, we&apos;re ready. Call, email, or fill in the form and we&apos;ll get back to you fast.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: <IconPhone />, label: 'Phone', value: PHONE,   href: PHONE_HREF },
                { icon: <IconMail />,  label: 'Email', value: EMAIL,   href: `mailto:${EMAIL}` },
                { icon: <IconPin />,   label: 'Base',  value: ADDRESS, href: '#' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#009bbe', marginTop: 2, flexShrink: 0 }}>{row.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                      {row.label}
                    </div>
                    <a href={row.href} style={{ color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
                      {row.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '2.5rem' }}>
            <h3 className="kp-font-heading" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a252e', margin: '0 0 1.75rem', textTransform: 'uppercase' }}>
              Request a Free Quote
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Your Name',     type: 'text',  placeholder: 'John Smith' },
                { label: 'Phone Number',  type: 'tel',   placeholder: '027 000 0000' },
                { label: 'Email Address', type: 'email', placeholder: 'john@email.com' },
              ].map(f => (
                <div key={f.label}>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#8a9ba4', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                    {f.label}
                  </label>
                  <input type={f.type} placeholder={f.placeholder} className="kp-input" />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#8a9ba4', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  Job Type
                </label>
                <select className="kp-input">
                  <option>General plumbing repair</option>
                  <option>Gas fitting / installation</option>
                  <option>Hot water system</option>
                  <option>Bathroom renovation</option>
                  <option>Drain unblocking</option>
                  <option>Emergency callout</option>
                  <option>Compliance / Healthy Homes</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#8a9ba4', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  Tell Us About the Job
                </label>
                <textarea rows={3} placeholder="A bit of detail helps us come prepared..." className="kp-input" style={{ resize: 'vertical' }} />
              </div>
              <button className="kp-btn-teal" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem', marginTop: '0.25rem' }}>
                Send Request <IconArrow />
              </button>
              <p style={{ fontSize: '0.8rem', color: '#8a9ba4', textAlign: 'center', margin: '0.25rem 0 0' }}>
                We respond within 2 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ background: '#111920', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '4rem 0 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <img src={LOGO_URL} alt="Kiwi Plumbing and Gas" style={{ height: 44, width: 'auto', marginBottom: '1.25rem', filter: 'brightness(0) invert(1) opacity(0.8)', display: 'block' }} />
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem', lineHeight: 1.75, maxWidth: 300 }}>
                Licensed plumbers and gasfitters serving Palmerston North and the Manawatu region since 2009.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Services</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['General Plumbing', 'Gas Fitting', 'Hot Water Systems', 'Bathroom Renovations', 'Drain Unblocking', 'Commercial Work'].map(s => (
                  <a key={s} href="#services" className="kp-footer-link">{s}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <a href={PHONE_HREF} style={{ color: '#009bbe', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>{PHONE}</a>
                <a href={`mailto:${EMAIL}`} className="kp-footer-link">{EMAIL}</a>
                <address style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>{ADDRESS}</address>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>Emergency: Available 24/7</div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>
              © {new Date().getFullYear()} Kiwi Plumbing and Gas Limited. All rights reserved.
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>
              Licensed Master Plumber & Gasfitter — Palmerston North, NZ
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
