import { PortableText } from 'next-sanity'

type Props = {
  value: any[]
}

export default function RichText({ value }: Props) {
  if (!value?.length) return null

  return (
    <div className="rich-text">
      <PortableText value={value} />
    </div>
  )
}
