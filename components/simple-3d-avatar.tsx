"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface SimpleAvatarProps {
  className?: string
  size?: number
  primaryColor?: string
  secondaryColor?: string
}

export default function SimpleAvatar({
  className = "",
  size = 300,
  primaryColor = "#3b82f6",
  secondaryColor = "#1e40af",
}: SimpleAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [actualSize, setActualSize] = useState(size)
  const [isLoaded, setIsLoaded] = useState(false)

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

    // Set loaded state after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timer)
    }
  }, [size])

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: `${actualSize}px`, height: `${actualSize}px` }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 animate-pulse"></div>

      {/* Core sphere */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-3/4 h-3/4">
          {/* Inner sphere with gradient */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/80 to-primary/40"
            style={{
              boxShadow: `0 0 30px ${primaryColor}40, inset 0 0 20px ${secondaryColor}40`,
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Wireframe overlay */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(${primaryColor}20 1px, transparent 1px), linear-gradient(90deg, ${primaryColor}20 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
        </div>
      </motion.div>

      {/* Orbiting particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-primary/80"
            style={{
              left: `${50 + 40 * Math.cos((i * Math.PI) / 6)}%`,
              top: `${50 + 40 * Math.sin((i * Math.PI) / 6)}%`,
              boxShadow: `0 0 10px ${primaryColor}80`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
              x: [0, Math.random() * 10 - 5],
              y: [0, Math.random() * 10 - 5],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Secondary particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-secondary/80"
            style={{
              left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
              top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
              boxShadow: `0 0 8px ${secondaryColor}80`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
              x: [0, Math.random() * 15 - 7.5],
              y: [0, Math.random() * 15 - 7.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        <g>
          {Array.from({ length: 8 }).map((_, i) => {
            const nextIndex = (i + 1) % 8
            const x1 = 50 + 40 * Math.cos((i * Math.PI) / 4)
            const y1 = 50 + 40 * Math.sin((i * Math.PI) / 4)
            const x2 = 50 + 40 * Math.cos((nextIndex * Math.PI) / 4)
            const y2 = 50 + 40 * Math.sin((nextIndex * Math.PI) / 4)

            return (
              <motion.line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke={primaryColor}
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
              />
            )
          })}
        </g>
      </svg>

      {/* Rotating rings */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-primary/30"
            style={{
              width: `${70 + i * 10}%`,
              height: `${70 + i * 10}%`,
              left: `${15 - i * 5}%`,
              top: `${15 - i * 5}%`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </motion.div>
  )
}
