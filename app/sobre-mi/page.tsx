import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Layout, Zap, LineChart, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
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
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
              Sobre mí
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gonzalo</h1>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Desarrollador web freelance especializado en crear experiencias digitales excepcionales que generan
              resultados.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Nacido en Rio Branco, Cerro Largo, y actualmente residiendo en Santa Lucía, Canelones, Uruguay. Mi
              trayectoria profesional me ha llevado a especializarme en desarrollo web y soluciones digitales, siempre
              con un enfoque en la calidad y los resultados.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold mb-2">Ubicación</h3>
                <p className="text-gray-400">Santa Lucía, Canelones, Uruguay</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Ocupación</h3>
                <p className="text-gray-400">Independiente / Freelancer</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Filosofía</h3>
                <p className="text-gray-400">F.I.R.E. (Financial Independence, Retire Early)</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Disponibilidad</h3>
                <p className="text-gray-400">Proyectos freelance</p>
              </div>
            </div>
            <Link
              href="/contacto"
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-8 py-4 rounded-md transition duration-300 text-center font-medium shadow-lg shadow-blue-500/20 inline-flex items-center"
            >
              Contactar <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
            Mi historia
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">El camino hasta aquí</h2>

          <div className="space-y-8">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Inicios</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Mi pasión por la tecnología comenzó desde temprana edad. Nacido en Rio Branco, Cerro Largo, siempre tuve
                curiosidad por entender cómo funcionaban las cosas digitales. Esta curiosidad me llevó a explorar el
                mundo del desarrollo web, donde encontré mi verdadera vocación.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Comencé aprendiendo HTML y CSS por mi cuenta, y pronto me sumergí en el mundo de JavaScript y las
                tecnologías modernas de desarrollo web. Cada proyecto era una oportunidad para aprender algo nuevo y
                perfeccionar mis habilidades.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Trayectoria profesional</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Mi carrera profesional me ha permitido trabajar en diversos proyectos, desde sitios web corporativos
                hasta aplicaciones web complejas. He colaborado con startups, pequeñas empresas y profesionales
                independientes, ayudándoles a establecer y mejorar su presencia digital.
              </p>
              <p className="text-gray-400 leading-relaxed">
                A lo largo de los años, he ampliado mis habilidades para incluir no solo desarrollo web, sino también
                inteligencia artificial, producción audiovisual y marketing digital, lo que me permite ofrecer
                soluciones integrales a mis clientes.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Filosofía F.I.R.E.</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Mi enfoque profesional está influenciado por la filosofía F.I.R.E. (Financial Independence, Retire
                Early). Esto significa que valoro la eficiencia, la planificación estratégica y los resultados a largo
                plazo, tanto en mi vida personal como en los proyectos que desarrollo.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Esta filosofía me impulsa a buscar constantemente formas de optimizar procesos, maximizar el valor para
                mis clientes y crear soluciones sostenibles que generen resultados duraderos.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Actualidad</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Actualmente, trabajo como desarrollador web freelance desde Santa Lucía, Canelones, ofreciendo servicios
                especializados en desarrollo web, inteligencia artificial y marketing digital. Me apasiona ayudar a mis
                clientes a alcanzar sus objetivos a través de soluciones digitales efectivas y personalizadas.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Sigo aprendiendo y actualizándome constantemente para estar al día con las últimas tendencias y
                tecnologías, lo que me permite ofrecer siempre las mejores soluciones a mis clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
              Habilidades
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mis áreas de expertise</h2>
            <p className="text-gray-400 text-lg">
              He desarrollado un conjunto diverso de habilidades que me permiten ofrecer soluciones digitales completas
              y efectivas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Desarrollo Web</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">JavaScript (Node.js, Express)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">HTML, CSS, Tailwind CSS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Desarrollo de APIs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Figma (Diseño UI/UX)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Inteligencia Artificial</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Modelos de Lenguaje Grandes (LLM's)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Integración de IA en aplicaciones</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Automatización con IA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Soluciones personalizadas con IA</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6">
                <Layout className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Producción Audiovisual</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Adobe Suite</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Edición de video y gráficos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Edición de Audio</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Contenido multimedia</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Marketing Digital</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Ecommerce</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Social Media Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Administración de Publicidad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Funnels de Venta</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
            Datos personales
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Un poco más sobre mí</h2>

          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-2">Nombre</h3>
                <p className="text-gray-300 mb-4">Gonzalo</p>

                <h3 className="text-lg font-bold mb-2">Ubicación actual</h3>
                <p className="text-gray-300 mb-4">Santa Lucía, Canelones, Uruguay</p>

                <h3 className="text-lg font-bold mb-2">Lugar de nacimiento</h3>
                <p className="text-gray-300 mb-4">Rio Branco, Cerro Largo, Uruguay</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Ocupación</h3>
                <p className="text-gray-300 mb-4">Independiente / Freelancer</p>

                <h3 className="text-lg font-bold mb-2">Estatura</h3>
                <p className="text-gray-300 mb-4">1.72 m</p>

                <h3 className="text-lg font-bold mb-2">Peso</h3>
                <p className="text-gray-300 mb-4">63 kg</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-900/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-10"></div>

            <h3 className="text-xl font-bold mb-4 relative z-10">Filosofía F.I.R.E.</h3>
            <p className="text-gray-300 leading-relaxed mb-4 relative z-10">
              Mi enfoque profesional y personal está guiado por la filosofía F.I.R.E. (Financial Independence, Retire
              Early), que se centra en la independencia financiera y el retiro temprano.
            </p>
            <p className="text-gray-400 leading-relaxed relative z-10">
              Esta filosofía me impulsa a ser eficiente, estratégico y orientado a resultados en todo lo que hago.
              Aplico estos mismos principios a los proyectos de mis clientes, buscando siempre soluciones que generen
              valor a largo plazo y resultados tangibles.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-12 border border-blue-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-10"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para trabajar juntos?</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Si estás buscando un desarrollador web que combine habilidades técnicas con un enfoque estratégico, estoy
              aquí para ayudarte.
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

