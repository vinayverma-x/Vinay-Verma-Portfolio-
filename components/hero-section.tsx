"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code,
  Shield,
  Cpu,
  Globe,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import ProfessionalCoderScene from "@/components/professional-coder-scene"
import { useTheme } from "next-themes"

// Animation variants
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

const skills = [
  "Full-Stack Development",
  "Cybersecurity Expert",
  "SEO Optimization",
  "UI/UX Design",
  "Mobile App Development",
  "AI Integration",
]

export default function HeroSection() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    setIsLoaded(true)

    const interval = setInterval(() => {
      setActiveSkillIndex((prevIndex) => (prevIndex + 1) % skills.length)
    }, 3000)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearInterval(interval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleScrollDown = () => {
    const whyChooseSection = document.getElementById("why-choose-me")
    if (whyChooseSection) {
      whyChooseSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Calculate the movement of the floating elements based on mouse position
  const calculateMovement = (factor = 1) => {
    if (typeof window === "undefined") return { x: 0, y: 0 }

    const x = ((mousePosition.x - window.innerWidth / 2) / window.innerWidth) * 20 * factor
    const y = ((mousePosition.y - window.innerHeight / 2) / window.innerHeight) * 20 * factor

    return { x, y }
  }

  // Core services with icons
  const coreServices = [
    { icon: <Code className="h-4 w-4" />, name: "Web Development" },
    { icon: <Shield className="h-4 w-4" />, name: "Cybersecurity" },
    { icon: <Cpu className="h-4 w-4" />, name: "AI Integration" },
    { icon: <Globe className="h-4 w-4" />, name: "SEO Optimization" },
  ]

  return (
    <section
      className={cn(
        "min-h-[95vh] flex flex-col justify-center relative overflow-hidden py-8 md:py-12 lg:py-16",
        isLoaded ? "opacity-100" : "opacity-0",
      )}
      ref={ref}
    >
      {/* Enhanced animated background elements */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient background */}
        <div
          className={cn(
            "absolute inset-0",
            isDark
              ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
              : "bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20",
          )}
        ></div>

        {/* Animated blobs */}
        <motion.div
          className="blob w-[400px] h-[400px] md:w-[500px] md:h-[500px] -left-[200px] md:-left-[250px] -top-[100px] opacity-20 md:opacity-30"
          style={{
            x: calculateMovement(-0.5).x,
            y: calculateMovement(-0.5).y,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="blob w-[500px] h-[500px] md:w-[600px] md:h-[600px] -right-[250px] md:-right-[300px] -bottom-[200px] opacity-15 md:opacity-20"
          style={{
            x: calculateMovement(0.5).x,
            y: calculateMovement(0.5).y,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Animated code particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute font-mono text-xs md:text-sm hidden sm:block",
              isDark ? "text-blue-400/10" : "text-purple-600/15",
            )}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.2,
            }}
            animate={{
              y: ["0%", "-30px", "0%"],
              opacity: [0.1 + Math.random() * 0.2, 0.2 + Math.random() * 0.2, 0.1 + Math.random() * 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              x: calculateMovement(0.2 * ((i % 3) - 1)).x + ((i % 3) - 1) * 10,
              y: calculateMovement(0.2 * ((i % 3) - 1)).y + ((i % 3) - 1) * 10,
            }}
          >
            {
              [
                "</>",
                "{}",
                "[]",
                "=>",
                "const",
                "async",
                "function",
                "import",
                "export",
                "return",
                "class",
                "interface",
              ][i % 12]
            }
          </motion.div>
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>

        {/* Futuristic circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="currentColor"
            strokeWidth="0.2"
            fill="none"
            className="text-blue-500"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,30 L100,30"
            stroke="currentColor"
            strokeWidth="0.1"
            fill="none"
            className="text-purple-500"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </motion.div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Professional badge */}
            <motion.div
              variants={fadeIn}
              className={cn(
                "inline-flex items-center justify-center lg:justify-start px-4 py-2 border rounded-full text-sm font-medium mb-6 backdrop-blur-sm mx-auto lg:mx-0 w-fit",
                isDark
                  ? "border-blue-400/30 bg-gradient-to-r from-blue-400/10 to-purple-400/10 text-blue-400 shadow-lg shadow-blue-400/10"
                  : "border-purple-500/40 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 shadow-md",
              )}
            >
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
              Self-Taught Developer & Ethical Hacker
            </motion.div>

            {/* Personal greeting */}
            <motion.h2
              variants={fadeIn}
              className={cn(
                "text-xl sm:text-2xl md:text-3xl font-medium mb-2",
                isDark ? "text-gray-200" : "text-gray-700",
              )}
            >
              Hey there! I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 font-bold">
                Vinay Verma
              </span>
            </motion.h2>

            {/* Main heading with enhanced styling */}
            <motion.h1
              variants={fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-tight"
            >
              <span
                className={cn(
                  "bg-clip-text text-transparent block",
                  isDark
                    ? "bg-gradient-to-r from-white via-gray-100 to-white"
                    : "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800",
                )}
              >
                Crafting Digital
              </span>{" "}
              <span className="bg-clip-text text-transparent animate-text-shimmer bg-[linear-gradient(to_right,#3B82F6,#8B5CF6,#06B6D4,#3B82F6)] bg-[length:200%_auto] block">
                Experiences
              </span>
            </motion.h1>

            {/* Animated skills with enhanced styling */}
            <motion.div variants={fadeIn} className="h-12 sm:h-14 md:h-16 overflow-hidden mb-6 flex justify-center lg:justify-start">
              <div className="relative transition-all duration-300 ease-in-out w-full flex justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 absolute transition-all duration-500 whitespace-nowrap ${
                      index === activeSkillIndex ? "opacity-100 transform-none" : "opacity-0 translate-y-8 scale-95"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Description with enhanced styling */}
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground mb-8 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              A passionate self-taught developer from Uttar Pradesh, India. After completing my 12th grade in 2022, I
              took a gap year to dive deep into the world of coding, cybersecurity, and digital innovation. Now I create
              modern, secure, and user-friendly digital solutions.
            </motion.p>

            {/* Core services */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-full border text-sm font-medium transition-all duration-300",
                    isDark
                      ? "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400"
                      : "bg-white/80 border-gray-200 text-gray-700 hover:border-purple-400/50 hover:bg-purple-50 hover:text-purple-700",
                  )}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span className="text-blue-500">{service.icon}</span>
                  {service.name}
                </motion.div>
              ))}
            </motion.div>

            {/* Action buttons with enhanced styling */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white px-8 py-4 font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 group"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  Explore My Work
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="group-hover:animate-pulse"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 transition-all duration-300 px-8 py-4 font-semibold text-base bg-transparent"
              >
                <Link href="/services" className="flex items-center gap-2">
                  My Services
                  <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            {/* Tech stack badges */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              <span className="text-muted-foreground text-sm font-medium mr-2">Tech Stack:</span>
              {["React", "Next.js", "Node.js", "TypeScript", "Python", "MongoDB"].map((tech) => (
                <motion.span
                  key={tech}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 cursor-default",
                    isDark
                      ? "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400"
                      : "bg-white/80 border-gray-200 text-gray-700 hover:border-purple-400/50 hover:bg-purple-50 hover:text-purple-700",
                  )}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Social links with enhanced styling */}
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <span className="text-muted-foreground font-medium text-sm">Connect with me:</span>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
                  { icon: Instagram, href: siteConfig.links.instagram, label: "Instagram" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 border-2 group",
                      isDark
                        ? "bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 text-gray-300 hover:text-white border-gray-700/50 hover:border-blue-400/50"
                        : "bg-white/80 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 text-gray-700 hover:text-blue-600 border-gray-200 hover:border-blue-400/50",
                    )}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span className="sr-only">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3D animation for desktop - only visible on larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0"
            style={{
              x: calculateMovement(-0.3).x,
              y: calculateMovement(-0.3).y,
            }}
          >
            <div className="relative w-full max-w-[450px] xl:max-w-[500px]">
              {/* Futuristic frame */}
              <div
                className={cn(
                  "absolute inset-0 border-2 rounded-2xl overflow-hidden",
                  isDark ? "border-blue-400/20" : "border-purple-400/30",
                )}
              >
                <div
                  className={cn("absolute top-0 left-0 w-20 h-1", isDark ? "bg-blue-400/40" : "bg-purple-400/50")}
                ></div>
                <div
                  className={cn("absolute top-0 right-0 w-1 h-20", isDark ? "bg-blue-400/40" : "bg-purple-400/50")}
                ></div>
                <div
                  className={cn("absolute bottom-0 right-0 w-20 h-1", isDark ? "bg-blue-400/40" : "bg-purple-400/50")}
                ></div>
                <div
                  className={cn("absolute bottom-0 left-0 w-1 h-20", isDark ? "bg-blue-400/40" : "bg-purple-400/50")}
                ></div>

                {/* Corner dots */}
                {["top-0 left-0", "top-0 right-0", "bottom-0 right-0", "bottom-0 left-0"].map((position, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute w-3 h-3 rounded-full",
                      position,
                      isDark ? "bg-blue-400/60" : "bg-purple-400/70",
                    )}
                  ></div>
                ))}
              </div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0, -3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="relative z-10"
              >
                <ProfessionalCoderScene size={450} />
              </motion.div>

              {/* Enhanced glow effect behind the animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-blue-500/10 rounded-full filter blur-3xl transform scale-90 -z-10"></div>

              {/* Animated rings around the 3D element */}
              <motion.div
                className="absolute inset-0 border border-blue-400/10 rounded-full -z-10"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute inset-0 border border-purple-400/5 rounded-full -z-10"
                animate={{ scale: [1.1, 1.2, 1.1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile 3D animation - positioned separately for better display */}
      <div className="lg:hidden w-full mt-8 mb-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] h-[280px] sm:h-[320px]"
        >
          {/* Futuristic frame for mobile */}
          <div
            className={cn(
              "absolute inset-0 border-2 rounded-xl overflow-hidden",
              isDark ? "border-blue-400/20" : "border-purple-400/30",
            )}
          >
            <div className={cn("absolute top-0 left-0 w-12 h-1", isDark ? "bg-blue-400/40" : "bg-purple-400/50")}></div>
            <div
              className={cn("absolute top-0 right-0 w-1 h-12", isDark ? "bg-blue-400/40" : "bg-purple-400/50")}
            ></div>
            <div
              className={cn("absolute bottom-0 right-0 w-12 h-1", isDark ? "bg-blue-400/40" : "bg-purple-400/50")}
            ></div>
            <div
              className={cn("absolute bottom-0 left-0 w-1 h-12", isDark ? "bg-blue-400/40" : "bg-purple-400/50")}
            ></div>

            {/* Corner dots for mobile */}
            {["top-0 left-0", "top-0 right-0", "bottom-0 right-0", "bottom-0 left-0"].map((position, index) => (
              <div
                key={index}
                className={cn(
                  "absolute w-2 h-2 rounded-full",
                  position,
                  isDark ? "bg-blue-400/60" : "bg-purple-400/70",
                )}
              ></div>
            ))}
          </div>

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="relative z-10"
          >
            <ProfessionalCoderScene size={280} />
          </motion.div>

          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-blue-500/10 rounded-full filter blur-3xl transform scale-90 -z-10"></div>

          {/* Animated rings */}
          <motion.div
            className="absolute inset-0 border border-blue-400/10 rounded-full -z-10"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      >
        <button
          onClick={handleScrollDown}
          className="text-muted-foreground hover:text-blue-500 transition-colors flex flex-col items-center group"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2 group-hover:translate-y-1 transition-transform font-medium">Discover More</span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="p-2 rounded-full border border-blue-400/20 group-hover:border-blue-400/40 transition-colors"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
