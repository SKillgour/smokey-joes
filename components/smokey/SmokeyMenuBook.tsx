'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type MenuItem = {
  name: string
  description: string
  price: string
  image: string
  tags?: string[]
}

type MenuCategory = {
  title: string
  subtitle: string
  items: MenuItem[]
}

const MENU: MenuCategory[] = [
  {
    title: 'Burgers',
    subtitle: 'Proper NZ lunch bar classics',
    items: [
      {
        name: 'The Joe Burger',
        description: 'Beef patty, cheese, lettuce, tomato, house sauce.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80',
        tags: ['House Favourite'],
      },
      {
        name: 'The Double Joe',
        description: 'Two patties, double cheese, pickles, special sauce.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
        tags: ['Go Big'],
      },
      {
        name: 'Chicken Burger',
        description: 'Crispy chicken, slaw, aioli, toasted bun.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80',
      },
    ],
  },
  {
    title: 'Hot Meals',
    subtitle: 'Fresh from the bain marie — changes daily',
    items: [
      {
        name: "Today's Hot Meal",
        description: 'Ask at the counter what\'s on today. Always fresh, always filling.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
        tags: ['Changes Daily'],
      },
      {
        name: 'Chips',
        description: 'Hot, crispy, salted. The real deal.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
      },
      {
        name: 'Loaded Chips',
        description: 'Chips topped with cheese and your choice of sauce.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&q=80',
        tags: ['Popular'],
      },
    ],
  },
  {
    title: 'Baking',
    subtitle: 'Made in-house every morning',
    items: [
      {
        name: 'Homemade Slices',
        description: 'Selection changes daily. Always something sweet.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
        tags: ['Fresh Daily'],
      },
      {
        name: 'Muffins',
        description: 'Blueberry, banana choc chip, or whatever we\'re feeling.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?w=800&q=80',
      },
      {
        name: 'Filled Rolls',
        description: 'Fresh rolls made to order. Ask what\'s available.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80',
      },
    ],
  },
  {
    title: 'Drinks',
    subtitle: 'Hot drinks all day',
    items: [
      {
        name: 'Flat White',
        description: 'Proper espresso, silky milk. The NZ standard.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
        tags: ['All Day'],
      },
      {
        name: 'Long Black',
        description: 'Double shot over hot water. Clean and strong.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1521302200778-33500795e128?w=800&q=80',
      },
      {
        name: 'Hot Chocolate',
        description: 'Rich, creamy, made with real cocoa.',
        price: 'Ask in store',
        image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&q=80',
      },
    ],
  },
]

export default function SmokeyMenuBook() {
  const [page, setPage] = useState(0)
  const [preview, setPreview] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const category = MENU[page]
  const leftItems = category.items.slice(0, 2)
  const rightItems = category.items.slice(2)

  return (
    <section id="menu" style={{ background: 'var(--color-primary)', padding: '100px 0' }}>
      <div className="container">

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 56,
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: 12,
            }}>
              What We Serve
            </p>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--color-cream)' }}>
              The Menu
            </h2>
          </div>
          <a
            href="sms:0272493465"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 12,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: 4,
            }}
          >
            Text to order ahead →
          </a>
        </div>

        {/* Book */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
        }}>

          {/* Left page */}
          <div style={{
            padding: isMobile ? '32px 24px' : '48px 48px',
            borderRight: isMobile ? 'none' : '1px solid var(--color-border)',
            borderBottom: isMobile ? '1px solid var(--color-border)' : 'none',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 32,
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 9,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}>
                Smokey Joe&apos;s
              </span>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 9,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}>
                0{page + 1}
              </span>
            </div>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'var(--color-text-muted)',
              fontStyle: 'italic',
              marginBottom: 8,
            }}>
              {category.subtitle}
            </p>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: 'var(--color-cream)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: 40,
              lineHeight: 1,
            }}>
              {category.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {leftItems.map((item) => (
                <MenuRow
                  key={item.name}
                  item={item}
                  isMobile={isMobile}
                  isActive={preview === item.name}
                  onToggle={() => setPreview(preview === item.name ? null : item.name)}
                />
              ))}
            </div>
          </div>

          {/* Right page */}
          <div style={{ padding: isMobile ? '32px 24px' : '48px 48px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 32,
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 9,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}>
                {category.title}
              </span>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 9,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}>
                Bennett Street
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {rightItems.map((item) => (
                <MenuRow
                  key={item.name}
                  item={item}
                  isMobile={isMobile}
                  isActive={preview === item.name}
                  onToggle={() => setPreview(preview === item.name ? null : item.name)}
                />
              ))}
            </div>

            {/* Prev/Next nav — bottom of right page */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 8,
              marginTop: 'auto',
              paddingTop: 48,
            }}>
              <button
                onClick={() => { setPage(p => p - 1); setPreview(null) }}
                disabled={page === 0}
                style={{
                  width: 40,
                  height: 40,
                  border: '1px solid var(--color-border)',
                  background: 'transparent',
                  color: page === 0 ? 'var(--color-text-muted)' : 'var(--color-cream)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 16,
                  cursor: page === 0 ? 'default' : 'pointer',
                  opacity: page === 0 ? 0.3 : 1,
                }}
                aria-label="Previous section"
              >
                ←
              </button>
              <button
                onClick={() => { setPage(p => p + 1); setPreview(null) }}
                disabled={page === MENU.length - 1}
                style={{
                  width: 40,
                  height: 40,
                  border: '1px solid var(--color-border)',
                  background: page === MENU.length - 1 ? 'transparent' : 'var(--color-accent)',
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 16,
                  cursor: page === MENU.length - 1 ? 'default' : 'pointer',
                  opacity: page === MENU.length - 1 ? 0.3 : 1,
                }}
                aria-label="Next section"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Category dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          marginTop: 24,
        }}>
          {MENU.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => { setPage(i); setPreview(null) }}
              aria-label={cat.title}
              style={{
                width: i === page ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === page ? 'var(--color-accent)' : 'var(--color-border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 0.3s ease, background 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

function MenuRow({
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
  return (
    <div
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '20px 0',
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={isMobile ? onToggle : undefined}
      onMouseEnter={!isMobile ? onToggle : undefined}
      onMouseLeave={!isMobile ? onToggle : undefined}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 16,
              fontWeight: 600,
              color: 'var(--color-cream)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {item.name}
            </h4>
            {item.tags?.map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 8,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                border: '1px solid var(--color-accent)',
                padding: '2px 6px',
              }}>
                {tag}
              </span>
            ))}
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
          }}>
            {item.description}
          </p>
        </div>

        {/* Thumbnail hint */}
        <div style={{
          width: 48,
          height: 48,
          flexShrink: 0,
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
          position: 'relative',
          opacity: 0.6,
          transition: 'opacity 0.2s ease',
        }}>
          <Image
            src={item.image}
            alt={item.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="48px"
          />
        </div>
      </div>

      {/* Full preview on hover/tap */}
      {isActive && (
        <div style={{
          position: 'absolute',
          right: 60,
          top: 0,
          width: 220,
          zIndex: 10,
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface-2)',
          pointerEvents: 'none',
        }}>
          <div style={{ position: 'relative', height: 140 }}>
            <Image
              src={item.image}
              alt={item.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="220px"
            />
          </div>
          <div style={{ padding: '12px 14px' }}>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 12,
              color: 'var(--color-cream)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              {item.name}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
