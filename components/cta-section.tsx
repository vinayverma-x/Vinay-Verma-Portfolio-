"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const FadeInWhenVisible = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function CTASection({
  title = "Let's Work Together",
  description = "Have a project in mind? Let's discuss how I can help you achieve your goals with innovative digital solutions.",
  buttonText = "Contact Me",
  buttonLink = "/contact",
}) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob w-[500px] h-[500px] left-[10%] top-[20%] opacity-10 dark:opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
      </div>

      <div className="container relative z-10">
        <FadeInWhenVisible>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#B87333]/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div
              className={cn(
                "max-w-3xl mx-auto text-center space-y-6 p-8 rounded-xl border shadow-lg relative overflow-hidden",
                isDark
                  ? "bg-gray-900/50 backdrop-blur-md border-[#D4AF37]/10 dark:border-[#D4AF37]/5"
                  : "bg-white/90 backdrop-blur-md border-[#D4AF37]/10",
              )}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37]/80 via-[#B87333] to-[#D4AF37]/80"></div>

              <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#B87333]">
                {title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B87333] mx-auto"></div>
              <p className="text-muted-foreground">{description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#D4AF37] to-[#B87333] hover:from-[#B87333] hover:to-[#D4AF37] transition-all duration-300 rounded-full shadow-md hover:shadow-lg"
                >
                  <Link href={buttonLink} className="flex items-center gap-2 px-6">
                    <span>{buttonText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 rounded-full"
                >
                  <a
                    href="https://wa.me/919219967205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6"
                  >
                    <span>WhatsApp Me</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
