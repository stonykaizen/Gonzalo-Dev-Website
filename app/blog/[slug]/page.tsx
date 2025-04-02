import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params

  // En un caso real, aquí obtendrías los datos del post desde una API o CMS
  const post = {
    title: "Cómo la IA está transformando el desarrollo web en 2025",
    date: "24 Ene 2025",
    author: "Gonzalo",
    readTime: "5 min",
    category: "Inteligencia Artificial",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>La inteligencia artificial está revolucionando la forma en que desarrollamos sitios web. Desde la generación de código hasta la personalización de experiencias de usuario, la IA está transformando la industria de manera significativa.</p>
      
      <h2>Generación de código con IA</h2>
      <p>Una de las áreas donde la IA está teniendo un mayor impacto es en la generación de código. Herramientas como GitHub Copilot, basadas en modelos de lenguaje grandes, pueden sugerir bloques completos de código, funciones y hasta componentes enteros basándose en comentarios o contexto.</p>
      <p>Esto no solo acelera el proceso de desarrollo, sino que también ayuda a los desarrolladores a aprender nuevas tecnologías y patrones de diseño. La IA actúa como un par programador que siempre está disponible para ayudar.</p>
      
      <h2>Diseño web asistido por IA</h2>
      <p>El diseño web también está siendo transformado por la IA. Herramientas como Midjourney o DALL-E pueden generar imágenes y gráficos personalizados a partir de descripciones textuales, mientras que otras soluciones pueden sugerir paletas de colores, tipografías y layouts basados en el contenido y el público objetivo.</p>
      <p>Esto democratiza el diseño web, permitiendo a desarrolladores sin fuertes habilidades de diseño crear interfaces atractivas y profesionales.</p>
      
      <h2>Personalización de experiencias</h2>
      <p>La IA permite llevar la personalización de experiencias de usuario a un nuevo nivel. Mediante el análisis de datos de comportamiento, las aplicaciones web pueden adaptar su contenido, diseño y funcionalidades a cada usuario individual.</p>
      <p>Esto va más allá de simplemente mostrar productos relacionados en un e-commerce; incluye adaptar la navegación, ajustar el tono de la comunicación e incluso modificar elementos visuales según las preferencias implícitas del usuario.</p>
      
      <h2>Optimización automática</h2>
      <p>Los algoritmos de IA pueden analizar continuamente el rendimiento de un sitio web y sugerir o implementar automáticamente optimizaciones. Desde ajustes en el tamaño de las imágenes hasta la reestructuración del código para mejorar los tiempos de carga, la IA puede mantener un sitio web funcionando de manera óptima con mínima intervención humana.</p>
      
      <h2>Chatbots y asistentes virtuales</h2>
      <p>Los chatbots impulsados por IA han evolucionado significativamente. Ya no se limitan a respuestas predefinidas, sino que pueden mantener conversaciones naturales, entender el contexto y resolver problemas complejos. Esto mejora el soporte al cliente y la experiencia de usuario en general.</p>
      
      <h2>El futuro: desarrollo web autónomo</h2>
      <p>Aunque aún estamos lejos de que la IA reemplace completamente a los desarrolladores web, estamos avanzando hacia un modelo donde la IA puede manejar aspectos cada vez más complejos del desarrollo. En el futuro, podríamos ver sistemas capaces de crear sitios web completos a partir de descripciones de alto nivel, dejando a los humanos centrarse en la estrategia y la creatividad.</p>
      
      <h2>Conclusión</h2>
      <p>La IA no está reemplazando a los desarrolladores web, sino que está cambiando su rol. Los profesionales que sepan aprovechar estas herramientas podrán trabajar de manera más eficiente, crear mejores experiencias y enfocarse en los aspectos más creativos y estratégicos del desarrollo web.</p>
      <p>Como desarrolladores, es fundamental mantenernos actualizados sobre estas tecnologías y aprender a integrarlas en nuestro flujo de trabajo para mantenernos competitivos en un mercado en constante evolución.</p>
    `,
  }

  return (
    <main className="bg-black text-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al blog
          </Link>

          <div className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-xs font-medium mb-4">
            {post.category}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

          <div className="flex items-center text-sm text-gray-400 mb-8">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">{post.date}</span>
            <User className="h-4 w-4 mr-1" />
            <span className="mr-4">{post.author}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} lectura</span>
          </div>

          <div className="relative rounded-xl overflow-hidden mb-10">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="flex justify-between items-center mb-10">
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <ThumbsUp className="mr-2 h-5 w-5" /> Me gusta
              </button>
              <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Share2 className="mr-2 h-5 w-5" /> Compartir
              </button>
            </div>
            <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Bookmark className="mr-2 h-5 w-5" /> Guardar
            </button>
          </div>

          <div
            className="prose prose-lg prose-invert max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-gray-800 pt-10 mt-10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-800 mr-4"></div>
              <div>
                <h3 className="font-bold text-lg">Gonzalo</h3>
                <p className="text-gray-400">Desarrollador web & especialista en IA</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Desarrollador web freelance especializado en crear experiencias digitales excepcionales que generan
              resultados. Apasionado por la tecnología, la inteligencia artificial y compartir conocimientos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:underline">
                Twitter
              </a>
              <a href="#" className="text-blue-400 hover:underline">
                LinkedIn
              </a>
              <a href="#" className="text-blue-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Artículos relacionados</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 group">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Artículo relacionado"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    El futuro del desarrollo web con WebAssembly
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    Cómo WebAssembly está cambiando el panorama del desarrollo web y por qué deberías prestarle
                    atención.
                  </p>
                  <Link
                    href="/blog/futuro-webassembly"
                    className="text-blue-400 font-medium hover:underline inline-flex items-center"
                  >
                    Leer más &rarr;
                  </Link>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 group">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Artículo relacionado"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    Cómo implementar un chatbot con IA en tu sitio web
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    Aprende a integrar un chatbot inteligente en tu sitio web para mejorar la experiencia de usuario.
                  </p>
                  <Link
                    href="/blog/implementar-chatbot-ia"
                    className="text-blue-400 font-medium hover:underline inline-flex items-center"
                  >
                    Leer más &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-12 border border-blue-900/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-10"></div>

            <div className="text-center relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Te gustó este artículo?</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Suscríbete a mi newsletter para recibir más contenido sobre desarrollo web, inteligencia artificial y
                marketing digital.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

