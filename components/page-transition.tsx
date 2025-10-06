"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isMounted = true

    // Show loading animation when route changes
    setIsLoading(true)

    // Hide loading animation after a short delay
    const timer = setTimeout(() => {
      if (isMounted) {
        setIsLoading(false)
      }
    }, 300)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [pathname])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-50">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-muted-foreground text-sm font-medium">Loading...</p>
      </div>
    )
  }

  return <>{children}</>
}
