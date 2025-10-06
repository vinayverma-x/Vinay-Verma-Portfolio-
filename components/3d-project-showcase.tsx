"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Project } from "@/utils/projects-data"

interface ProjectShowcaseProps {
  projects: Project[]
  className?: string
}

export default function ProjectShowcase({ projects, className = "" }: ProjectShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)
  const [loading, setLoading] = useState(true)
  const [size, setSize] = useState({ width: 800, height: 500 })
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })

  // Adjust size for container and responsive design
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setSize({ width, height })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

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
    canvas.width = size.width
    canvas.height = size.height
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

    // Animation variables
    const particles: Particle[] = []
    const particleCount = 100
    const maxDistance = 100
    const projectImages: HTMLImageElement[] = []

    // Load project images
    projects.forEach((project, index) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = project.imageUrl || `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(project.title)}`
      img.onload = () => {
        projectImages[index] = img
        if (index === 0) setLoading(false)
      }
    })

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.3})`,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
      })
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw background
      ctx.fillStyle = "rgba(15, 23, 42, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw glowing effect
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width * 0.8)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.05)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

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
        const mouseX = mousePosition.x * canvas.width
        const mouseY = mousePosition.y * canvas.height
        const mouseDistance = Math.sqrt(Math.pow(particle.x - mouseX, 2) + Math.pow(particle.y - mouseY, 2))

        if (mouseDistance < maxDistance) {
          const force = maxDistance / Math.max(mouseDistance, 30)
          const angle = Math.atan2(particle.y - mouseY, particle.x - mouseX)
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

      // Draw project image with 3D effect
      if (projectImages[activeProject]) {
        const img = projectImages[activeProject]
        const imgWidth = canvas.width * 0.7
        const imgHeight = (imgWidth / img.width) * img.height
        const imgX = centerX - imgWidth / 2
        const imgY = centerY - imgHeight / 2

        // Apply 3D effect based on mouse position
        const rotateX = (mousePosition.y - 0.5) * 10
        const rotateY = (mousePosition.x - 0.5) * -10
        const perspective = 800

        ctx.save()
        ctx.translate(centerX, centerY)

        // Apply 3D transformation
        const t = Math.tan((rotateY * Math.PI) / 180)
        const t2 = Math.tan((rotateX * Math.PI) / 180)

        // Apply perspective transformation
        ctx.transform(1, 0, t, 1, 0, 0)
        ctx.transform(1, t2, 0, 1, 0, 0)

        // Draw image with shadow
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
        ctx.shadowBlur = 20
        ctx.shadowOffsetX = 10
        ctx.shadowOffsetY = 10

        ctx.drawImage(img, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight)

        // Reset shadow
        ctx.shadowColor = "transparent"
        ctx.shadowBlur = 0
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0

        // Draw border
        ctx.strokeStyle = primaryColor
        ctx.lineWidth = 2
        ctx.strokeRect(-imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight)

        // Draw project title
        ctx.fillStyle = "white"
        ctx.font = "bold 24px Arial"
        ctx.textAlign = "center"
        ctx.fillText(projects[activeProject].title, 0, imgHeight / 2 + 40)

        ctx.restore()
      }

      // Draw project navigation
      const navWidth = 30
      const navHeight = 10
      const navGap = 10
      const navY = canvas.height - 30

      projects.forEach((_, index) => {
        const navX = centerX + (index - projects.length / 2 + 0.5) * (navWidth + navGap)

        ctx.fillStyle = index === activeProject ? primaryColor : "rgba(255, 255, 255, 0.3)"
        ctx.beginPath()
        ctx.roundRect(navX - navWidth / 2, navY - navHeight / 2, navWidth, navHeight, 5)
        ctx.fill()
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
  }, [size, mousePosition, activeProject, projects])

  // Auto-rotate through projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <div className={`relative ${className}`}>
      <motion.div
        ref={containerRef}
        className="relative rounded-xl overflow-hidden border border-primary/10 bg-background/80 backdrop-blur-sm"
        style={{ width: "100%", height: `${size.height}px` }}
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

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 z-10">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50"
          onClick={() => setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)}
        >
          Previous
        </Button>

        <Button asChild variant="default" size="sm" className="rounded-full bg-primary hover:bg-primary/90">
          <Link
            href={projects[activeProject].link}
            target={projects[activeProject].external ? "_blank" : "_self"}
            rel={projects[activeProject].external ? "noopener noreferrer" : ""}
          >
            {projects[activeProject].external ? (
              <>
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Link>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50"
          onClick={() => setActiveProject((prev) => (prev + 1) % projects.length)}
        >
          Next
        </Button>
      </div>
    </div>
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
