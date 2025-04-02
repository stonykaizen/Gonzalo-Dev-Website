"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-800/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-bold text-xl tracking-tight">
            <span className="text-blue-400">Gonzalo</span>
            <span className="text-white dark:text-white"> | Dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/") ? "text-blue-400" : "text-white dark:text-white hover:text-blue-400"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/sobre-mi"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/sobre-mi") ? "text-blue-400" : "text-white dark:text-white hover:text-blue-400"
              }`}
            >
              Sobre mí
            </Link>
            <Link
              href="/servicios"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/servicios") ? "text-blue-400" : "text-white dark:text-white hover:text-blue-400"
              }`}
            >
              Servicios
            </Link>
            <Link
              href="/proyectos"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/proyectos") ? "text-blue-400" : "text-white dark:text-white hover:text-blue-400"
              }`}
            >
              Proyectos
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/blog") ? "text-blue-400" : "text-white dark:text-white hover:text-blue-400"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-4 py-2 rounded-md transition duration-300 text-sm font-medium shadow-lg shadow-blue-500/20"
            >
              Contacto
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button className="ml-4 text-white dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors duration-300 py-2 ${
                  isActive("/") ? "text-blue-400" : "text-white dark:text-white hover:text-blue-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/sobre-mi"
                className={`text-sm font-medium transition-colors duration-300 py-2 ${
                  isActive("/sobre-mi") ? "text-blue-400" : "text-white dark:text-white hover:text-blue-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre mí
              </Link>
              <Link
                href="/servicios"
                className={`text-sm font-medium transition-colors duration-300 py-2 ${
                  isActive("/servicios") ? "text-blue-400" : "text-white dark:text-white hover:text-blue-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/proyectos"
                className={`text-sm font-medium transition-colors duration-300 py-2 ${
                  isActive("/proyectos") ? "text-blue-400" : "text-white dark:text-white hover:text-blue-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/blog"
                className={`text-sm font-medium transition-colors duration-300 py-2 ${
                  isActive("/blog") ? "text-blue-400" : "text-white dark:text-white hover:text-blue-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-4 py-2 rounded-md transition duration-300 text-sm font-medium shadow-lg shadow-blue-500/20 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

