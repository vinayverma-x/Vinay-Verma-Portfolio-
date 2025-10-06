"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface ProfessionalCoderSceneProps {
  className?: string
  size?: number
}

export default function ProfessionalCoderScene({ className = "", size = 400 }: ProfessionalCoderSceneProps) {
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

    // Define colors
    const primaryColor = "#3b82f6"
    const secondaryColor = "#1e40af"
    const accentColor = "#10b981"
    const bgColor = "#0f172a"
    const textColor = "#e2e8f0"

    // Code snippets for the animation
    const codeSnippets = [
      "function animate() {",
      "  requestAnimationFrame(animate);",
      "  renderer.render(scene, camera);",
      "}",
      "",
      "const scene = new THREE.Scene();",
      "const camera = new THREE.PerspectiveCamera();",
      "const renderer = new THREE.WebGLRenderer();",
      "",
      "class Portfolio extends Component {",
      "  render() {",
      "    return <App />;",
      "  }",
      "}",
      "",
      "export const metadata = {",
      '  title: "Professional Portfolio",',
      "};",
      "",
      "export default function Page() {",
      "  return <Main />;",
      "}",
    ]

    // Animation variables
    let codeScrollY = 0
    let typingIndex = 0
    let currentLine = ""
    const typingSpeed = 3
    let typingDelay = 0
    let cursorBlink = 0
    let activeCodeLine = 0

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw background
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw glowing effect
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width * 0.8)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.05)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw monitor
      const monitorWidth = canvas.width * 0.8
      const monitorHeight = canvas.height * 0.6
      const monitorX = centerX - monitorWidth / 2
      const monitorY = centerY - monitorHeight / 2 - 20

      // Monitor stand
      ctx.fillStyle = "#1e293b"
      ctx.beginPath()
      ctx.moveTo(centerX - 30, canvas.height - 40)
      ctx.lineTo(centerX + 30, canvas.height - 40)
      ctx.lineTo(centerX + 20, monitorY + monitorHeight)
      ctx.lineTo(centerX - 20, monitorY + monitorHeight)
      ctx.fill()

      // Monitor base
      ctx.fillStyle = "#334155"
      ctx.beginPath()
      ctx.ellipse(centerX, canvas.height - 40, 50, 10, 0, 0, Math.PI * 2)
      ctx.fill()

      // Monitor frame
      ctx.fillStyle = "#334155"
      ctx.fillRect(monitorX - 10, monitorY - 10, monitorWidth + 20, monitorHeight + 20)

      // Monitor screen
      ctx.fillStyle = "#0f172a"
      ctx.fillRect(monitorX, monitorY, monitorWidth, monitorHeight)

      // Draw code on screen
      ctx.font = "12px monospace"
      ctx.fillStyle = textColor

      // Update typing animation
      if (typingDelay > 0) {
        typingDelay--
      } else {
        if (typingIndex < codeSnippets[activeCodeLine].length) {
          currentLine = codeSnippets[activeCodeLine].substring(0, typingIndex + 1)
          typingIndex++
          typingDelay = Math.floor(Math.random() * 3) + 1
        } else {
          cursorBlink++
          if (cursorBlink > 60) {
            activeCodeLine = (activeCodeLine + 1) % codeSnippets.length
            typingIndex = 0
            currentLine = ""
            cursorBlink = 0
          }
        }
      }

      // Draw code with syntax highlighting
      const lineHeight = 18
      const codeX = monitorX + 20
      const codeY = monitorY + 30 - codeScrollY

      for (let i = 0; i < codeSnippets.length; i++) {
        const y = codeY + i * lineHeight

        // Only draw visible lines
        if (y > monitorY && y < monitorY + monitorHeight - lineHeight) {
          let line = codeSnippets[i]

          // For the active line, use the current typing state
          if (i === activeCodeLine) {
            line = currentLine
          }

          // Syntax highlighting
          if (
            line.includes("function") ||
            line.includes("class") ||
            line.includes("const") ||
            line.includes("export")
          ) {
            ctx.fillStyle = "#ff79c6" // Keywords
          } else if (
            line.includes("THREE") ||
            line.includes("Component") ||
            line.includes("App") ||
            line.includes("Main")
          ) {
            ctx.fillStyle = "#bd93f9" // Classes
          } else if (line.includes("return")) {
            ctx.fillStyle = "#ff79c6" // Return
          } else if (line.includes("=")) {
            ctx.fillStyle = "#f1fa8c" // Assignments
          } else if (line.includes("{") || line.includes("}")) {
            ctx.fillStyle = "#f8f8f2" // Braces
          } else {
            ctx.fillStyle = "#8be9fd" // Default
          }

          ctx.fillText(line, codeX, y)

          // Draw cursor for active line
          if (i === activeCodeLine && cursorBlink % 40 < 20) {
            const cursorX = codeX + ctx.measureText(currentLine).width
            ctx.fillStyle = "#f8f8f2"
            ctx.fillRect(cursorX, y - 10, 8, 14)
          }
        }
      }

      // Slowly scroll code
      codeScrollY += 0.2
      if (codeScrollY > codeSnippets.length * lineHeight) {
        codeScrollY = 0
      }

      // Draw keyboard
      const keyboardWidth = monitorWidth * 0.8
      const keyboardHeight = 30
      const keyboardX = centerX - keyboardWidth / 2
      const keyboardY = canvas.height - 80

      // Keyboard base
      ctx.fillStyle = "#334155"
      ctx.beginPath()
      ctx.roundRect(keyboardX, keyboardY, keyboardWidth, keyboardHeight, 5)
      ctx.fill()

      // Keyboard keys
      const keySize = 8
      const keyGap = 2
      const keysStartX = keyboardX + 10
      const keysStartY = keyboardY + 5
      const keyRows = 3
      const keysPerRow = 12

      for (let row = 0; row < keyRows; row++) {
        for (let col = 0; col < keysPerRow; col++) {
          const keyX = keysStartX + col * (keySize + keyGap)
          const keyY = keysStartY + row * (keySize + keyGap)

          // Random key highlight for typing effect
          if (Math.random() < 0.05 && typingIndex < codeSnippets[activeCodeLine].length) {
            ctx.fillStyle = accentColor
          } else {
            ctx.fillStyle = "#1e293b"
          }

          ctx.beginPath()
          ctx.roundRect(keyX, keyY, keySize, keySize, 2)
          ctx.fill()
        }
      }

      // Draw floating particles
      for (let i = 0; i < 20; i++) {
        const angle = time + (i * Math.PI) / 10
        const distance = 150 + Math.sin(time * 2 + i) * 20
        const x = centerX + Math.cos(angle) * distance * 0.5
        const y = centerY + Math.sin(angle) * distance * 0.3

        ctx.fillStyle = `rgba(59, 130, 246, ${0.5 - i * 0.02})`
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Connect some particles with lines
        if (i % 3 === 0 && i > 0) {
          const prevAngle = time + ((i - 3) * Math.PI) / 10
          const prevDistance = 150 + Math.sin(time * 2 + (i - 3)) * 20
          const prevX = centerX + Math.cos(prevAngle) * prevDistance * 0.5
          const prevY = centerY + Math.sin(prevAngle) * prevDistance * 0.3

          ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - i * 0.01})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(prevX, prevY)
          ctx.stroke()
        }
      }

      // Draw code symbols floating around
      const symbols = ["<>", "{}", "()", "[]", "//", "==", "=>", "&&", "||", "++"]
      for (let i = 0; i < 10; i++) {
        const angle = time * 0.5 + (i * Math.PI) / 5
        const distance = 180 + Math.sin(time + i) * 10
        const x = centerX + Math.cos(angle) * distance * 0.6
        const y = centerY + Math.sin(angle) * distance * 0.3

        ctx.fillStyle = `rgba(16, 185, 129, ${0.7 - i * 0.05})`
        ctx.font = "14px monospace"
        ctx.fillText(symbols[i % symbols.length], x, y)
      }

      // Mouse interaction effect
      const mouseX = mousePosition.x * canvas.width
      const mouseY = mousePosition.y * canvas.height

      // Draw glow around mouse
      const mouseGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 80)
      mouseGradient.addColorStop(0, "rgba(59, 130, 246, 0.2)")
      mouseGradient.addColorStop(1, "rgba(59, 130, 246, 0)")

      ctx.fillStyle = mouseGradient
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, 80, 0, Math.PI * 2)
      ctx.fill()

      // Draw connecting lines from mouse to nearby elements
      const maxConnectDistance = 100

      // Connect to monitor corners
      const monitorCorners = [
        { x: monitorX, y: monitorY },
        { x: monitorX + monitorWidth, y: monitorY },
        { x: monitorX, y: monitorY + monitorHeight },
        { x: monitorX + monitorWidth, y: monitorY + monitorHeight },
      ]

      monitorCorners.forEach((corner) => {
        const distance = Math.sqrt(Math.pow(mouseX - corner.x, 2) + Math.pow(mouseY - corner.y, 2))

        if (distance < maxConnectDistance) {
          const opacity = 1 - distance / maxConnectDistance

          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(mouseX, mouseY)
          ctx.lineTo(corner.x, corner.y)
          ctx.stroke()
        }
      })

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
