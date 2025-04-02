import Link from "next/link"
import { ArrowRight, Code, Database, Layout, Zap, LineChart, Users, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
            Servicios
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Soluciones digitales a medida</h1>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Ofrezco servicios especializados en desarrollo web y soluciones digitales para ayudar a tu negocio a crecer
            en el mundo digital.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 p-8 rounded-xl border border-blue-900/30 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6">
              <Layout className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Diseño y Desarrollo Web</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creo sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes. Cada
              proyecto se desarrolla con atención al detalle y enfoque en la experiencia del usuario.
            </p>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Incluye:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Diseño personalizado y atractivo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Desarrollo responsive (móvil, tablet, desktop)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Optimización para SEO</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Integración con CMS si es necesario</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contacto?servicio=desarrollo-web"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-6 py-3 rounded-md transition duration-300 font-medium shadow-lg shadow-blue-500/20"
            >
              Solicitar este servicio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6">
              <Database className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Aplicaciones Web</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desarrollo aplicaciones web personalizadas con funcionalidades específicas para tu negocio o proyecto.
              Soluciones a medida que automatizan procesos y mejoran la eficiencia.
            </p>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Incluye:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Desarrollo frontend y backend</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Bases de datos y almacenamiento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Autenticación y seguridad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">APIs y integraciones con servicios externos</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contacto?servicio=aplicaciones-web"
              className="inline-flex items-center border border-gray-700 hover:border-blue-400 px-6 py-3 rounded-md transition duration-300 font-medium hover:bg-blue-900/20"
            >
              Solicitar este servicio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Desarrollo Frontend</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creo interfaces de usuario modernas y atractivas utilizando las últimas tecnologías como React y Tailwind
              CSS. Experiencias de usuario intuitivas y visualmente impactantes.
            </p>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Incluye:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Desarrollo con React/Next.js</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Estilos con Tailwind CSS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Animaciones y transiciones</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Diseño responsive y accesible</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contacto?servicio=frontend"
              className="inline-flex items-center border border-gray-700 hover:border-blue-400 px-6 py-3 rounded-md transition duration-300 font-medium hover:bg-blue-900/20"
            >
              Solicitar este servicio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Integración de IA</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Implemento soluciones de inteligencia artificial para automatizar procesos y mejorar la experiencia de
              usuario en tus aplicaciones y sitios web.
            </p>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Incluye:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Integración de LLMs (GPT, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Chatbots y asistentes virtuales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Automatización de procesos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Análisis de datos con IA</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contacto?servicio=inteligencia-artificial"
              className="inline-flex items-center border border-gray-700 hover:border-blue-400 px-6 py-3 rounded-md transition duration-300 font-medium hover:bg-blue-900/20"
            >
              Solicitar este servicio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6">
              <LineChart className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Marketing Digital</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desarrollo estrategias de marketing digital efectivas para aumentar la visibilidad y conversiones de tu
              negocio en el entorno digital.
            </p>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Incluye:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Estrategias para ecommerce</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Gestión de redes sociales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Campañas publicitarias</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Funnels de venta</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contacto?servicio=marketing-digital"
              className="inline-flex items-center border border-gray-700 hover:border-blue-400 px-6 py-3 rounded-md transition duration-300 font-medium hover:bg-blue-900/20"
            >
              Solicitar este servicio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Consultoría Digital</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ofrezco asesoramiento estratégico para optimizar tu presencia digital y alcanzar tus objetivos de negocio
              en el entorno online.
            </p>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Incluye:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Análisis de presencia digital</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Estrategia de transformación digital</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Optimización de procesos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Recomendaciones tecnológicas</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contacto?servicio=consultoria"
              className="inline-flex items-center border border-gray-700 hover:border-blue-400 px-6 py-3 rounded-md transition duration-300 font-medium hover:bg-blue-900/20"
            >
              Solicitar este servicio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
              Proceso de trabajo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cómo trabajo</h2>
            <p className="text-gray-400 text-lg">
              Mi metodología está diseñada para asegurar resultados de calidad y una experiencia fluida para mis
              clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transform -translate-y-1/2 z-0"></div>

            <div className="relative z-10 bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 group">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold">
                01
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">Consulta inicial</h3>
                <p className="text-gray-400 leading-relaxed">
                  Comenzamos con una reunión para entender tus necesidades, objetivos y expectativas. Esto me permite
                  definir el alcance del proyecto y proponer la mejor solución.
                </p>
              </div>
            </div>

            <div className="relative z-10 bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 group">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold">
                02
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">Propuesta y planificación</h3>
                <p className="text-gray-400 leading-relaxed">
                  Desarrollo una propuesta detallada que incluye alcance, plazos, costos y entregables. Una vez
                  aprobada, creamos un plan de trabajo con hitos claros.
                </p>
              </div>
            </div>

            <div className="relative z-10 bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 group">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold">
                03
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">Desarrollo e implementación</h3>
                <p className="text-gray-400 leading-relaxed">
                  Ejecuto el proyecto según el plan establecido, manteniendo una comunicación constante sobre el
                  progreso. Realizo revisiones periódicas para asegurar que todo avanza según lo esperado.
                </p>
              </div>
            </div>

            <div className="relative z-10 bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 group">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold">
                04
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">Entrega y soporte</h3>
                <p className="text-gray-400 leading-relaxed">
                  Tras la implementación, realizamos pruebas exhaustivas y ajustes finales. Una vez entregado el
                  proyecto, ofrezco soporte continuo para asegurar su óptimo funcionamiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
            Preguntas frecuentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Dudas comunes</h2>
          <p className="text-gray-400 text-lg">Respuestas a las preguntas más frecuentes sobre mis servicios</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3">¿Cuánto tiempo toma desarrollar un sitio web?</h3>
              <p className="text-gray-300 leading-relaxed">
                El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede estar listo
                en 2-3 semanas, mientras que proyectos más complejos pueden tomar 1-3 meses. Durante nuestra consulta
                inicial, podré darte un estimado más preciso basado en tus necesidades específicas.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3">¿Cuáles son tus tarifas?</h3>
              <p className="text-gray-300 leading-relaxed">
                Mis tarifas varían según el tipo de proyecto, su complejidad y el alcance del trabajo. Puedo trabajar
                con presupuestos fijos por proyecto o con tarifas por hora, dependiendo de lo que mejor se adapte a tus
                necesidades. Contacta conmigo para recibir un presupuesto personalizado.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3">¿Ofreces mantenimiento después de la entrega?</h3>
              <p className="text-gray-300 leading-relaxed">
                Sí, ofrezco servicios de mantenimiento y soporte continuo para asegurar que tu sitio web o aplicación
                funcione correctamente. Puedo establecer un plan de mantenimiento mensual o atender necesidades
                puntuales según lo requieras.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3">¿Trabajas con clientes fuera de Uruguay?</h3>
              <p className="text-gray-300 leading-relaxed">
                Absolutamente. Trabajo con clientes de todo el mundo y puedo adaptarme a diferentes zonas horarias para
                facilitar la comunicación. Utilizo herramientas de colaboración en línea para mantener una comunicación
                fluida y efectiva.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3">¿Qué información necesitas para comenzar un proyecto?</h3>
              <p className="text-gray-300 leading-relaxed">
                Para comenzar, necesito entender tus objetivos, público objetivo, preferencias de diseño y
                funcionalidades requeridas. Cuanta más información puedas proporcionar, mejor podré adaptar la solución
                a tus necesidades. Durante nuestra consulta inicial, te guiaré a través de todas las preguntas
                relevantes.
              </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Contacta conmigo hoy mismo para discutir cómo puedo ayudarte a alcanzar tus objetivos digitales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-8 py-4 rounded-md transition duration-300 text-center font-medium shadow-lg shadow-blue-500/20"
              >
                Contactar ahora
              </Link>
              <Link
                href="/proyectos"
                className="text-white border border-gray-700 hover:border-blue-400 px-8 py-4 rounded-md transition duration-300 text-center font-medium hover:bg-blue-900/20"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

