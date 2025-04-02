"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"

// Datos de proyectos
const projects = [
  {
    id: 1,
    title: "E-commerce para Tienda Local",
    category: "Desarrollo Web",
    image: "/placeholder.svg?height=400&width=600",
    link: "/proyectos/ecommerce-tienda-local",
  },
  {
    id: 2,
    title: "Aplicación Web con IA",
    category: "Inteligencia Artificial",
    image: "/placeholder.svg?height=400&width=600",
    link: "/proyectos/app-web-ia",
  },
  {
    id: 3,
    title: "Plataforma de Gestión",
    category: "Desarrollo Full Stack",
    image: "/placeholder.svg?height=400&width=600",
    link: "/proyectos/plataforma-gestion",
  },
  {
    id: 4,
    title: "Sitio Web Corporativo",
    category: "Desarrollo Web",
    image: "/placeholder.svg?height=400&width=600",
    link: "/proyectos/sitio-corporativo",
  },
  {
    id: 5,
    title: "Dashboard Analítico",
    category: "Aplicaciones",
    image: "/placeholder.svg?height=400&width=600",
    link: "/proyectos/dashboard-analitico",
  },
  {
    id: 6,
    title: "Campaña de Marketing Digital",
    category: "Marketing Digital",
    image: "/placeholder.svg?height=400&width=600",
    link: "/proyectos/campana-marketing",
  },
  {
    id: 7,
    title: "Chatbot con IA",
    category: "Inteligencia Artificial",
    image: "/placeholder.svg?height=400&width=600",
    link: "/proyectos/chatbot-ia",
  },
  {
    id: 8,
    title: "Tienda Online de Moda",
    category: "Desarrollo Web",
    image: "/placeholder.svg?height=400&width=600",
    link: "/proyectos/tienda-moda",
  },
  {
    id: 9,
    title: "App de Productividad",
    category: "Aplicaciones",
    image: "/placeholder.svg?height=400&width=600",
    link: "/proyectos/app-productividad",
  },
]

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isLoading, setIsLoading] = useState(false)

  // Extraer categorías únicas
  const categories = [...new Set(projects.map((project) => project.category))]

  const handleFilterChange = (category: string) => {
    setIsLoading(true)

    setTimeout(() => {
      if (category === "Todos") {
        setFilteredProjects(projects)
      } else {
        setFilteredProjects(projects.filter((project) => project.category === category))
      }
      setIsLoading(false)
    }, 500)
  }

  return (
    <main className="bg-black text-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
            Proyectos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mi portafolio</h1>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Explora algunos de los proyectos en los que he trabajado y descubre cómo puedo ayudarte a alcanzar tus
            objetivos digitales.
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="container mx-auto px-4 py-8">
        <ProjectFilter categories={categories} onFilterChange={handleFilterChange} />

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        )}
      </section>

      {/* Featured Project */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
              Proyecto destacado
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">E-commerce para Tienda Local</h2>
            <p className="text-gray-400 text-lg">
              Un caso de éxito que transformó un negocio local en una tienda online con alcance nacional
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-800">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="E-commerce para Tienda Local"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">El desafío</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Una tienda local de productos artesanales buscaba expandir su alcance más allá de su ubicación física.
                Necesitaban una plataforma de e-commerce que reflejara la calidad de sus productos y les permitiera
                vender en todo el país.
              </p>

              <h3 className="text-2xl font-bold mb-4">La solución</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Desarrollé una tienda online personalizada con un diseño atractivo que destacaba la artesanía de sus
                productos. Implementé un sistema de gestión de inventario, pasarela de pagos segura y opciones de envío
                a todo el país.
              </p>

              <h3 className="text-2xl font-bold mb-4">Resultados</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center mr-3 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-300">Aumento del 150% en ventas en los primeros 6 meses</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center mr-3 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-300">Expansión a clientes de todo el país</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center mr-3 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-300">Reducción del 30% en costos operativos</span>
                </li>
              </ul>

              <Link
                href="/proyectos/ecommerce-tienda-local"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-6 py-3 rounded-md transition duration-300 font-medium shadow-lg shadow-blue-500/20"
              >
                Ver caso completo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-12 border border-blue-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-10"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Hablemos sobre cómo puedo ayudarte a convertir tu idea en una solución digital exitosa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-8 py-4 rounded-md transition duration-300 text-center font-medium shadow-lg shadow-blue-500/20"
              >
                Contactar ahora
              </Link>
              <Link
                href="/servicios"
                className="text-white border border-gray-700 hover:border-blue-400 px-8 py-4 rounded-md transition duration-300 text-center font-medium hover:bg-blue-900/20"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

