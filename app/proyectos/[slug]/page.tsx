import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, CheckCircle } from "lucide-react"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params

  // En un caso real, aquí obtendrías los datos del proyecto desde una API o CMS
  const project = {
    title: "E-commerce para Tienda Local",
    client: "Artesanías del Sur",
    date: "Enero 2025",
    category: "Desarrollo Web",
    tags: ["E-commerce", "Diseño UI/UX", "Desarrollo Frontend", "Desarrollo Backend"],
    description:
      "Desarrollo de una tienda online personalizada para un negocio local de productos artesanales, permitiéndoles expandir su alcance a todo el país.",
    challenge:
      "Una tienda local de productos artesanales buscaba expandir su alcance más allá de su ubicación física. Necesitaban una plataforma de e-commerce que reflejara la calidad de sus productos y les permitiera vender en todo el país.",
    solution:
      "Desarrollé una tienda online personalizada con un diseño atractivo que destacaba la artesanía de sus productos. Implementé un sistema de gestión de inventario, pasarela de pagos segura y opciones de envío a todo el país.",
    results: [
      "Aumento del 150% en ventas en los primeros 6 meses",
      "Expansión a clientes de todo el país",
      "Reducción del 30% en costos operativos",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe API", "AWS S3"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    website: "https://artesaniasdelsur.com",
  }

  return (
    <main className="bg-black text-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/proyectos"
            className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos
          </Link>

          <div className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-xs font-medium mb-4">
            {project.category}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{project.title}</h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <h3 className="text-sm text-gray-500 uppercase mb-2">Cliente</h3>
              <p className="text-lg">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 uppercase mb-2">Fecha</h3>
              <p className="text-lg flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-blue-400" /> {project.date}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 uppercase mb-2">Sitio web</h3>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:underline flex items-center"
              >
                Visitar sitio <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={project.images[1] || "/placeholder.svg"}
                alt={`${project.title} - Detalle 1`}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={project.images[2] || "/placeholder.svg"}
                alt={`${project.title} - Detalle 2`}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">El desafío</h2>
                <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">La solución</h2>
                <p className="text-gray-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Resultados</h2>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Tecnologías utilizadas</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-900/30 text-blue-400 px-4 py-2 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Siguiente proyecto</h2>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Siguiente proyecto"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-medium mb-4 w-fit">
                  Inteligencia Artificial
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Aplicación Web con IA
                </h3>
                <p className="text-gray-400 mb-6">
                  Desarrollo de una aplicación web que utiliza inteligencia artificial para automatizar procesos y
                  mejorar la experiencia de usuario.
                </p>
                <Link
                  href="/proyectos/app-web-ia"
                  className="text-blue-400 font-medium hover:underline inline-flex items-center"
                >
                  Ver proyecto <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Te gustaría un proyecto similar?</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Hablemos sobre cómo puedo ayudarte a crear una solución digital a medida para tu negocio.
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

