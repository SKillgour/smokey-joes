import { getSiteSettings } from '@/lib/getSiteSettings'
import { getContactSettings } from '@/lib/getContactSettings'
import { getFeaturedServices } from '@/lib/getServices'
import { getFeaturedTestimonials } from '@/lib/getTestimonials'
import { getLatestNews } from '@/lib/getNews'
import HeroSplit from '@/components/sections/HeroSplit'
import ServiceGrid from '@/components/sections/ServiceGrid'
import Testimonials from '@/components/sections/Testimonials'
import ContactSection from '@/components/sections/ContactSection'
import CTASection from '@/components/sections/CTASection'
import NewsGrid from '@/components/sections/NewsGrid'

export default async function HomePage() {
  const [site, contact, services, testimonials, news] = await Promise.all([
    getSiteSettings(),
    getContactSettings(),
    getFeaturedServices(),
    getFeaturedTestimonials(),
    getLatestNews(),
  ])

  return (
    <>
      <HeroSplit
        heading={site?.tagline}
        businessName={site?.businessName}
        ctaLabel={site?.primaryCtaLabel}
        ctaUrl={site?.primaryCtaUrl}
        phone={contact?.phone}
      />
      <ServiceGrid services={services ?? []} />
      <Testimonials testimonials={testimonials ?? []} />
      <NewsGrid news={news ?? []} />
      <ContactSection contact={contact} />
      <CTASection
        heading="Ready to get started?"
        ctaLabel={site?.primaryCtaLabel}
        ctaUrl={site?.primaryCtaUrl}
      />
    </>
  )
}
