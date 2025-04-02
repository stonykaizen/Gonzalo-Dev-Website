import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react"
import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Recursos y artículos</h1>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Comparto conocimientos, consejos y tendencias sobre desarrollo web, inteligencia artificial y marketing
            digital.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-blue-900/30 text-blue-400 px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-800/40 transition-colors duration-300">
            Todos
          </button>
          <button className="bg-gray-900 text-gray-300 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
            Desarrollo Web
          </button>
          <button className="bg-gray-900 text-gray-300 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
            Inteligencia Artificial
          </button>
          <button className="bg-gray-900 text-gray-300 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
            Marketing Digital
          </button>
          <button className="bg-gray-900 text-gray-300 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
            Consejos
          </button>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl overflow-hidden border border-blue-900/30 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-10"></div>

          <div className="flex flex-col md:flex-row relative z-10">
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-xs font-medium mb-4">
                Destacado
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Cómo la IA está transformando el desarrollo web en 2025
              </h2>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">24 Ene 2025</span>
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">Gonzalo</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>5 min lectura</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                La inteligencia artificial está revolucionando la forma en que desarrollamos sitios web. Desde la
                generación de código hasta la personalización de experiencias de usuario, descubre cómo la IA está
                transformando la industria.
              </p>
              <Link
                href="/blog/ia-transformando-desarrollo-web"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-6 py-3 rounded-md transition duration-300 font-medium shadow-lg shadow-blue-500/20"
              >
                Leer artículo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="IA en desarrollo web"
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Artículos recientes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            title="10 tendencias de diseño web para 2025"
            excerpt="Descubre las tendencias de diseño web que dominarán este año y cómo implementarlas en tus proyectos."
            category="Desarrollo Web"
            date="20 Ene 2025"
            readTime="4 min"
            image="/placeholder.svg?height=300&width=500"
            slug="tendencias-diseno-web-2025"
          />

          <BlogCard
            title="Guía completa de Next.js 15"
            excerpt="Todo lo que necesitas saber sobre la última versión de Next.js y sus nuevas funcionalidades."
            category="Desarrollo Web"
            date="15 Ene 2025"
            readTime="7 min"
            image="/placeholder.svg?height=300&width=500"
            slug="guia-nextjs-15"
          />

          <BlogCard
            title="Cómo implementar un chatbot con IA en tu sitio web"
            excerpt="Aprende a integrar un chatbot inteligente en tu sitio web para mejorar la experiencia de usuario."
            category="Inteligencia Artificial"
            date="10 Ene 2025"
            readTime="6 min"
            image="/placeholder.svg?height=300&width=500"
            slug="implementar-chatbot-ia"
          />

          <BlogCard
            title="Estrategias de marketing digital para 2025"
            excerpt="Las mejores estrategias de marketing digital para aumentar la visibilidad y conversiones de tu negocio."
            category="Marketing Digital"
            date="5 Ene 2025"
            readTime="5 min"
            image="/placeholder.svg?height=300&width=500"
            slug="estrategias-marketing-digital-2025"
          />

          <BlogCard
            title="Optimización de rendimiento en sitios web"
            excerpt="Técnicas y herramientas para mejorar la velocidad y rendimiento de tu sitio web."
            category="Desarrollo Web"
            date="28 Dic 2024"
            readTime="8 min"
            image="/placeholder.svg?height=300&width=500"
            slug="optimizacion-rendimiento-web"
          />

          <BlogCard
            title="El futuro del desarrollo web con WebAssembly"
            excerpt="Cómo WebAssembly está cambiando el panorama del desarrollo web y por qué deberías prestarle atención."
            category="Desarrollo Web"
            date="20 Dic 2024"
            readTime="6 min"
            image="/placeholder.svg?height=300&width=500"
            slug="futuro-webassembly"
          />
        </div>

        <div className="mt-12 text-center">
          <button className="border border-gray-700 hover:border-blue-400 px-6 py-3 rounded-md transition duration-300 font-medium hover:bg-blue-900/20">
            Cargar más artículos
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-12 border border-blue-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-10"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Suscríbete a mi newsletter</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Recibe artículos, consejos y recursos sobre desarrollo web, inteligencia artificial y marketing digital
              directamente en tu bandeja de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-grow px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-6 py-3 rounded-md transition duration-300 font-medium shadow-lg shadow-blue-500/20 whitespace-nowrap">
                Suscribirme
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              No spam, solo contenido de calidad. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

