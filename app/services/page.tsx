import { getAllServices } from '@/lib/getServices'
import ServiceGrid from '@/components/sections/ServiceGrid'

export default async function ServicesPage() {
  const services = await getAllServices()

  return (
    <main>
      <ServiceGrid services={services ?? []} />
    </main>
  )
}
