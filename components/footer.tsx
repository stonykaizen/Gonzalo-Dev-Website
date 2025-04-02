import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800/40 pt-20 md:pt-24 pb-8 text-white">
      <div className="container mx-auto px-4">
        {/* Grid container for columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Info and Social */}
          <div>
            <div className="font-bold text-xl tracking-tight mb-4">
              <span className="text-blue-400">Gonzalo</span>
              <span className="text-white"> | Dev</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Desarrollador web freelance especializado en crear experiencias
              digitales excepcionales que generan resultados.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Gonzalo"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Gonzalo"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter de Gonzalo"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Gonzalo"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/servicios">Desarrollo Web</FooterLink>
              </li>
              <li>
                <FooterLink href="/servicios">Aplicaciones Web</FooterLink>
              </li>
              <li>
                <FooterLink href="/servicios">Integración de IA</FooterLink>
              </li>
              <li>
                <FooterLink href="/servicios">Marketing Digital</FooterLink>
              </li>
              <li>
                <FooterLink href="/servicios">Consultoría Digital</FooterLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/">Inicio</FooterLink>
              </li>
              <li>
                <FooterLink href="/sobre-mi">Sobre mí</FooterLink>
              </li>
              <li>
                <FooterLink href="/proyectos">Proyectos</FooterLink>
              </li>
              <li>
                <FooterLink href="/contacto">Contacto</FooterLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 break-words">
                  contacto@gonzalo.dev
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+598 99 123 456</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Santa Lucía, Canelones, Uruguay
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator and Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Gonzalo. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacidad"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper component for footer links
function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
    >
      {children}
    </Link>
  );
}