"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description: string
  className?: string
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 dark:from-background dark:via-primary/5 dark:to-background",
        className,
      )}
    >
      <div className="container py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.h1
            className="text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  )
}
