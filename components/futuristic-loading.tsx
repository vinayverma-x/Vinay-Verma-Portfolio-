"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FuturisticLoadingProps {
  onLoadingComplete?: () => void
  duration?: number
  color?: string
  accentColor?: string
}

export default function FuturisticLoading({
  onLoadingComplete,
  duration = 3000,
  color = "#0ea5e9",
  accentColor = "#10b981",
}: FuturisticLoadingProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const updateProgress = () => {
      const now = Date.now()
      const newProgress = Math.min(1, (now - startTime) / duration)
      setProgress(newProgress)

      if (now < endTime) {
        animationFrameRef.current = requestAnimationFrame(updateProgress)
      } else {
        setIsComplete(true)
        if (onLoadingComplete) {
          setTimeout(onLoadingComplete, 500)
        }
      }
    }

    animationFrameRef.current = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [duration, onLoadingComplete])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const scale = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
    canvas.width = 300 * scale
    canvas.height = 300 * scale
    ctx.scale(scale, scale)

    // Animation properties
    const centerX = 150
    const centerY = 150
    const maxRadius = 120
    const particleCount = 80
    const particles: Particle[] = []

    // Parse colors
    const parseColor = (colorStr: string) => {
      const hex = colorStr.replace("#", "")
      return {
        r: Number.parseInt(hex.substring(0, 2), 16),
        g: Number.parseInt(hex.substring(2, 4), 16),
        b: Number.parseInt(hex.substring(4, 6), 16),
      }
    }

    const mainColor = parseColor(color)
    const secondColor = parseColor(accentColor)

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2
      const useSecondColor = i % 3 === 0
      const particleColor = useSecondColor ? secondColor : mainColor

      particles.push({
        x: centerX,
        y: centerY,
        size: 2 + Math.random() * 3,
        angle,
        speed: 0.2 + Math.random() * 0.8,
        targetRadius: 30 + Math.random() * (maxRadius - 30),
        color: particleColor,
        alpha: 0.1 + Math.random() * 0.7,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.04,
      })
    }

    // Animation loop
    let lastTime = 0
    const animate = (time: number) => {
      const deltaTime = time - lastTime
      lastTime = time

      // Clear canvas
      ctx.clearRect(0, 0, 300, 300)

      // Draw outer glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius + 30)
      gradient.addColorStop(0, `rgba(${mainColor.r}, ${mainColor.g}, ${mainColor.b}, 0.03)`)
      gradient.addColorStop(0.5, `rgba(${mainColor.r}, ${mainColor.g}, ${mainColor.b}, 0.02)`)
      gradient.addColorStop(1, `rgba(${mainColor.r}, ${mainColor.g}, ${mainColor.b}, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 300, 300)

      // Draw progress ring
      const ringWidth = 4
      const ringRadius = maxRadius - ringWidth / 2

      ctx.beginPath()
      ctx.arc(centerX, centerY, ringRadius, -Math.PI / 2, -Math.PI / 2 + progress * Math.PI * 2)
      ctx.strokeStyle = `rgba(${mainColor.r}, ${mainColor.g}, ${mainColor.b}, 0.8)`
      ctx.lineWidth = ringWidth
      ctx.lineCap = "round"
      ctx.stroke()

      // Draw background ring
      ctx.beginPath()
      ctx.arc(centerX, centerY, ringRadius, -Math.PI / 2 + progress * Math.PI * 2, Math.PI * 1.5)
      ctx.strokeStyle = `rgba(${mainColor.r}, ${mainColor.g}, ${mainColor.b}, 0.2)`
      ctx.lineWidth = ringWidth
      ctx.stroke()

      // Draw center circle with pulsing effect
      const pulseScale = 0.9 + Math.sin(time * 0.002) * 0.1
      const centerRadius = 15 * pulseScale

      // Glow effect
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, centerRadius * 2)
      centerGlow.addColorStop(0, `rgba(${mainColor.r}, ${mainColor.g}, ${mainColor.b}, 0.8)`)
      centerGlow.addColorStop(0.5, `rgba(${mainColor.r}, ${mainColor.g}, ${mainColor.b}, 0.3)`)
      centerGlow.addColorStop(1, `rgba(${mainColor.r}, ${mainColor.g}, ${mainColor.b}, 0)`)

      ctx.beginPath()
      ctx.arc(centerX, centerY, centerRadius * 2, 0, Math.PI * 2)
      ctx.fillStyle = centerGlow
      ctx.fill()

      // Actual center circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${mainColor.r}, ${mainColor.g}, ${mainColor.b}, 0.9)`
      ctx.fill()

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update particle position
        p.pulse += p.pulseSpeed
        const currentRadius = p.targetRadius * progress
        const pulseEffect = Math.sin(p.pulse) * 5

        p.x = centerX + Math.cos(p.angle) * (currentRadius + pulseEffect)
        p.y = centerY + Math.sin(p.angle) * (currentRadius + pulseEffect)

        // Skip some particles at the beginning of the animation
        if (Math.random() > progress * 2 && progress < 0.5) continue

        // Draw particle with glow
        const particleGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2)
        particleGlow.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`)
        particleGlow.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = particleGlow
        ctx.fill()

        // Draw actual particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 1.5})`
        ctx.fill()

        // Connect to center with thin line
        if (Math.random() > 0.7) {
          const lineGradient = ctx.createLinearGradient(centerX, centerY, p.x, p.y)
          lineGradient.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.5)`)
          lineGradient.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`)

          ctx.beginPath()
          ctx.moveTo(centerX, centerY)
          ctx.lineTo(p.x, p.y)
          ctx.strokeStyle = lineGradient
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      // Draw progress text
      const progressText = `${Math.round(progress * 100)}%`
      ctx.font = "bold 14px 'Inter', sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "#ffffff"
      ctx.fillText(progressText, centerX, centerY)

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [color, accentColor])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col items-center">
            <canvas ref={canvasRef} style={{ width: 300, height: 300 }} className="canvas-loading" />
            <motion.div
              className="absolute bottom-[-60px] text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-2">Vinay Verma</h2>
              <p className="text-gray-400 text-sm">Full Stack Developer & Cybersecurity Expert</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface Particle {
  x: number
  y: number
  size: number
  angle: number
  speed: number
  targetRadius: number
  color: { r: number; g: number; b: number }
  alpha: number
  pulse: number
  pulseSpeed: number
}
