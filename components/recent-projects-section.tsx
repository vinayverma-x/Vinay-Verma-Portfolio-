"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

// Recent project data
const recentProjects = [
  {
    id: 1,
    title: "Help2trade",
    description: "Decentralized poll & AI trading bot platform built on Tron blockchain with transparent pool-based earning system.",
    image: "/new.webp",
    slug: "help2trade",
    technologies: ["Blockchain", "Tron", "AI Trading", "Web3"],
    liveUrl: "http://Help2trade.org",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: 2,
    title: "Barton G",
    description: "Premium restaurant and event venue with elegant dining experiences and sophisticated event planning services.",
    image: "/Barton.png",
    slug: "barton-g",
    technologies: ["Web Design", "Restaurant", "Events", "Hospitality"],
    liveUrl: "http://bartong.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: 3,
    title: "Hello Monday",
    description: "Digital product design agency creating magical brand experiences and innovative digital solutions for global clients.",
    image: "/hellomonday.jpg",
    slug: "hello-monday",
    technologies: ["Branding", "UX/UI", "Digital Design", "Creative"],
    liveUrl: "http://Hellomonday.com",
    githubUrl: "https://github.com/example/project",
  },
]

export function RecentProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#B87333] dark:from-[#D4AF37] dark:to-[#B87333]">
            Recent Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of my latest work showcasing my expertise in web development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/20 dark:text-[#D4AF37]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-[#D4AF37] dark:text-[#D4AF37] hover:text-[#B87333] dark:hover:text-[#B87333] font-medium"
                >
                  View Details
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#B87333] text-white font-medium transition-colors"
          >
            View All Projects
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
