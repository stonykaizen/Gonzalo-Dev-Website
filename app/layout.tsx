import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { BackgroundAnimation } from "@/components/background-animation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gonzalo | Desarrollo Web & Soluciones Digitales",
  description:
    "Desarrollador web freelance especializado en crear experiencias digitales excepcionales que generan resultados.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <BackgroundAnimation />
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'