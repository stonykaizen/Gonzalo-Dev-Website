"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Draw animated gradient
    const draw = () => {
      time += 0.003

      // Create gradient
      const gradient = ctx.createLinearGradient(
        canvas.width * (0.5 + 0.5 * Math.sin(time * 0.5)),
        0,
        canvas.width * (0.5 + 0.5 * Math.cos(time * 0.3)),
        canvas.height,
      )

      // Add colors to gradient
      gradient.addColorStop(0, `rgba(30, 64, 175, ${0.05 + 0.05 * Math.sin(time)})`)
      gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.05 + 0.05 * Math.sin(time + 1)})`)
      gradient.addColorStop(1, `rgba(6, 182, 212, ${0.05 + 0.05 * Math.sin(time + 2)})`)

      // Fill canvas with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 + 0.03 * Math.sin(time * 0.7)})`
      ctx.lineWidth = 0.5

      // Horizontal lines
      const lineCount = 20
      const lineSpacing = canvas.height / lineCount

      for (let i = 0; i <= lineCount; i++) {
        const y = i * lineSpacing

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      const columnCount = 30
      const columnSpacing = canvas.width / columnCount

      for (let i = 0; i <= columnCount; i++) {
        const x = i * columnSpacing

        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    draw()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}

