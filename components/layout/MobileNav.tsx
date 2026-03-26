'use client'

import { useState } from 'react'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="mobile-nav-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <nav className="mobile-nav">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/services" onClick={() => setOpen(false)}>Services</a>
          <a href="/news" onClick={() => setOpen(false)}>News</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      )}
    </>
  )
}
