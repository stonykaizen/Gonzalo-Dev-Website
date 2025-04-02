import Link from "next/link"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800/40 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-bold text-xl tracking-tight mb-6">
              <span className="text-blue-400">Gonzalo</span>
              <span className="text-white"> | Dev</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Desarrollador web freelance especializado en crear experiencias digitales excepcionales que generan
              resultados.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Aplicaciones Web
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Integración de IA
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Consultoría Digital
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">contacto@gonzalo.dev</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">+598 99 123 456</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">Santa Lucía, Canelones, Uruguay</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Gonzalo. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacidad" className="text-gray-500 hover:text-blue-400 text-sm">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-500 hover:text-blue-400 text-sm">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

