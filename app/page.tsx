import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Code, Database, Layout, Zap, Star, Users, LineChart } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div
              className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6 animate-fadeIn"
              style={{ animationDelay: "0.1s" }}
            >
              Desarrollo Web & Soluciones Digitales
            </div>
<h1
              className="text-[10vw] font-bold mb-6 leading-tight animate-fadeIn"
              style={{ animationDelay: "0.2s", wordBreak: 'break-word' }}
            >
              Transformando <br />ideas en
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 block">
                {" "}
                experiencias digitales
              </span>{" "}
              excepcionales.
            </h1>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              Soy Gonzalo, desarrollador web freelance de Uruguay. Creo soluciones digitales personalizadas que ayudan a
              negocios a crecer y alcanzar sus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <Link
                href="/contacto"
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-8 py-4 rounded-md transition duration-300 text-center font-medium shadow-lg shadow-blue-500/20 flex items-center justify-center"
              >
                Hablemos de tu proyecto <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/proyectos"
                className="text-white border border-gray-700 hover:border-blue-400 px-8 py-4 rounded-md transition duration-300 text-center font-medium hover:bg-blue-900/20 flex items-center justify-center"
              >
                Ver proyectos
              </Link>
            </div>
            <div className="mt-10 flex items-center animate-fadeIn" style={{ animationDelay: "0.5s" }}>
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs">JD</div>
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs">MK</div>
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs">TS</div>
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-sm text-gray-400">Clientes satisfechos</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Gonzalo - Desarrollador Web"
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl relative z-10"
              />
              <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-2 -left-2 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-300 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content remains the same */}
      {/* Services Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
              Servicios
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Soluciones digitales a medida</h2>
            <p className="text-gray-400 text-lg">
              Ofrezco servicios especializados en desarrollo web y soluciones digitales para ayudar a tu negocio a
              crecer en el mundo digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Layout className="w-6 h-6" />}
              title="Diseño y Desarrollo Web"
              description="Sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes."
              link="/servicios/desarrollo-web"
              isHighlighted={true}
            />

            <ServiceCard
              icon={<Database className="w-6 h-6" />}
              title="Aplicaciones Web"
              description="Aplicaciones web personalizadas con funcionalidades específicas para tu negocio o proyecto."
              link="/servicios/aplicaciones-web"
            />

            <ServiceCard
              icon={<Code className="w-6 h-6" />}
              title="Desarrollo Frontend"
              description="Interfaces de usuario modernas y atractivas utilizando las últimas tecnologías como React y Tailwind CSS."
              link="/servicios/frontend"
            />

            <ServiceCard
              icon={<Zap className="w-6 h-6" />}
              title="Integración de IA"
              description="Implementación de soluciones de inteligencia artificial para automatizar procesos y mejorar la experiencia de usuario."
              link="/servicios/inteligencia-artificial"
            />

            <ServiceCard
              icon={<LineChart className="w-6 h-6" />}
              title="Marketing Digital"
              description="Estrategias de marketing digital efectivas para aumentar la visibilidad y conversiones de tu negocio."
              link="/servicios/marketing-digital"
            />

            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Consultoría Digital"
              description="Asesoramiento estratégico para optimizar tu presencia digital y alcanzar tus objetivos de negocio."
              link="/servicios/consultoria"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-800">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Gonzalo - Desarrollador Web"
                width={500}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <p className="text-sm font-medium">Disponible para proyectos</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-900/40 text-blue-400 px-3 py-1 rounded-full text-xs">JavaScript</span>
                  <span className="bg-blue-900/40 text-blue-400 px-3 py-1 rounded-full text-xs">React</span>
                  <span className="bg-blue-900/40 text-blue-400 px-3 py-1 rounded-full text-xs">Node.js</span>
                  <span className="bg-blue-900/40 text-blue-400 px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
              Sobre mí
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Desarrollador web con enfoque en resultados</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soy Gonzalo, desarrollador web freelance de Uruguay con base en Santa Lucía, Canelones. Me especializo en
              crear experiencias digitales que no solo se ven bien, sino que también generan resultados tangibles para
              mis clientes.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Con experiencia en JavaScript, Node.js, React y diseño UI/UX, combino habilidades técnicas con un enfoque
              estratégico para crear soluciones digitales que ayudan a los negocios a crecer. Mi filosofía F.I.R.E.
              (Independencia Financiera, Retiro Temprano) me impulsa a buscar la excelencia y la eficiencia en cada
              proyecto.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold mb-2">Ubicación</h3>
                <p className="text-gray-400">Santa Lucía, Canelones, Uruguay</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Experiencia</h3>
                <p className="text-gray-400">+5 años en desarrollo web</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Especialidad</h3>
                <p className="text-gray-400">Desarrollo web & IA</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Disponibilidad</h3>
                <p className="text-gray-400">Proyectos freelance</p>
              </div>
            </div>
            <Link
              href="/sobre-mi"
              className="inline-flex items-center border border-gray-700 hover:border-blue-400 px-6 py-3 rounded-md transition duration-300 font-medium hover:bg-blue-900/20"
            >
              Conoce más sobre mí <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
                Proyectos
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Trabajos destacados</h2>
            </div>
            <Link
              href="/proyectos"
              className="mt-6 md:mt-0 inline-flex items-center border border-gray-700 hover:border-blue-400 px-6 py-3 rounded-md transition duration-300 font-medium hover:bg-blue-900/20"
            >
              Ver todos los proyectos <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce para Tienda Local"
              category="Desarrollo Web"
              image="/placeholder.svg?height=400&width=600"
              link="/proyectos/ecommerce-tienda-local"
            />

            <ProjectCard
              title="Aplicación Web con IA"
              category="Inteligencia Artificial"
              image="/placeholder.svg?height=400&width=600"
              link="/proyectos/app-web-ia"
            />

            <ProjectCard
              title="Plataforma de Gestión"
              category="Desarrollo Full Stack"
              image="/placeholder.svg?height=400&width=600"
              link="/proyectos/plataforma-gestion"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
              Testimonios
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen mis clientes</h2>
          </div>
          <div className="flex space-x-3 mt-6 md:mt-0">
            <button className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 hover:border-blue-400 text-white flex items-center justify-center transition-colors duration-300">
              &larr;
            </button>
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
              &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            name="María Rodríguez"
            role="Fundadora, Boutique Online"
            content="Gonzalo transformó completamente nuestra presencia online. Nuestro nuevo sitio web no solo se ve increíble, sino que ha aumentado nuestras ventas en un 40% en solo tres meses."
            rating={5}
          />

          <TestimonialCard
            name="Carlos Méndez"
            role="CEO, Startup Tecnológica"
            content="Trabajar con Gonzalo fue una experiencia excepcional. Entendió perfectamente nuestras necesidades y entregó una solución que superó nuestras expectativas. Su conocimiento técnico y enfoque estratégico marcaron la diferencia."
            rating={5}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-12 border border-blue-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-10"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para llevar tu presencia digital al siguiente nivel?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Trabajemos juntos para crear una solución digital que impulse tu negocio y te ayude a alcanzar tus
              objetivos.
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
