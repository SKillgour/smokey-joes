import Image from 'next/image'

const items = [
  {
    name: 'The Joe Burger',
    description: 'Beef patty, cheese, lettuce, tomato, house sauce — proper.',
    tag: 'House Favourite',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80',
  },
  {
    name: 'Hot Meals',
    description: 'Rotating bain marie — always fresh, always filling. Ask what\'s on today.',
    tag: 'Changes Daily',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  },
  {
    name: 'Homemade Baking',
    description: 'Slices, muffins, scrolls and more. Made in-house every morning.',
    tag: 'Fresh Daily',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
  },
  {
    name: 'Hot Drinks',
    description: 'Flat whites, lattes, long blacks. Proper coffee to go with it.',
    tag: 'All Day',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
  },
]

export default function SmokeyMenu() {
  return (
    <section style={{ background: 'var(--color-primary)', paddingBottom: 0 }}>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 2 }}>
          {items.map((item) => (
            <div
              key={item.name}
              style={{
                background: 'var(--color-surface)',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'default',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: 220 }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(24,18,14,0.7) 0%, transparent 60%)',
                }} />
                {/* Tag */}
                <span style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  fontFamily: 'var(--font-heading)',
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                  background: 'var(--color-accent)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius)',
                }}>
                  {item.tag}
                </span>
              </div>

              {/* Text */}
              <div style={{ padding: '22px 24px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 20,
                  fontWeight: 600,
                  color: 'var(--color-cream)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 8,
                }}>
                  {item.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: 'var(--color-text-muted)',
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
