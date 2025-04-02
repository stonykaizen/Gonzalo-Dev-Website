import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  slug: string
}

export function BlogCard({ title, excerpt, category, date, readTime, image, slug }: BlogCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 group">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-medium mb-4">
          {category}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="mr-4">{date}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime}</span>
        </div>
        <Link href={`/blog/${slug}`} className="text-blue-400 font-medium hover:underline inline-flex items-center">
          Leer más &rarr;
        </Link>
      </div>
    </div>
  )
}

