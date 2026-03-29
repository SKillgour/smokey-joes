import SmokeyHero from '@/components/smokey/SmokeyHero'
import SmokeyInfoStrip from '@/components/smokey/SmokeyInfoStrip'
import SmokeyAbout from '@/components/smokey/SmokeyAbout'
import SmokeyMenu from '@/components/smokey/SmokeyMenu'
import SmokeyMenuBook from '@/components/smokey/SmokeyMenuBook'
import SmokeyOrderCTA from '@/components/smokey/SmokeyOrderCTA'
import SmokeyContact from '@/components/smokey/SmokeyContact'

export default function HomePage() {
  return (
    <>
      <SmokeyHero />
      <SmokeyInfoStrip />
      <SmokeyAbout />
      <SmokeyMenu />
      <SmokeyMenuBook />
      <SmokeyOrderCTA />
      <SmokeyContact />
    </>
  )
}
