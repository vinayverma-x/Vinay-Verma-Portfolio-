"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface BoyAvatarProps {
  className?: string
  size?: number
  primaryColor?: string
  secondaryColor?: string
}

export default function BoyAvatar({
  className = "",
  size = 300,
  primaryColor = "#3b82f6",
  secondaryColor = "#1e40af",
}: BoyAvatarProps) {
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
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: `${actualSize}px`, height: `${actualSize}px` }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Professional background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-background"></div>

      {/* Boy avatar */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-3/4 h-3/4"
          animate={{
            x: isHovering ? (mousePosition.x - 0.5) * 10 : 0,
            y: isHovering ? (mousePosition.y - 0.5) * 10 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Head */}
          <motion.div
            className="absolute w-[40%] h-[40%] bg-[#f2c097] rounded-full"
            style={{
              top: "10%",
              left: "30%",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
            animate={{
              rotate: isHovering ? (mousePosition.x - 0.5) * 5 : 0,
            }}
          >
            {/* Eyes */}
            <div className="absolute w-[15%] h-[15%] bg-[#222] rounded-full" style={{ top: "40%", left: "25%" }}></div>
            <div className="absolute w-[15%] h-[15%] bg-[#222] rounded-full" style={{ top: "40%", right: "25%" }}></div>

            {/* Mouth */}
            <div className="absolute w-[30%] h-[8%] bg-[#333] rounded-full" style={{ top: "65%", left: "35%" }}></div>

            {/* Hair */}
            <div
              className="absolute w-[100%] h-[30%] bg-[#333] rounded-t-full"
              style={{ top: "-10%", left: "0" }}
            ></div>
          </motion.div>

          {/* Body */}
          <motion.div
            className="absolute w-[40%] h-[45%] bg-primary rounded-t-lg"
            style={{
              top: "45%",
              left: "30%",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          ></motion.div>

          {/* Arms */}
          <motion.div
            className="absolute w-[10%] h-[35%] bg-primary rounded-full"
            style={{ top: "45%", left: "20%" }}
            animate={{
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>

          <motion.div
            className="absolute w-[10%] h-[35%] bg-primary rounded-full"
            style={{ top: "45%", right: "20%" }}
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          ></motion.div>

          {/* Legs */}
          <motion.div
            className="absolute w-[15%] h-[30%] bg-[#222] rounded-full"
            style={{ top: "85%", left: "35%" }}
          ></motion.div>

          <motion.div
            className="absolute w-[15%] h-[30%] bg-[#222] rounded-full"
            style={{ top: "85%", right: "35%" }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
