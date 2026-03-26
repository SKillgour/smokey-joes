import { getMenuCategories, getMenuItems } from '@/lib/getMenu'
import MenuBook from '@/components/sections/MenuBook'

export default async function MenuPage() {
  const [categories, items] = await Promise.all([
    getMenuCategories(),
    getMenuItems(),
  ])

  return (
    <main>
      <MenuBook categories={categories ?? []} items={items ?? []} />
    </main>
  )
}
