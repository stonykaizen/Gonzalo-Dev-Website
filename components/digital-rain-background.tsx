"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Raindrop {
  x: number
  y: number
  speed: number
  character: string
  opacity: number
  size: number
}

export function DigitalRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let raindrops: Raindrop[] = []
    const raindropCount = 100
    const characters = "01".split("")
    const isDark = theme === "dark"

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initRaindrops()
    }

    // Initialize raindrops
    const initRaindrops = () => {
      raindrops = []
      for (let i = 0; i < raindropCount; i++) {
        raindrops.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          character: characters[Math.floor(Math.random() * characters.length)],
          opacity: Math.random() * 0.3 + 0.1,
          size: Math.random() * 12 + 8,
        })
      }
    }

    // Draw raindrops
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw raindrops
      raindrops.forEach((raindrop) => {
        // Update position
        raindrop.y += raindrop.speed

        // Reset if off screen
        if (raindrop.y > canvas.height) {
          raindrop.y = -20
          raindrop.x = Math.random() * canvas.width
          raindrop.character = characters[Math.floor(Math.random() * characters.length)]
        }

        // Draw raindrop
        ctx.font = `${raindrop.size}px monospace`

        // Set color based on theme
        if (isDark) {
          ctx.fillStyle = `rgba(59, 130, 246, ${raindrop.opacity})`
        } else {
          ctx.fillStyle = `rgba(30, 64, 175, ${raindrop.opacity})`
        }

        ctx.fillText(raindrop.character, raindrop.x, raindrop.y)
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    draw()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  )
}

