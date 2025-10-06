"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ProfessionalLoaderProps {
  text?: string
  color?: string
  size?: "sm" | "md" | "lg"
  fullScreen?: boolean
}

export default function ProfessionalLoader({
  text = "Loading",
  color = "primary",
  size = "md",
  fullScreen = false,
}: ProfessionalLoaderProps) {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 1
        })
      }, 15)
      return () => clearInterval(interval)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-40 h-40",
  }

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    muted: "text-muted-foreground",
    white: "text-white",
  }

  const containerClasses = fullScreen
    ? "fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50"
    : "flex flex-col items-center justify-center"

  return (
    <div className={containerClasses}>
      <div className={`relative ${sizeClasses[size]}`}>
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeOpacity="0.1"
            className={colorClasses[color as keyof typeof colorClasses]}
          />

          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
            className={colorClasses[color as keyof typeof colorClasses]}
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Pulsing dot in the center */}
        <motion.div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${
            colorClasses[color as keyof typeof colorClasses]
          } bg-current`}
          initial={{ width: 8, height: 8, opacity: 0.5 }}
          animate={{
            width: [8, 16, 8],
            height: [8, 16, 8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Logo in the center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-primary">
          T
        </div>
      </div>

      {text && (
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className={`font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>
            {text}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              ...
            </motion.span>
          </p>
          <p className="text-sm text-muted-foreground mt-1">{progress}%</p>
        </motion.div>
      )}
    </div>
  )
}
