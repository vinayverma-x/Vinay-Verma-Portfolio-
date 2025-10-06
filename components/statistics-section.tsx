"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Shield, Search, Smartphone, Users, Award, Clock, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface StatisticsProps {
  className?: string
}

export function StatisticsSection({ className = "" }: StatisticsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const stats = [
    {
      icon: <Code className="h-6 w-6 text-[#D4AF37]" />,
      value: 20,
      label: "Projects Completed",
      suffix: "+",
      delay: 0,
    },
    {
      icon: <Users className="h-6 w-6 text-[#D4AF37]" />,
      value: 30,
      label: "Satisfied Clients",
      suffix: "+",
      delay: 0.1,
    },
    {
      icon: <Shield className="h-6 w-6 text-[#D4AF37]" />,
      value: 98,
      label: "Success Rate",
      suffix: "%",
      delay: 0.2,
    },
    {
      icon: <Award className="h-6 w-6 text-[#D4AF37]" />,
      value: 5,
      label: "Countries Served",
      suffix: "+",
      delay: 0.3,
    },
    {
      icon: <Clock className="h-6 w-6 text-[#D4AF37]" />,
      value: 2,
      label: "Years Experience",
      suffix: "",
      delay: 0.4,
    },
    {
      icon: <Search className="h-6 w-6 text-[#D4AF37]" />,
      value: 20,
      label: "SEO Campaigns",
      suffix: "+",
      delay: 0.5,
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#D4AF37]" />,
      value: 15,
      label: "Mobile Apps",
      suffix: "+",
      delay: 0.6,
    },
    {
      icon: <Coffee className="h-6 w-6 text-[#D4AF37]" />,
      value: 1000,
      label: "Cups of Coffee",
      suffix: "+",
      delay: 0.7,
    },
  ]

  return (
    <div className={`${className}`} ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={cn(
              "rounded-lg p-4 text-center transition-all duration-300 border shadow-md",
              isDark
                ? "bg-background/50 backdrop-blur-sm border-[#D4AF37]/10 dark:border-[#D4AF37]/5 hover:border-[#D4AF37]/20"
                : "bg-white/90 backdrop-blur-sm border-[#D4AF37]/10 hover:border-[#D4AF37]/20",
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: stat.delay }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              borderColor: "rgba(212, 175, 55, 0.3)",
            }}
          >
            <div className="mx-auto w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
              {stat.icon}
            </div>
            <div className="flex items-center justify-center">
              <CounterComponent from={0} to={stat.value} duration={2} delay={stat.delay + 0.3} isInView={isInView} />
              <span className="text-3xl font-bold text-[#D4AF37]">{stat.suffix}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Counter component for animated counting
interface CounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  isInView: boolean
}

function CounterComponent({ from, to, duration = 2, delay = 0, isInView }: CounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime + delay * 1000

      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(startAnimation)
        return
      }

      const progress = Math.min(elapsed / (duration * 1000), 1)
      const currentCount = Math.floor(from + progress * (to - from))
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(startAnimation)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [from, to, duration, delay, isInView])

  return <span className="text-3xl font-bold">{count}</span>
}
