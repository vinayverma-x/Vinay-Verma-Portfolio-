"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ArrowRight, Code, Shield, Globe, Zap, Star, Sparkles } from "lucide-react"
import PageHeader from "@/components/page-header"
import ProjectCard from "@/components/project-card"
import { projects } from "@/utils/projects-data"

export default function ProjectsPageClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTech, setSelectedTech] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeView, setActiveView] = useState("grid")
  const [displayedProjectsCount, setDisplayedProjectsCount] = useState(6)

  // Extract unique categories and technologies
  const categories = ["all", ...new Set(projects.map((project) => project.category))]
  const technologies = ["all", ...new Set(projects.flatMap((project) => project.technologies))].sort()

  // Filter projects based on search term, category, and technology
  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

      const matchesTech = selectedTech === "all" || project.technologies.includes(selectedTech)

      return matchesSearch && matchesCategory && matchesTech
    })

    setFilteredProjects(filtered)
    // Reset displayed count when filters change
    setDisplayedProjectsCount(6)

    // Simulate loading for smoother animations
    if (!isLoaded) {
      setTimeout(() => {
        setIsLoaded(true)
      }, 500)
    }
  }, [searchTerm, selectedCategory, selectedTech, isLoaded])

  // Featured projects
  const featuredProjects = projects.filter((project) => project.featured)

  // Handle load more functionality
  const handleLoadMore = () => {
    setDisplayedProjectsCount(prev => prev + 6)
  }

  // Get projects to display
  const displayedProjects = filteredProjects.slice(0, displayedProjectsCount)
  const hasMoreProjects = displayedProjectsCount < filteredProjects.length

  // Refs for scroll animations
  const featuredRef = useRef(null)
  const categoriesRef = useRef(null)
  const projectsRef = useRef(null)

  const featuredInView = useInView(featuredRef, { once: true, margin: "-100px" })
  const categoriesInView = useInView(categoriesRef, { once: true, margin: "-100px" })
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Page Header with Particles */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent"></div>
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out ${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <PageHeader
          title="My Creative Portfolio"
          description="Explore my showcase of innovative projects spanning web development, cybersecurity, and digital solutions"
        />
      </div>

      {/* Featured Projects Section with Enhanced Design */}
      <section ref={featuredRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-[600px] h-[600px] -left-[300px] top-[20%] opacity-10 dark:opacity-5 animate-blob"></div>
          <div className="blob w-[500px] h-[500px] -right-[250px] bottom-[10%] opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Star className="h-5 w-5 text-amber-500" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Highlighted work that showcases my best skills and expertise in creating innovative digital solutions
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={featuredInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 group"
              >
                <Link href="/projects/projecthub" className="flex items-center gap-2">
                  <span>View All Projects</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 mt-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                  <div className="relative flex flex-col md:flex-row overflow-hidden rounded-xl border border-primary/10 dark:border-primary/20 bg-card/80 dark:bg-gray-900/70 backdrop-blur-sm">
                    <div className="md:w-1/2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-0"></div>
                      <Image
                        src={
                          project.imageUrl ||
                          `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(project.title)}`
                        }
                        alt={project.title}
                        width={600}
                        height={800}
                        className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                    </div>

                    <div className="md:w-1/2 p-8 flex flex-col">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-primary/5 border-primary/20 text-primary dark:bg-primary/10 dark:border-primary/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="bg-primary/5 border-primary/20 text-primary dark:bg-primary/10 dark:border-primary/30"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 dark:text-white dark:group-hover:text-blue-400">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 dark:text-gray-300">{project.description}</p>

                      <div className="bg-muted/30 dark:bg-gray-800/30 rounded-lg p-4 mb-6">
                        <h4 className="font-medium mb-2 text-sm text-primary dark:text-blue-400">Project Highlights</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {project.longDescription
                            ?.split(". ")
                            .slice(0, 3)
                            .map((point, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/70 dark:bg-blue-400/70"></div>
                                <span>{point}.</span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className="mt-auto flex flex-wrap gap-4">
                        <Button
                          asChild
                          variant="default"
                          className="rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-md group"
                        >
                          <Link
                            href={project.link}
                            target={project.external ? "_blank" : "_self"}
                            rel={project.external ? "noopener noreferrer" : ""}
                          >
                            {project.external ? (
                              <>
                                Visit Website
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                            className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                          >
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              View Source Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories with Enhanced Design */}
      <section ref={categoriesRef} className="py-20 relative overflow-hidden bg-muted/5 dark:bg-muted/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-[500px] h-[500px] -right-[250px] top-[10%] opacity-10 dark:opacity-5 animate-blob animation-delay-1000"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center space-y-4 max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Project Categories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 mx-auto"></div>
            <p className="text-muted-foreground text-lg">
              Explore my diverse portfolio across different specializations and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "Web Development",
                count: projects.filter((p) => p.category === "Web Development").length,
                description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
                color: "from-blue-500 to-primary",
                gradient: "from-blue-500/20 to-primary/20",
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-500" />,
                title: "Cybersecurity",
                count: projects.filter((p) => p.category === "Cybersecurity").length,
                description: "Security tools, penetration testing projects, and vulnerability assessments.",
                color: "from-purple-500 to-blue-500",
                gradient: "from-purple-500/20 to-blue-500/20",
              },
              {
                icon: <Globe className="h-8 w-8 text-teal-500" />,
                title: "Digital Marketing",
                count: projects.filter((p) => p.category === "Digital Marketing").length,
                description: "SEO optimization, content marketing, and digital strategy projects.",
                color: "from-teal-500 to-emerald-500",
                gradient: "from-teal-500/20 to-emerald-500/20",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={categoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                onClick={() => setSelectedCategory(category.title)}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}
                ></div>

                <div className="relative h-full rounded-xl overflow-hidden bg-card/80 dark:bg-gray-900/70 backdrop-blur-sm p-8 border border-primary/10 dark:border-primary/5 shadow-xl flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-blue-500/50"></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="w-16 h-16 rounded-xl bg-white/80 dark:bg-gray-800/80 flex items-center justify-center mb-6 group-hover:bg-white dark:group-hover:bg-gray-800 transition-colors duration-300 border border-primary/20 group-hover:border-primary/40 shadow-md z-10">
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 z-10">
                    {category.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 z-10">{category.description}</p>

                  <div className="mt-auto pt-4 border-t border-primary/10 dark:border-primary/5 flex items-center justify-between z-10">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                      {category.count} Projects
                    </Badge>

                    <span className="text-primary group-hover:text-primary/80 flex items-center text-sm">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Enhanced Filtering */}
      <section ref={projectsRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-[500px] h-[500px] -left-[250px] bottom-[10%] opacity-10 dark:opacity-5 animate-blob animation-delay-3000"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center space-y-4 max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Explore All Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 mx-auto"></div>
            <p className="text-muted-foreground text-lg">Browse and filter through my complete portfolio of work</p>
          </motion.div>

          <motion.div
            className="mb-12 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Enhanced search and filter */}
            <div className="relative p-6 rounded-xl border border-primary/10 dark:border-primary/20 bg-card/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-purple-500/30 to-blue-500/30 rounded-t-xl"></div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search projects by name, description, or technology..."
                    className="pl-10 rounded-full border-primary/20 focus:border-primary/50 bg-card/50 dark:bg-gray-800/50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-48">
                    <Tabs
                      value={selectedCategory === "all" ? "all" : "category"}
                      onValueChange={(value) => {
                        if (value === "all") setSelectedCategory("all")
                      }}
                      className="w-full"
                    >
                      <TabsList className="w-full grid grid-cols-2 bg-muted/20 rounded-full p-1 h-auto">
                        <TabsTrigger className="w-full rounded-full" value="all">All Categories</TabsTrigger>
                        <TabsTrigger className="w-full rounded-full" value="category">By Category</TabsTrigger>
                      </TabsList>
                    </Tabs>

                    {selectedCategory !== "all" && (
                      <div className="mt-2 flex items-center justify-between bg-muted/30 dark:bg-gray-800/30 rounded-lg px-3 py-1.5">
                        <span className="text-sm font-medium">{selectedCategory}</span>
                        <button
                          onClick={() => setSelectedCategory("all")}
                          className="text-muted-foreground hover:text-primary"
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="w-full sm:w-48">
                    <Tabs
                      value={selectedTech === "all" ? "all" : "tech"}
                      onValueChange={(value) => {
                        if (value === "all") setSelectedTech("all")
                      }}
                      className="w-full"
                    >
                      <TabsList className="w-full grid grid-cols-2">
                        <TabsTrigger className="w-full" value="all">All Tech</TabsTrigger>
                        <TabsTrigger className="w-full" value="tech">By Tech</TabsTrigger>
                      </TabsList>
                    </Tabs>

                    {selectedTech !== "all" && (
                      <div className="mt-2 flex items-center justify-between bg-muted/30 dark:bg-gray-800/30 rounded-lg px-3 py-1.5">
                        <span className="text-sm font-medium">{selectedTech}</span>
                        <button
                          onClick={() => setSelectedTech("all")}
                          className="text-muted-foreground hover:text-primary"
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Category and Technology Selection */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedCategory === "all" && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-muted-foreground">Select Category:</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories
                        .filter((c) => c !== "all")
                        .map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className={`cursor-pointer px-3 py-1 ${
                              selectedCategory === category
                                ? "bg-primary/20 border-primary/40 text-primary"
                                : "hover:bg-primary/10 hover:border-primary/30"
                            }`}
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </Badge>
                        ))}
                    </div>
                  </div>
                )}

                {selectedTech === "all" && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-muted-foreground">Select Technology:</h3>
                    <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto pr-2 custom-scrollbar">
                      {technologies
                        .filter((t) => t !== "all")
                        .map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className={`cursor-pointer px-3 py-1 ${
                              selectedTech === tech
                                ? "bg-primary/20 border-primary/40 text-primary"
                                : "hover:bg-primary/10 hover:border-primary/30"
                            }`}
                            onClick={() => setSelectedTech(tech)}
                          >
                            {tech}
                          </Badge>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* View toggle and active filters */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">View:</span>
                  <div className="flex border border-border rounded-md overflow-hidden">
                    <button
                      className={`px-3 py-1 text-sm ${
                        activeView === "grid" ? "bg-primary/10 text-primary" : "bg-transparent hover:bg-muted/20"
                      }`}
                      onClick={() => setActiveView("grid")}
                    >
                      Grid
                    </button>
                    <button
                      className={`px-3 py-1 text-sm ${
                        activeView === "list" ? "bg-primary/10 text-primary" : "bg-transparent hover:bg-muted/20"
                      }`}
                      onClick={() => setActiveView("list")}
                    >
                      List
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
                  </span>

                  {(selectedCategory !== "all" || selectedTech !== "all" || searchTerm) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-xs"
                      onClick={() => {
                        setSelectedCategory("all")
                        setSelectedTech("all")
                        setSearchTerm("")
                      }}
                    >
                      Clear All Filters
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects grid with enhanced animations */}
          <AnimatePresence mode="wait">
            {isLoaded ? (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {displayedProjects.length > 0 ? (
                  <>
                    <div
                      className={
                        activeView === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"
                      }
                    >
                      {displayedProjects.map((project, index) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          index={index}
                          variant={activeView === "grid" ? "default" : "list"}
                        />
                      ))}
                    </div>
                    
                    {/* Load More Button */}
                    {hasMoreProjects && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center mt-12"
                      >
                        <Button
                          onClick={handleLoadMore}
                          variant="outline"
                          size="lg"
                          className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 group px-8 py-6"
                        >
                          <span className="text-base">Load More Projects</span>
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative p-16 text-center rounded-xl border border-primary/10 dark:border-primary/20 bg-card/50 dark:bg-gray-900/50 backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 dark:bg-gray-800/50 mb-4">
                        <Search className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">No projects found</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        We couldn't find any projects matching your current filters. Try adjusting your search criteria
                        or browse all projects.
                      </p>
                      <Button
                        onClick={() => {
                          setSelectedCategory("all")
                          setSelectedTech("all")
                          setSearchTerm("")
                        }}
                        className="rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                      >
                        Reset Filters
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="h-[400px] rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 dark:from-gray-800/40 dark:to-gray-800/20 animate-pulse"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden bg-muted/5 dark:bg-muted/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-[500px] h-[500px] -right-[250px] bottom-[10%] opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative rounded-xl overflow-hidden border border-primary/10 dark:border-primary/5 bg-card/80 dark:bg-card/30 backdrop-blur-sm p-10 shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-purple-500/50 to-blue-500/50"></div>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

                <Zap className="h-12 w-12 text-primary mx-auto mb-6 opacity-75" />

                <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Have a Project in Mind?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision. Let's create something amazing together!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-md group"
                  >
                    <Link href="/contact" className="flex items-center gap-2 px-8 py-6">
                      <span className="text-base">Start a Conversation</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 group"
                  >
                    <Link href="/services" className="flex items-center gap-2 px-8 py-6">
                      <span className="text-base">Explore My Services</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
