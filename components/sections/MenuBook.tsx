'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

// ─── Types ────────────────────────────────────────────────────────────────────

export type SanityImage = {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  alt?: string
}

export type MenuItem = {
  _id: string
  name: string
  description?: string
  price: number
  image?: SanityImage
  dietaryTags?: string[]
  available: boolean
  featured: boolean
  sortOrder?: number
  category: {
    _id: string
    title: string
  }
}

export type MenuCategory = {
  _id: string
  title: string
  sortOrder?: number
}

type Props = {
  categories: MenuCategory[]
  items: MenuItem[]
}

const DIETARY_LABELS: Record<string, string> = {
  vegetarian: 'V',
  vegan: 'VG',
  'gluten-free': 'GF',
  nuts: 'N',
  spicy: '🌶',
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function MenuBook({ categories, items }: Props) {
  const [currentPage, setCurrentPage] = useState(0)
  const [activePreview, setActivePreview] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 820)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const pages = categories
    .map((cat) => ({
      category: cat,
      items: items.filter((item) => item.category?._id === cat._id),
    }))
    .filter((page) => page.items.length > 0)

  if (pages.length === 0) return null

  const page = pages[currentPage]
  const leftItems = page.items.slice(0, 3)
  const rightItems = page.items.slice(3)

  return (
    <section className="menu-section">
      <div className="container">

        <div className="menu-top">
          <div>
            <div className="eyebrow">Our Menu</div>
            <h2>Explore the menu — from fresh starters to signature mains.</h2>
          </div>
          <div className="menu-controls">
            <button
              onClick={() => { setCurrentPage(p => p - 1); setActivePreview(null) }}
              disabled={currentPage === 0}
              aria-label="Previous menu section"
            >←</button>
            <button
              onClick={() => { setCurrentPage(p => p + 1); setActivePreview(null) }}
              disabled={currentPage === pages.length - 1}
              aria-label="Next menu section"
            >→</button>
          </div>
        </div>

        <div className="menu-book">
          <div className="menu-book-grid">

            <div className="page">
              <div className="page-header">
                <span>Menu</span>
                <span>Page {String(currentPage + 1).padStart(2, '0')}</span>
              </div>
              <p className="page-subtitle">{getCategorySubtitle(page.category.title)}</p>
              <h3 className="page-title">{page.category.title}</h3>
              <div className="menu-list">
                {leftItems.map((item) => (
                  <MenuItemRow
                    key={item._id}
                    item={item}
                    isMobile={isMobile}
                    isActive={activePreview === item._id}
                    onToggle={() => setActivePreview(
                      activePreview === item._id ? null : item._id
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="page">
              <div className="page-header">
                <span>Dinner Menu</span>
                <span>{page.category.title}</span>
              </div>
              <div className="menu-list">
                {rightItems.map((item) => (
                  <MenuItemRow
                    key={item._id}
                    item={item}
                    isMobile={isMobile}
                    isActive={activePreview === item._id}
                    onToggle={() => setActivePreview(
                      activePreview === item._id ? null : item._id
                    )}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {pages.length > 1 && (
          <div className="menu-dots" aria-label="Menu sections">
            {pages.map((p, i) => (
              <button
                key={p.category._id}
                className={`menu-dot ${i === currentPage ? 'active' : ''}`}
                onClick={() => { setCurrentPage(i); setActivePreview(null) }}
                aria-label={p.category.title}
                aria-current={i === currentPage}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

// ─── Individual menu item row ─────────────────────────────────────────────────

function MenuItemRow({
  item,
  isMobile,
  isActive,
  onToggle,
}: {
  item: MenuItem
  isMobile: boolean
  isActive: boolean
  onToggle: () => void
}) {
  const hasImage = !!item.image?.asset

  return (
    <div
      className={`menu-item ${isActive ? 'active' : ''}`}
      tabIndex={0}
      onClick={isMobile ? onToggle : undefined}
      onKeyDown={(e) => e.key === 'Enter' && onToggle()}
      role={isMobile ? 'button' : undefined}
      aria-expanded={isMobile ? isActive : undefined}
    >
      <div className="menu-item-row">
        <h4>{item.name}</h4>
        <span className="price">${item.price.toFixed(2)}</span>
      </div>

      {item.description && <p>{item.description}</p>}

      {item.dietaryTags && item.dietaryTags.length > 0 && (
        <div className="dietary-tags">
          {item.dietaryTags.map((tag) => (
            <span key={tag} className="dietary-tag" title={tag}>
              {DIETARY_LABELS[tag] ?? tag}
            </span>
          ))}
        </div>
      )}

      {hasImage && (
        <div className="preview-hint">
          <span className="preview-dot" />
          {isMobile ? 'Tap to preview' : 'Hover to preview'}
        </div>
      )}

      {hasImage && (
        <div className="menu-preview">
          <Image
            src={urlFor(item.image!).width(640).height(360).url()}
            alt={item.image?.alt ?? item.name}
            width={640}
            height={360}
            style={{ objectFit: 'cover', width: '100%', height: 180 }}
          />
          <div className="menu-preview-copy">
            <small>Preview</small>
            <strong>{item.name}</strong>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Category subtitle helper ─────────────────────────────────────────────────

function getCategorySubtitle(title: string): string {
  const map: Record<string, string> = {
    'Small Plates': 'Begin the night beautifully',
    'Starters': 'Begin the night beautifully',
    'Sushi': 'Fresh, delicate, precise',
    'Sashimi': 'Fresh, delicate, precise',
    'Mains': 'Comfort, craft, and flavour',
    'Signature Mains': 'Comfort, craft, and flavour',
    'Desserts': 'A smooth finish',
    'Drinks': 'Something to sip',
  }
  return map[title] ?? 'Explore this section'
}
