"use client"

import { useEffect, useState } from "react"

interface LoadingAnimationProps {
  type?: "dots" | "spinner" | "pulse"
  color?: string
  size?: "sm" | "md" | "lg"
}

export default function LoadingAnimation({ type = "dots", color = "primary", size = "md" }: LoadingAnimationProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    muted: "text-muted-foreground",
    white: "text-white",
  }

  if (type === "spinner") {
    return (
      <div className="flex items-center justify-center">
        <div
          className={`animate-spin rounded-full border-t-2 border-b-2 ${colorClasses[color as keyof typeof colorClasses]} ${sizeClasses[size]}`}
        ></div>
      </div>
    )
  }

  if (type === "pulse") {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div
          className={`animate-pulse rounded-full ${colorClasses[color as keyof typeof colorClasses]} ${size === "sm" ? "h-2 w-2" : size === "md" ? "h-3 w-3" : "h-4 w-4"}`}
        ></div>
        <div
          className={`animate-pulse rounded-full ${colorClasses[color as keyof typeof colorClasses]} ${size === "sm" ? "h-2 w-2" : size === "md" ? "h-3 w-3" : "h-4 w-4"} animation-delay-200`}
        ></div>
        <div
          className={`animate-pulse rounded-full ${colorClasses[color as keyof typeof colorClasses]} ${size === "sm" ? "h-2 w-2" : size === "md" ? "h-3 w-3" : "h-4 w-4"} animation-delay-500`}
        ></div>
      </div>
    )
  }

  // Default dots animation
  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        className={`animate-bounce rounded-full bg-current ${colorClasses[color as keyof typeof colorClasses]} ${size === "sm" ? "h-1 w-1" : size === "md" ? "h-2 w-2" : "h-3 w-3"}`}
      ></div>
      <div
        className={`animate-bounce rounded-full bg-current ${colorClasses[color as keyof typeof colorClasses]} ${size === "sm" ? "h-1 w-1" : size === "md" ? "h-2 w-2" : "h-3 w-3"} animation-delay-200`}
      ></div>
      <div
        className={`animate-bounce rounded-full bg-current ${colorClasses[color as keyof typeof colorClasses]} ${size === "sm" ? "h-1 w-1" : size === "md" ? "h-2 w-2" : "h-3 w-3"} animation-delay-500`}
      ></div>
    </div>
  )
}
