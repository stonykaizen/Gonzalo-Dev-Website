"use client"

import { useState } from "react"

interface ProjectFilterProps {
  categories: string[]
  onFilterChange: (category: string) => void
}

export function ProjectFilter({ categories, onFilterChange }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
    onFilterChange(category)
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
          activeCategory === "Todos" ? "bg-blue-900/30 text-blue-400" : "bg-gray-900 text-gray-300 hover:bg-gray-800"
        }`}
        onClick={() => handleCategoryClick("Todos")}
      >
        Todos
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            activeCategory === category ? "bg-blue-900/30 text-blue-400" : "bg-gray-900 text-gray-300 hover:bg-gray-800"
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

