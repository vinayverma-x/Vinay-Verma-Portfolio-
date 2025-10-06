"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface TechAvatarEnhancedProps {
  className?: string
  size?: number
  primaryColor?: string
  secondaryColor?: string
  autoRotate?: boolean
}

export default function TechAvatarEnhanced({
  className = "",
  size = 300,
  primaryColor = "#3b82f6",
  secondaryColor = "#1e40af",
  autoRotate = true,
}: TechAvatarEnhancedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [actualSize, setActualSize] = useState(size)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

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

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current || e.touches.length === 0) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.touches[0].clientX - rect.left) / rect.width
    const y = (e.touches[0].clientY - rect.top) / rect.height

    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className} cursor-pointer`}
      style={{ width: `${actualSize}px`, height: `${actualSize}px` }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5"
        style={{
          filter: "blur(10px)",
          animation: "pulse 3s infinite alternate",
        }}
      ></div>

      {/* Core sphere */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          x: isHovering ? (mousePosition.x - 0.5) * 20 : 0,
          y: isHovering ? (mousePosition.y - 0.5) * 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
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
              rotateZ: autoRotate ? [0, 10, 0, -10, 0] : 0,
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Wireframe overlay */}
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/30 overflow-hidden"
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 180],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(${primaryColor}20 1px, transparent 1px), linear-gradient(90deg, ${primaryColor}20 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Orbiting particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI) / 6
          return (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-primary/80"
              style={{
                left: `${50 + 40 * Math.cos(angle)}%`,
                top: `${50 + 40 * Math.sin(angle)}%`,
                boxShadow: `0 0 10px ${primaryColor}80`,
              }}
              animate={{
                x: isHovering ? (mousePosition.x - 0.5) * 30 : 0,
                y: isHovering ? (mousePosition.y - 0.5) * 30 : 0,
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                x: { type: "spring", stiffness: 100, damping: 10 },
                y: { type: "spring", stiffness: 100, damping: 10 },
                scale: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.2,
                },
                opacity: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.2,
                },
              }}
            />
          )
        })}
      </div>

      {/* Secondary particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-secondary/80"
              style={{
                left: `${50 + 45 * Math.cos(angle)}%`,
                top: `${50 + 45 * Math.sin(angle)}%`,
                boxShadow: `0 0 8px ${secondaryColor}80`,
              }}
              animate={{
                x: isHovering ? (mousePosition.x - 0.5) * 40 : 0,
                y: isHovering ? (mousePosition.y - 0.5) * 40 : 0,
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                x: { type: "spring", stiffness: 50, damping: 8 },
                y: { type: "spring", stiffness: 50, damping: 8 },
                scale: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.3,
                },
                opacity: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.3,
                },
              }}
            />
          )
        })}
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
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  strokeDasharray: ["0, 10", "10, 10"],
                  strokeDashoffset: [0, -20],
                }}
                transition={{
                  opacity: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: i * 0.2,
                  },
                  strokeDasharray: {
                    duration: 0,
                    delay: 0,
                  },
                  strokeDashoffset: {
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
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
              borderColor: i % 2 === 0 ? `${primaryColor}30` : `${secondaryColor}30`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              x: isHovering ? (mousePosition.x - 0.5) * (10 + i * 5) : 0,
              y: isHovering ? (mousePosition.y - 0.5) * (10 + i * 5) : 0,
            }}
            transition={{
              rotate: {
                duration: 20 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              x: { type: "spring", stiffness: 150 - i * 30, damping: 15 },
              y: { type: "spring", stiffness: 150 - i * 30, damping: 15 },
            }}
          />
        ))}
      </div>

      {/* Glowing center */}
      <motion.div
        className="absolute rounded-full bg-primary/30"
        style={{
          width: "20%",
          height: "20%",
          left: "40%",
          top: "40%",
          filter: "blur(10px)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </motion.div>
  )
}
