import SmokeyNav from '@/components/smokey/SmokeyNav'
import SmokeyFooter from '@/components/smokey/SmokeyFooter'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmokeyNav />
      {children}
      <SmokeyFooter />
    </>
  )
}
