"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface HeroSceneProps {
  className?: string
  size?: number
}

export default function HeroScene({ className = "", size = 400 }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [actualSize, setActualSize] = useState(size)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  // Adjust size for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setActualSize(Math.min(size, window.innerWidth - 40))
      } else {
        setActualSize(size)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [size])

  useEffect(() => {
    if (!containerRef.current) return

    // Create canvas element
    const canvas = document.createElement("canvas")
    canvas.width = actualSize
    canvas.height = actualSize
    canvasRef.current = canvas
    containerRef.current.appendChild(canvas)

    // Get 2D context
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      setLoading(false)
      return
    }

    // Animation variables
    const particles: Particle[] = []
    const particleCount = 100
    const maxDistance = 100
    const mousePosition = { x: actualSize / 2, y: actualSize / 2 }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * actualSize,
        y: Math.random() * actualSize,
        radius: Math.random() * 2 + 1,
        color: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.3})`,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
      })
    }

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosition.x = e.clientX - rect.left
      mousePosition.y = e.clientY - rect.top
    }

    // Handle touch move
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mousePosition.x = e.touches[0].clientX - rect.left
        mousePosition.y = e.touches[0].clientY - rect.top
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw central shape
      const time = Date.now() * 0.001
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = 50 + Math.sin(time) * 10

      // Draw glowing circle
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.5)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.3)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw central sphere
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(59, 130, 246, 0.7)"
      ctx.fill()

      // Draw particles and connect them
      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect to center with gradient line
        const distance = Math.sqrt(Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2))

        if (distance < maxDistance) {
          ctx.beginPath()
          ctx.moveTo(centerX, centerY)
          ctx.lineTo(particle.x, particle.y)

          const opacity = 1 - distance / maxDistance
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }

        // Connect to nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const otherParticle = particles[j]
          const dist = Math.sqrt(Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2))

          if (dist < maxDistance / 2) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)

            const opacity = 1 - dist / (maxDistance / 2)
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`
            ctx.lineWidth = 0.3
            ctx.stroke()
          }
        }

        // Influence particles with mouse position
        const mouseDistance = Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + Math.pow(particle.y - mousePosition.y, 2),
        )

        if (mouseDistance < maxDistance) {
          const force = maxDistance / Math.max(mouseDistance, 30)
          const angle = Math.atan2(particle.y - mousePosition.y, particle.x - mousePosition.x)
          particle.speedX += Math.cos(angle) * force * 0.01
          particle.speedY += Math.sin(angle) * force * 0.01

          // Limit speed
          const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
          if (speed > 2) {
            particle.speedX = (particle.speedX / speed) * 2
            particle.speedY = (particle.speedY / speed) * 2
          }
        }
      })

      // Draw orbiting elements
      for (let i = 0; i < 3; i++) {
        const orbitRadius = 80 + i * 20
        const angle = time * (1 + i * 0.2)
        const x = centerX + Math.cos(angle) * orbitRadius
        const y = centerY + Math.sin(angle) * orbitRadius

        ctx.beginPath()
        ctx.arc(x, y, 5 - i, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${0.8 - i * 0.2})`
        ctx.fill()

        // Draw orbit path
        ctx.beginPath()
        ctx.arc(centerX, centerY, orbitRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - i * 0.05})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()
    setLoading(false)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      if (containerRef.current && canvasRef.current) {
        containerRef.current.removeChild(canvasRef.current)
      }
    }
  }, [actualSize])

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: `${actualSize}px`, height: `${actualSize}px` }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </motion.div>
  )
}

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  speedX: number
  speedY: number
}
