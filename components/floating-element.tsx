"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  duration?: number
  distance?: number
}

export default function FloatingElement({
  children,
  className,
  style,
  delay = 0,
  duration = 3,
  distance = 10,
}: FloatingElementProps) {
  return (
    <motion.div
      className={cn("", className)}
      style={style}
      animate={{
        y: [0, -distance, 0],
        x: [0, distance / 3, 0],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}
