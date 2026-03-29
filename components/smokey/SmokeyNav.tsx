'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function SmokeyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--color-primary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
      }}
    >
      <div className="container flex items-center justify-between" style={{ height: 72 }}>

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-cream)',
          }}>
            Smokey Joe's
          </span>
          <span style={{
            fontSize: 9,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginTop: 2,
          }}>
            Lunch Bar · Palmerston North
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Menu', 'About', 'Find Us'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 14,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-cream)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              {item}
            </Link>
          ))}
          <a
            href="tel:0272493465"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 13,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              background: 'var(--color-accent)',
              padding: '10px 20px',
              borderRadius: 'var(--radius)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-accent-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-accent)')}
          >
            Order Now
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: 'var(--color-cream)',
                borderRadius: 2,
                transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(4px, -4px)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            padding: '24px',
          }}
        >
          {['Menu', 'About', 'Find Us'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'var(--font-heading)',
                fontSize: 20,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-cream)',
                padding: '12px 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {item}
            </Link>
          ))}
          <a
            href="tel:0272493465"
            style={{
              display: 'block',
              marginTop: 20,
              fontFamily: 'var(--font-heading)',
              fontSize: 16,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              background: 'var(--color-accent)',
              padding: '14px 24px',
              borderRadius: 'var(--radius)',
              textAlign: 'center',
            }}
          >
            Call to Order — 027 249 3465
          </a>
        </div>
      )}
    </header>
  )
}
