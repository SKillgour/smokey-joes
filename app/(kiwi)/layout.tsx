import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kiwi Plumbing & Gas | Palmerston North',
  description: "Palmerston North's trusted licensed plumbers and gasfitters. 24/7 emergency service. Call 06 406 3920.",
}

export default function KiwiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet" />
      {children}
    </>
  )
}
