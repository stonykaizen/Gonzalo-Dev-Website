import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

export function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full bg-gray-800 mr-4"></div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
        <div className="ml-auto flex">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed mb-4">"{content}"</p>
      <p className="text-blue-400 font-medium">Leer caso completo &rarr;</p>
    </div>
  )
}

