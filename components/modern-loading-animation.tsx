"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface ModernLoadingAnimationProps {
  size?: number
  color?: string
}

export default function ModernLoadingAnimation({ size = 80, color = "#3b82f6" }: ModernLoadingAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const scale = window.devicePixelRatio || 1
    canvas.width = size * scale
    canvas.height = size * scale
    ctx.scale(scale, scale)

    // Animation properties
    const particles: Particle[] = []
    const particleCount = 12
    const baseRadius = size / 2 - 10
    const particleSize = 4
    const hexColor = color.replace("#", "")
    const r = Number.parseInt(hexColor.substring(0, 2), 16)
    const g = Number.parseInt(hexColor.substring(2, 4), 16)
    const b = Number.parseInt(hexColor.substring(4, 6), 16)

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2
      particles.push({
        x: Math.cos(angle) * baseRadius + size / 2,
        y: Math.sin(angle) * baseRadius + size / 2,
        size: particleSize,
        speedX: Math.cos(angle) * 0.5,
        speedY: Math.sin(angle) * 0.5,
        angle,
        oscillationSpeed: 0.05 + Math.random() * 0.05,
        oscillationDistance: 2 + Math.random() * 2,
        alpha: 0.5 + Math.random() * 0.5,
        hue: Math.random() * 30 - 15, // Slight color variation
      })
    }

    // Animation loop
    let animationId: number
    let lastTime = 0

    const animate = (time: number) => {
      const deltaTime = time - lastTime
      lastTime = time

      // Clear canvas
      ctx.clearRect(0, 0, size, size)

      // Draw outer glow
      const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, baseRadius + 10)
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.1)`)
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.05)`)
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, size, size)

      // Draw center circle with pulsing effect
      const pulseScale = 0.8 + Math.sin(time * 0.003) * 0.2
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, (baseRadius / 4) * pulseScale, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()

      // Add inner glow to center circle
      const innerGradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        (baseRadius / 4) * pulseScale,
      )
      innerGradient.addColorStop(0, `rgba(255, 255, 255, 0.8)`)
      innerGradient.addColorStop(1, color)

      ctx.beginPath()
      ctx.arc(size / 2, size / 2, (baseRadius / 4) * pulseScale, 0, Math.PI * 2)
      ctx.fillStyle = innerGradient
      ctx.fill()

      // Draw particles and connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update particle position with oscillation
        p.angle += p.oscillationSpeed
        p.x = Math.cos(p.angle) * (baseRadius + Math.sin(time * 0.001 + i) * p.oscillationDistance) + size / 2
        p.y =
          Math.sin(p.angle) * (baseRadius + Math.sin(time * 0.001 + i + Math.PI / 2) * p.oscillationDistance) + size / 2

        // Draw particle with slight color variation
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (0.8 + Math.sin(time * 0.002 + i) * 0.2), 0, Math.PI * 2)

        // Create slightly varied color
        const particleColor = `rgba(${Math.min(255, r + p.hue)}, ${Math.min(255, g + p.hue)}, ${Math.min(255, b + p.hue)}, ${p.alpha})`
        ctx.fillStyle = particleColor
        ctx.fill()

        // Add glow effect to particles
        const particleGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2)
        particleGlow.addColorStop(0, particleColor)
        particleGlow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = particleGlow
        ctx.fill()

        // Connect to center with gradient line
        const lineGradient = ctx.createLinearGradient(size / 2, size / 2, p.x, p.y)
        lineGradient.addColorStop(0, `${color}80`) // 50% opacity
        lineGradient.addColorStop(1, `${color}20`) // 12.5% opacity

        ctx.beginPath()
        ctx.moveTo(size / 2, size / 2)
        ctx.lineTo(p.x, p.y)
        ctx.strokeStyle = lineGradient
        ctx.lineWidth = 1
        ctx.stroke()

        // Connect to next particle
        const nextP = particles[(i + 1) % particles.length]
        const lineOpacity = 0.2 + Math.sin(time * 0.001) * 0.1 // Pulsing opacity

        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(nextP.x, nextP.y)
        ctx.strokeStyle = `${color}${Math.floor(lineOpacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [size, color])

  return (
    <div className="flex items-center justify-center">
      <motion.canvas
        ref={canvasRef}
        style={{
          width: size,
          height: size,
        }}
        className="canvas-loading"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  angle: number
  oscillationSpeed: number
  oscillationDistance: number
  alpha: number
  hue: number
}
