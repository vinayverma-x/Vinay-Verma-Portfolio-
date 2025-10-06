"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface TechStackShowcaseProps {
  className?: string
}

interface TechItem {
  name: string
  icon: string
  color: string
  category: string
  level: number
}

export default function TechStackShowcase({ className = "" }: TechStackShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const techStack: TechItem[] = [
    // Frontend
    { name: "React", icon: "⚛️", color: "#61DAFB", category: "frontend", level: 95 },
    { name: "Next.js", icon: "▲", color: "#000000", category: "frontend", level: 90 },
    { name: "TypeScript", icon: "TS", color: "#3178C6", category: "frontend", level: 85 },
    { name: "Tailwind CSS", icon: "🌊", color: "#06B6D4", category: "frontend", level: 95 },
    { name: "Framer Motion", icon: "🔄", color: "#0055FF", category: "frontend", level: 80 },

    // Backend
    { name: "Node.js", icon: "🟢", color: "#339933", category: "backend", level: 90 },
    { name: "Express", icon: "🚂", color: "#000000", category: "backend", level: 85 },
    { name: "MongoDB", icon: "🍃", color: "#47A248", category: "backend", level: 80 },
    { name: "PostgreSQL", icon: "🐘", color: "#336791", category: "backend", level: 75 },
    { name: "Firebase", icon: "🔥", color: "#FFCA28", category: "backend", level: 85 },

    // DevOps
    { name: "Docker", icon: "🐳", color: "#2496ED", category: "devops", level: 70 },
    { name: "Git", icon: "📝", color: "#F05032", category: "devops", level: 90 },
    { name: "CI/CD", icon: "🔄", color: "#4285F4", category: "devops", level: 75 },
    { name: "AWS", icon: "☁️", color: "#FF9900", category: "devops", level: 65 },
    { name: "Vercel", icon: "▲", color: "#000000", category: "devops", level: 85 },

    // Security
    { name: "Penetration Testing", icon: "🔒", color: "#FF5722", category: "security", level: 90 },
    { name: "Ethical Hacking", icon: "🛡️", color: "#4CAF50", category: "security", level: 85 },
    { name: "Network Security", icon: "🌐", color: "#2196F3", category: "security", level: 80 },
    { name: "Web Security", icon: "🔐", color: "#9C27B0", category: "security", level: 95 },
    { name: "Security Auditing", icon: "📋", color: "#607D8B", category: "security", level: 85 },
  ]

  const filteredTech =
    activeCategory === "all" ? techStack : techStack.filter((tech) => tech.category === activeCategory)

  const categories = [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "devops", name: "DevOps" },
    { id: "security", name: "Security" },
  ]

  return (
    <div className={`${className}`} ref={ref}>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.id
                ? "bg-primary text-white shadow-md"
                : "bg-primary/10 text-primary hover:bg-primary/20"
            }`}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        {filteredTech.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative overflow-hidden rounded-lg border border-primary/10 bg-background/80 backdrop-blur-sm p-4 hover:shadow-md transition-all"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: `0 0 15px ${tech.color}40`,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
                style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
              >
                {tech.icon}
              </div>
              <div>
                <h3 className="font-semibold">{tech.name}</h3>
                <p className="text-xs text-muted-foreground capitalize">{tech.category}</p>
              </div>
            </div>

            <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: tech.color }}
                initial={{ width: 0 }}
                animate={{ width: `${tech.level}%` }}
                transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
              />
            </div>
            <div className="mt-1 text-right text-xs text-muted-foreground">Proficiency: {tech.level}%</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
