"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Project } from "@/utils/projects-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface EnhancedProjectCardProps {
  project: Project
}

export default function EnhancedProjectCard({ project }: EnhancedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { y: -10, transition: { duration: 0.2 } },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-black/50 backdrop-blur-md text-white">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="secondary" className="bg-black/50 backdrop-blur-md text-white">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
          {project.featured && (
            <div className="absolute top-0 right-0">
              <Badge className="m-2 bg-primary text-white">Featured</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-6 flex flex-col h-[calc(100%-56.25%)]">
          <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.external ? (
              <Button asChild variant="outline" size="sm" className="gap-1">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> View
                </a>
              </Button>
            ) : (
              <Button asChild variant="outline" size="sm" className="gap-1">
                <Link href={project.link}>
                  <ArrowRight size={16} /> Details
                </Link>
              </Button>
            )}

            {project.github && (
              <Button asChild variant="outline" size="sm" className="gap-1">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> Code
                </a>
              </Button>
            )}

            {project.price > 0 && (
              <div className="ml-auto flex items-center">
                {project.discountedPrice ? (
                  <div className="text-right">
                    <span className="text-sm line-through text-muted-foreground">
                      ₹{project.price.toLocaleString()}
                    </span>
                    <span className="ml-1 font-bold text-primary">₹{project.discountedPrice.toLocaleString()}</span>
                  </div>
                ) : (
                  <span className="font-bold">₹{project.price.toLocaleString()}</span>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
