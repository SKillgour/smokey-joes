import { getContactSettings } from '@/lib/getContactSettings'
import ContactSection from '@/components/sections/ContactSection'

export default async function ContactPage() {
  const contact = await getContactSettings()

  return (
    <main>
      <ContactSection contact={contact} />
    </main>
  )
}
