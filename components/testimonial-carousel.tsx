"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
  country: string
  flag: string
}

interface TestimonialCarouselProps {
  className?: string
}

export default function TestimonialCarousel({ className = "" }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "CTO",
      company: "TechVision India",
      content:
        "Vinay's expertise in cybersecurity transformed our digital infrastructure. His thorough security audit identified critical vulnerabilities that our internal team had missed. The implementation of his recommendations has significantly enhanced our security posture. His professionalism and technical knowledge are truly exceptional.",
      avatar: "/rajesh.jpg",
      country: "India",
      flag: "🇮🇳",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Digital Solutions",
      content:
        "Working with Vinay on our SEO optimization was a game-changer. His strategic approach and technical expertise resulted in a 65% increase in organic traffic within just three months. He took the time to understand our business goals and tailored his solutions accordingly. I highly recommend his services to any business looking to improve their online presence.",
      avatar: "/sarah.jpg",
      country: "United States",
      flag: "🇺🇸",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Founder",
      company: "Innovate Designs",
      content:
        "Vinay developed our e-commerce platform with exceptional attention to detail. The website is not only visually stunning but also performs flawlessly. The integration of payment gateways and inventory management systems was seamless. His post-launch support has been outstanding, addressing any issues promptly. Our online sales have increased by 120% since the launch.",
      avatar: "/Priyapatel.jpg",
      country: "India",
      flag: "🇮🇳",
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "CEO",
      company: "TechGrowth Solutions",
      content:
        "The mobile app developed by Vinay has been transformative for our business. His understanding of user experience and technical capabilities resulted in an app that our customers love. The app's performance metrics are impressive, with minimal crashes and excellent load times. Vinay's communication throughout the project was clear and consistent.",
      avatar: "/Michael.jpg",
      country: "Singapore",
      flag: "🇸🇬",
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "Director",
      company: "Creative Digital",
      content:
        "We hired Vinay for a complete website redesign and couldn't be happier with the results. His approach to UI/UX design is both creative and practical. The website is not only beautiful but also highly functional and user-friendly. The analytics dashboard he implemented gives us valuable insights into user behavior. Working with him was a pleasure from start to finish.",
      avatar: "/Emma.jpg",
      country: "United Kingdom",
      flag: "🇬🇧",
    },
    {
      id: 6,
      name: "Vikram Malhotra",
      role: "IT Director",
      company: "Global Finance Ltd",
      content:
        "Vinay's database optimization services significantly improved our system's performance. Query times were reduced by 80%, and our application now handles peak loads without any issues. His methodical approach to identifying bottlenecks and implementing solutions was impressive. He also provided comprehensive documentation and training for our team.",
      avatar: "/vikram.jpg",
      country: "India",
      flag: "🇮🇳",
    },
    
  ]

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [])

  // Reset autoplay on manual navigation
  const handleManualNavigation = (callback: () => void) => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    callback()

    autoplayRef.current = setInterval(() => {
      nextTestimonial()
    }, 8000)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute -top-10 -left-10 text-[#D4AF37]/20 z-0">
        <Quote size={80} />
      </div>

      <div
        className={cn(
          "relative z-10 overflow-hidden rounded-xl border p-6 md:p-10 shadow-md",
          isDark
            ? "bg-gray-900/50 backdrop-blur-sm border-[#D4AF37]/10 dark:border-[#D4AF37]/5"
            : "bg-white/90 backdrop-blur-sm border-[#D4AF37]/10",
        )}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="md:w-1/4 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#D4AF37]/20 mb-4 bg-primary/5 relative">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-md">
                  <span className="text-sm">{testimonials[currentIndex].flag}</span>
                </div>
              </div>
              <h3 className="font-semibold text-center">{testimonials[currentIndex].name}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{testimonials[currentIndex].country}</p>
            </div>

            <div className="md:w-3/4">
              <p className="text-muted-foreground italic leading-relaxed">"{testimonials[currentIndex].content}"</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "rounded-full border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10",
              isDark ? "bg-background/50" : "bg-white/80",
            )}
            onClick={() => handleManualNavigation(prevTestimonial)}
          >
            <ChevronLeft className="h-5 w-5 text-[#D4AF37]" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#D4AF37] w-6" : "bg-[#D4AF37]/30"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  handleManualNavigation(() => setCurrentIndex(index))
                }}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className={cn(
              "rounded-full border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10",
              isDark ? "bg-background/50" : "bg-white/80",
            )}
            onClick={() => handleManualNavigation(nextTestimonial)}
          >
            <ChevronRight className="h-5 w-5 text-[#D4AF37]" />
          </Button>
        </div>
      </div>
    </div>
  )
}
