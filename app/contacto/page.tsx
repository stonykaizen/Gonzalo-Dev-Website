import { Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
            Contacto
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hablemos de tu proyecto</h1>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Estoy aquí para ayudarte a convertir tus ideas en soluciones digitales efectivas. Contáctame y comencemos a
            trabajar juntos.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-6">Envíame un mensaje</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Completa el formulario a continuación y me pondré en contacto contigo lo antes posible. También puedes
              contactarme directamente a través de los datos de contacto.
            </p>

            <ContactForm />
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-300">contacto@gonzalo.dev</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Teléfono</h3>
                    <p className="text-gray-300">+598 99 123 456</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Ubicación</h3>
                    <p className="text-gray-300">Santa Lucía, Canelones, Uruguay</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-900/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-10"></div>

              <h2 className="text-2xl font-bold mb-6 relative z-10">Horario de trabajo</h2>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between">
                  <span className="text-gray-300">Lunes - Viernes:</span>
                  <span className="text-white font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sábado:</span>
                  <span className="text-white font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Domingo:</span>
                  <span className="text-white font-medium">Cerrado</span>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <h3 className="font-bold mb-2">Respuesta rápida</h3>
                <p className="text-gray-300 leading-relaxed">
                  Generalmente respondo a las consultas en un plazo de 24 horas durante días laborables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
              Preguntas frecuentes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Antes de contactar</h2>
            <p className="text-gray-400 text-lg">
              Aquí encontrarás respuestas a algunas preguntas comunes sobre el proceso de contacto y colaboración
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-3">¿Qué información debo proporcionar en mi primer contacto?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Es útil incluir una breve descripción de tu proyecto, objetivos, plazos estimados y presupuesto
                  aproximado. Cuanta más información proporciones inicialmente, más precisa será mi respuesta.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-3">¿Cuánto tiempo tardarás en responder?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Generalmente respondo a todas las consultas dentro de las 24 horas en días laborables. Para proyectos
                  urgentes, por favor indícalo en el asunto de tu mensaje.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-3">¿Trabajas con clientes internacionales?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sí, trabajo con clientes de todo el mundo. Puedo adaptarme a diferentes zonas horarias para reuniones
                  y utilizo herramientas de colaboración en línea para mantener una comunicación efectiva.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-3">¿Cómo es el proceso después del contacto inicial?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Después del contacto inicial, programaremos una llamada o reunión para discutir tu proyecto en
                  detalle. Luego, prepararé una propuesta personalizada con alcance, plazos y presupuesto. Una vez
                  aprobada, comenzaremos el trabajo según el plan acordado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

