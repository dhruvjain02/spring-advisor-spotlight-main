import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Link from 'next/link'

interface BlogPostProps {
  image: string
  date: string
  title: string
  description: string
}

export function BlogPost({ image, date, title, description }: BlogPostProps) {
  return (
    <Card className="overflow-hidden">
      <AspectRatio ratio={16 / 9}>
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </AspectRatio>
      <CardContent className="p-4">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="font-medium text-[#272A2B] mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <Link
          href="#"
          className="text-spring-green hover:underline text-sm mt-2 inline-block"
        >
          Read More
        </Link>
      </CardContent>
    </Card>
  )
}
