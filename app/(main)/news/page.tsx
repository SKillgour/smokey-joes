import { getAllNews } from '@/lib/getNews'
import NewsGrid from '@/components/sections/NewsGrid'

export default async function NewsPage() {
  const news = await getAllNews()

  return (
    <main>
      <NewsGrid news={news ?? []} />
    </main>
  )
}
