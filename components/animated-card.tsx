"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  darkGlowColor?: string
  hoverScale?: number
  rotationStrength?: number
}

export default function AnimatedCard({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.5)",
  darkGlowColor = "rgba(96, 165, 250, 0.6)",
  hoverScale = 1.02,
  rotationStrength = 10,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Detect dark mode
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"))

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"))
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  // Mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for rotation
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })

  // Transform mouse position to rotation values
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to card center (in -0.5 to 0.5 range)
    const centerX = (e.clientX - rect.left) / rect.width - 0.5
    const centerY = (e.clientY - rect.top) / rect.height - 0.5

    // Update motion values
    mouseX.set(centerX)
    mouseY.set(centerY)

    // Set rotation based on mouse position
    rotateX.set(centerY * -rotationStrength) // Invert Y axis for natural rotation
    rotateY.set(centerX * rotationStrength)
  }

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
    rotateX.set(0)
    rotateY.set(0)
  }

  // Transform mouse position to glow position
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])

  // Glow opacity based on hover state
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 30 })

  useEffect(() => {
    glowOpacity.set(isHovered ? 0.7 : 0)
  }, [isHovered, glowOpacity])

  const activeGlowColor = isDarkMode ? darkGlowColor : glowColor

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl border cursor-pointer transition-all duration-300 group",
        "border-primary/10 bg-card/80 backdrop-blur-sm",
        "dark:bg-gray-900/70 dark:backdrop-blur-xl dark:border-gray-800/50 dark:shadow-lg dark:shadow-black/20",
        isHovered && "dark:border-primary/40 dark:shadow-xl dark:shadow-primary/10",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      animate={{
        scale: isHovered ? hoverScale : 1,
        boxShadow: isHovered
          ? isDarkMode
            ? `0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 0 15px ${darkGlowColor}`
            : `0 20px 40px -15px rgba(0, 0, 0, 0.2), 0 0 15px ${glowColor}`
          : isDarkMode
            ? "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
            : "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, ${activeGlowColor} 0%, transparent 70%)`,
          opacity: glowOpacity,
        }}
      />

      {/* Card content with 3D effect */}
      <div
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>

      {/* Subtle border highlight on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none border border-primary/0 rounded-xl"
        animate={{
          borderColor: isHovered
            ? isDarkMode
              ? `${darkGlowColor.replace(")", ", 0.4)")}`
              : `${glowColor.replace(")", ", 0.3)")}`
            : "rgba(59, 130, 246, 0)",
        }}
      />
    </motion.div>
  )
}
