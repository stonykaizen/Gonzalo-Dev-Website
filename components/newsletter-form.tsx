"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          required
          className="flex-grow px-4 py-3 bg-gray-900 dark:bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-6 py-3 rounded-md transition duration-300 font-medium shadow-lg shadow-blue-500/20 whitespace-nowrap flex items-center justify-center disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Suscribiendo...</span>
          ) : (
            <>
              Suscribirme <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {submitSuccess && (
        <div className="mt-4 bg-green-900/30 border border-green-800 text-green-400 px-4 py-3 rounded-md text-center">
          ¡Gracias por suscribirte! Recibirás pronto nuestro contenido.
        </div>
      )}

      {submitError && (
        <div className="mt-4 bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-md text-center">
          Hubo un error al procesar tu suscripción. Por favor, inténtalo de nuevo.
        </div>
      )}
    </form>
  )
}

