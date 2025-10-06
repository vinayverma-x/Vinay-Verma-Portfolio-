"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface CodingBoyAvatarProps {
  className?: string
  size?: number
}

export default function CodingBoyAvatar({ className = "", size = 300 }: CodingBoyAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [actualSize, setActualSize] = useState(size)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    setMousePosition({ x, y })
  }

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

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const time = Date.now() * 0.001

      // Draw background glow
      const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width / 2)
      bgGradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
      bgGradient.addColorStop(1, "rgba(59, 130, 246, 0)")

      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Calculate head position with mouse influence
      const headX = centerX + (mousePosition.x - 0.5) * 20
      const headY = centerY - 40 + Math.sin(time) * 5 + (mousePosition.y - 0.5) * 10

      // Draw body
      ctx.fillStyle = "#3b82f6"
      ctx.beginPath()
      ctx.roundRect(centerX - 30, centerY - 10, 60, 80, 10)
      ctx.fill()

      // Draw head
      ctx.fillStyle = "#f8d5b2"
      ctx.beginPath()
      ctx.arc(headX, headY, 30, 0, Math.PI * 2)
      ctx.fill()

      // Draw hair
      ctx.fillStyle = "#333"
      ctx.beginPath()
      ctx.arc(headX, headY - 10, 30, Math.PI, 0, true)
      ctx.fill()

      // Draw eyes
      ctx.fillStyle = "#333"
      ctx.beginPath()
      ctx.arc(headX - 10, headY - 5, 3, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.arc(headX + 10, headY - 5, 3, 0, Math.PI * 2)
      ctx.fill()

      // Draw mouth
      ctx.beginPath()
      ctx.arc(headX, headY + 10, 8, 0, Math.PI)
      ctx.stroke()

      // Draw arms
      ctx.fillStyle = "#3b82f6"

      // Left arm
      ctx.save()
      ctx.translate(centerX - 30, centerY)
      ctx.rotate(-Math.PI / 4 + Math.sin(time * 2) * 0.1)
      ctx.fillRect(-10, 0, 15, 60)
      ctx.restore()

      // Right arm
      ctx.save()
      ctx.translate(centerX + 30, centerY)
      ctx.rotate(Math.PI / 4 - Math.sin(time * 2) * 0.1)
      ctx.fillRect(-5, 0, 15, 60)
      ctx.restore()

      // Draw legs
      ctx.fillStyle = "#333"

      // Left leg
      ctx.fillRect(centerX - 25, centerY + 70, 15, 40)

      // Right leg
      ctx.fillRect(centerX + 10, centerY + 70, 15, 40)

      // Draw laptop
      ctx.fillStyle = "#555"
      ctx.save()
      ctx.translate(centerX, centerY + 30)
      ctx.rotate(-Math.PI / 16)
      ctx.fillRect(-40, -10, 80, 50)
      ctx.restore()

      // Draw laptop screen
      ctx.fillStyle = "#222"
      ctx.save()
      ctx.translate(centerX, centerY + 30)
      ctx.rotate(-Math.PI / 16)
      ctx.fillRect(-35, -5, 70, 40)
      ctx.restore()

      // Draw code on screen
      ctx.fillStyle = "#3b82f6"
      ctx.save()
      ctx.translate(centerX, centerY + 30)
      ctx.rotate(-Math.PI / 16)

      // Draw code lines
      for (let i = 0; i < 5; i++) {
        const lineY = -2 + i * 7
        const lineWidth = 20 + Math.random() * 30
        ctx.fillRect(-30, lineY, lineWidth, 2)
      }

      ctx.restore()

      // Draw floating code elements
      for (let i = 0; i < 10; i++) {
        const angle = time + (i * Math.PI) / 5
        const distance = 70 + Math.sin(time * 2 + i) * 10
        const x = centerX + Math.cos(angle) * distance
        const y = centerY + (Math.sin(angle) * distance) / 2

        ctx.fillStyle = `rgba(59, 130, 246, ${0.7 - i * 0.05})`
        ctx.font = "12px monospace"

        const symbols = ["<>", "{}", "()", "[]", "//", "==", "=>", "&&", "||", "++"]
        ctx.fillText(symbols[i % symbols.length], x, y)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()
    setLoading(false)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      if (containerRef.current && canvasRef.current) {
        containerRef.current.removeChild(canvasRef.current)
      }
    }
  }, [actualSize, mousePosition])

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: `${actualSize}px`, height: `${actualSize}px` }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </motion.div>
  )
}
