"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Code, Layers, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Project } from "@/utils/projects-data"

interface ProjectCardProps {
  project: Project
  index?: number
  className?: string
  variant?: "default" | "featured" | "minimal" | "list"
}

export default function ProjectCard({ project, index = 0, className = "", variant = "default" }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Different layouts based on variant
  if (variant === "featured") {
    return (
      <motion.div
        className={cn(
          "group relative overflow-hidden rounded-xl border transition-all duration-500",
          "border-primary/10 bg-card/80 backdrop-blur-sm",
          "dark:border-gray-800/50 dark:bg-gray-900/70 dark:backdrop-blur-xl dark:shadow-lg dark:shadow-black/20",
          isHovered && "dark:border-primary/40 dark:shadow-xl dark:shadow-primary/10",
          className,
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15), 0 0 25px rgba(212, 175, 55, 0.4)",
          y: -8,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-0" />
            <Image
              src={
                project.imageUrl || `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(project.title)}`
              }
              alt={project.title}
              width={600}
              height={800}
              className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
          </div>

          <div className="md:w-1/2 p-6 flex flex-col">
            <div className="mb-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="mr-2 mb-2 bg-primary/5 border-primary/20 text-primary dark:bg-primary/10 dark:border-primary/30"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge
                  variant="outline"
                  className="mb-2 bg-primary/5 border-primary/20 text-primary dark:bg-primary/10 dark:border-primary/30"
                >
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 dark:text-white dark:group-hover:text-blue-400">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 dark:text-gray-300">{project.description}</p>
            <p className="text-sm text-muted-foreground mb-6 flex-grow dark:text-gray-400">{project.longDescription}</p>

            <Button
              asChild
              variant="default"
              className={cn(
                "group mt-auto w-full md:w-auto rounded-full bg-primary hover:bg-primary/90 transition-all duration-300",
                "dark:bg-gradient-to-r dark:from-blue-600 dark:to-primary dark:hover:from-blue-700 dark:hover:to-primary/90 dark:shadow-lg dark:shadow-primary/20",
              )}
            >
              <Link
                href={project.link}
                target={project.external ? "_blank" : "_self"}
                rel={project.external ? "noopener noreferrer" : ""}
              >
                {project.external ? (
                  <>
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                ) : (
                  <>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === "minimal") {
    return (
      <motion.div
        className={cn(
          "group relative overflow-hidden rounded-xl border p-4 transition-all duration-300",
          "border-primary/10 bg-card/80 backdrop-blur-sm",
          "dark:border-gray-800/50 dark:bg-gray-900/70 dark:backdrop-blur-xl dark:shadow-lg dark:shadow-black/20",
          className,
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(212, 175, 55, 0.2)",
          borderColor: "rgba(212, 175, 55, 0.3)",
        }}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
            <Code className="h-5 w-5 text-primary dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold group-hover:text-primary transition-colors duration-300 dark:text-white dark:group-hover:text-blue-400">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground dark:text-gray-400">{project.description}</p>
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <div className="flex gap-2">
            {project.technologies.slice(0, 2).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs bg-primary/5 border-primary/20 text-primary dark:bg-primary/10 dark:border-primary/30 dark:text-blue-300"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto dark:text-blue-400 dark:hover:text-blue-300"
          >
            <Link
              href={project.link}
              target={project.external ? "_blank" : "_self"}
              rel={project.external ? "noopener noreferrer" : ""}
            >
              {project.external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </Link>
          </Button>
        </div>
      </motion.div>
    )
  }

  if (variant === "list") {
    return (
      <motion.div
        className={cn(
          "group relative overflow-hidden rounded-xl border transition-all duration-300",
          "border-primary/10 bg-card/80 backdrop-blur-sm",
          "dark:border-gray-800/50 dark:bg-gray-900/70 dark:backdrop-blur-xl dark:shadow-lg dark:shadow-black/20",
          isHovered && "dark:border-primary/40 dark:shadow-xl dark:shadow-primary/10",
          className,
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(212, 175, 55, 0.2)",
          y: -3,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-0" />
            <Image
              src={
                project.imageUrl || `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(project.title)}`
              }
              alt={project.title}
              width={300}
              height={200}
              className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />

            {project.featured && (
              <div className="absolute top-2 left-2 z-20">
                <Badge className="bg-amber-500/90 hover:bg-amber-500 text-white flex items-center gap-1">
                  <Star className="h-3 w-3" /> Featured
                </Badge>
              </div>
            )}
          </div>

          <div className="p-6 md:w-3/4 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-primary/5 border-primary/20 text-primary dark:bg-primary/10 dark:border-primary/30"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge
                  variant="outline"
                  className="bg-primary/5 border-primary/20 text-primary dark:bg-primary/10 dark:border-primary/30"
                >
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 dark:text-white dark:group-hover:text-blue-400">
              {project.title}
            </h3>

            <p className="text-muted-foreground mb-4 dark:text-gray-300">{project.description}</p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 dark:text-gray-400 mt-auto">
              <div className="flex items-center gap-1">
                <Layers className="h-4 w-4 text-primary dark:text-blue-400" />
                <span>{project.technologies.length} Technologies</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-primary dark:text-blue-400" />
                <span>{project.completionDate || "2023"}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                asChild
                variant="default"
                size="sm"
                className="rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-sm group"
              >
                <Link
                  href={project.link}
                  target={project.external ? "_blank" : "_self"}
                  rel={project.external ? "noopener noreferrer" : ""}
                >
                  {project.external ? (
                    <>
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  ) : (
                    <>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Link>
              </Button>

              {project.github && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                >
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    View Source
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Default variant with enhanced design
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl border transition-all duration-300 h-full flex flex-col",
        "border-luxury-gold/10 bg-white/90 backdrop-blur-sm",
        "dark:border-luxury-gold/5 dark:bg-gray-900/70 dark:backdrop-blur-xl dark:shadow-lg dark:shadow-black/20",
        isHovered && "dark:border-luxury-gold/20 dark:shadow-xl dark:shadow-luxury-gold/5",
        className,
        "hover:shadow-lg dark:hover:shadow-luxury-gold/5",
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(212, 175, 55, 0.3)",
        y: -5,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced hover effect with gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-luxury-gold/0 via-luxury-gold/30 to-luxury-gold/0 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 z-0"></div>

      <div className="relative h-56 overflow-hidden group image-hover-effect">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-0" />
        <Image
          src={project.imageUrl || `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(project.title)}`}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
        <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-background/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        {/* Enhanced badges with better positioning */}
        <div className="absolute top-4 left-4 flex gap-2 z-20">
          {project.technologies.slice(0, 2).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-background/80 backdrop-blur-sm border-primary/20 text-primary dark:bg-gray-900/80 dark:border-primary/30 dark:text-blue-300"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 2 && (
            <Badge
              variant="outline"
              className="bg-background/80 backdrop-blur-sm border-primary/20 text-primary dark:bg-gray-900/80 dark:border-primary/30 dark:text-blue-300"
            >
              +{project.technologies.length - 2}
            </Badge>
          )}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <Badge className="bg-amber-500/90 hover:bg-amber-500 text-white flex items-center gap-1">
              <Star className="h-3 w-3" /> Featured
            </Badge>
          </div>
        )}

        {/* Hover overlay with action button */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <Link
              href={project.link}
              target={project.external ? "_blank" : "_self"}
              rel={project.external ? "noopener noreferrer" : ""}
            >
              {project.external ? "Visit Website" : "View Details"}
            </Link>
          </Button>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-10">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 dark:text-white dark:group-hover:text-blue-400">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 dark:text-gray-300">{project.description}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Layers className="h-4 w-4 text-primary dark:text-blue-400" />
            <span>{project.technologies.length} Technologies</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-primary dark:text-blue-400" />
            <span>{project.completionDate || "2023"}</span>
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          className={cn(
            "group mt-auto rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300",
            "dark:border-primary/30 dark:hover:border-primary/60 dark:hover:bg-primary/10",
          )}
        >
          <Link
            href={project.link}
            target={project.external ? "_blank" : "_self"}
            rel={project.external ? "noopener noreferrer" : ""}
          >
            {project.external ? (
              <>
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            ) : (
              <>
                View Details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
