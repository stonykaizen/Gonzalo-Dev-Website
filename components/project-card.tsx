import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  link: string
}

export function ProjectCard({ title, category, image, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 text-sm text-blue-400">{category}</div>
        <h3 className="mb-4 text-xl font-bold">{title}</h3>
        <Link
          href={link}
          className="inline-flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300"
        >
          Ver proyecto <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

