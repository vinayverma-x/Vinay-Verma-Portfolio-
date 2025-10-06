"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Caught error:", error)
      setHasError(true)

      // Prevent the error from bubbling up
      error.preventDefault()
      return true
    }

    // Add global error handler
    window.addEventListener("error", errorHandler)

    // Clean up
    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md p-8 bg-card rounded-lg shadow-lg border border-primary/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-muted-foreground mb-6">
            We're sorry, but there was an error loading this page. Please try refreshing the page.
          </p>
          <Button
            onClick={() => {
              setHasError(false)
              window.location.reload()
            }}
            className="rounded-full"
          >
            Refresh Page
          </Button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
