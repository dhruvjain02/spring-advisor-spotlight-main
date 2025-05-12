import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface TestimonialProps {
  name: string
  role: string
  content: string
  rating: number
}

export function TestimonialCard({ name, role, content, rating }: TestimonialProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-600 mb-4">{content}</p>
        <div>
          <p className="font-medium text-[#272A2B]">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
