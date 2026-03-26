type NewsItem = {
  _id: string
  title: string
  summary?: string
  slug?: { current: string }
  publishedAt?: string
}

type Props = {
  news: NewsItem[]
}

export default function NewsGrid({ news }: Props) {
  if (!news?.length) return null

  return (
    <section className="news-grid">
      <div className="container">
        <div className="section-heading">
          <h2>Latest News</h2>
        </div>
        <div className="news-grid-items">
          {news.map((item) => (
            <article key={item._id} className="news-card">
              {item.publishedAt && (
                <time dateTime={item.publishedAt}>
                  {new Date(item.publishedAt).toLocaleDateString('en-NZ', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              )}
              <h3>{item.title}</h3>
              {item.summary && <p>{item.summary}</p>}
              {item.slug && (
                <a href={`/news/${item.slug.current}`} className="card-link">
                  Read more
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
