"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface TechAvatarFallbackProps {
  className?: string
  size?: number
  primaryColor?: string
  secondaryColor?: string
  autoRotate?: boolean
}

export default function TechAvatarFallback({
  className = "",
  size = 300,
  primaryColor = "#3b82f6",
  secondaryColor = "#1e40af",
  autoRotate = true,
}: TechAvatarFallbackProps) {
  const [actualSize, setActualSize] = useState(size)

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

  return (
    <div className={`relative ${className}`} style={{ width: `${actualSize}px`, height: `${actualSize}px` }}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 animate-pulse"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-primary to-primary/70"
          animate={{
            scale: [1, 1.05, 1],
            rotate: autoRotate ? [0, 5, 0, -5, 0] : 0,
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      </div>
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-primary/80"
            style={{
              left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
              top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-secondary/80"
            style={{
              left: `${50 + 45 * Math.cos((i * Math.PI) / 6)}%`,
              top: `${50 + 45 * Math.sin((i * Math.PI) / 6)}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
