"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { useTheme } from "next-themes"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90 dark:from-background/80 dark:via-background dark:to-background/90"></div>
        <div className="blob w-[600px] h-[600px] -right-[300px] top-[10%] opacity-10 dark:opacity-5"></div>
        <div className="blob w-[500px] h-[500px] -left-[250px] bottom-[10%] opacity-10 dark:opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeIn} className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Client Testimonials</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B87333] mx-auto"></div>
            <p className="text-muted-foreground text-lg">
              Hear what clients from around the world have to say about my services and solutions
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <TestimonialCarousel className="max-w-4xl mx-auto" />
          </motion.div>

          <motion.div variants={fadeIn} className="text-center mt-8">
            <p className="text-muted-foreground">
              Trusted by clients from <span className="text-primary font-medium">15+ countries</span> worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
