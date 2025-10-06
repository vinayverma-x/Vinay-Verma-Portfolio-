"use client"

import { useEffect, useState } from "react"

// Array of professional project image categories
const imageCategories = [
  "tech",
  "website",
  "app",
  "dashboard",
  "analytics",
  "ecommerce",
  "portfolio",
  "business",
  "startup",
  "mobile",
]

// Array of color schemes
const colorSchemes = ["blue", "purple", "cyan", "indigo", "teal", "green", "emerald", "orange", "amber", "rose"]

// Function to generate a random project image URL
export function getRandomProjectImage(width: number, height: number, seed?: string): string {
  const category = imageCategories[Math.floor(Math.random() * imageCategories.length)]
  const color = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  const uniqueSeed = seed || Math.floor(Math.random() * 1000).toString()

  return `/placeholder.svg?height=${height}&width=${width}&text=${category}+${color}+${uniqueSeed}`
}

// Hook to get a random project image
export function useRandomProjectImage(width: number, height: number, seed?: string) {
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    setImageUrl(getRandomProjectImage(width, height, seed))
  }, [width, height, seed])

  return imageUrl
}
