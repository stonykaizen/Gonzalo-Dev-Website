import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  isHighlighted?: boolean
}

export function ServiceCard({ icon, title, description, link, isHighlighted = false }: ServiceCardProps) {
  return (
    <div
      className={`p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${
        isHighlighted
          ? "bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200"
          : "bg-gray-900 border border-gray-800 hover:border-blue-500"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
          isHighlighted ? "bg-blue-200/50 text-blue-900" : "bg-blue-900/30 text-blue-400"
        }`}
      >
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-3 ${isHighlighted ? "text-blue-900" : "text-white"}`}>{title}</h3>
      <p className={`mb-6 leading-relaxed ${isHighlighted ? "text-blue-800/80" : "text-gray-400"}`}>{description}</p>
      <Link
        href={link}
        className={`inline-flex items-center font-medium hover:underline group-hover:translate-x-1 transition-transform duration-300 ${
          isHighlighted ? "text-blue-900" : "text-white"
        }`}
      >
        Saber más <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}

