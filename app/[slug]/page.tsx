type Props = {
  params: Promise<{ slug: string }>
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params

  return (
    <main>
      <h1>{slug}</h1>
    </main>
  )
}
