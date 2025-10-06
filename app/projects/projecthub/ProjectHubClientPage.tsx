"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Check,
  ExternalLink,
  DollarSign,
  BarChart,
  Users,
  ShieldCheck,
  Briefcase,
  Zap,
  ChevronRight,
  ChevronLeft,
  Star,
  Globe,
  Code,
  Lock,
  Clock,
  Phone,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import PageHeader from "@/components/page-header"
import FloatingElement from "@/components/floating-element"

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

// Gallery images for ProjectHub
const galleryImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-28%20021735-TRelpQNA0mMfj221fkpaZQ5LHRdLlv.png",
  "/placeholder.svg?height=600&width=800&text=ProjectHub+Marketplace",
  "/placeholder.svg?height=600&width=800&text=ProjectHub+Project+Details",
  "/placeholder.svg?height=600&width=800&text=ProjectHub+Seller+Dashboard",
  "/placeholder.svg?height=600&width=800&text=ProjectHub+Admin+Panel",
]

export default function ProjectHubClientPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Auto-rotate through gallery images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="blob w-[700px] h-[700px] -left-[350px] -top-[200px] opacity-10"></div>
      <div className="blob w-[600px] h-[600px] -right-[300px] bottom-[10%] opacity-10"></div>

      {[...Array(5)].map((_, i) => (
        <FloatingElement
          key={i}
          className="absolute rounded-full bg-primary/5"
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
          delay={i * 0.5}
          duration={10 + Math.random() * 10}
          distance={20 + Math.random() * 30}
        />
      ))}

      <PageHeader title="ProjectHub" description="A secure marketplace where users can buy and sell digital projects" />

      {/* Hero Section */}
      <section className="py-12 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <FadeInWhenVisible>
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-3 py-1">Premium Project</Badge>
                <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  The Ultimate Project Marketplace
                </h2>
                <div className="w-20 h-1 bg-primary"></div>
                <p className="text-muted-foreground text-lg">
                  ProjectHub is a comprehensive marketplace platform that connects project creators with buyers,
                  providing a secure environment for buying and selling digital projects, including websites,
                  applications, design templates, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 transition-all duration-300 rounded-full shadow-md hover:shadow-lg"
                  >
                    <a href="https://v0-project-hub-description.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Visit Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-full"
                  >
                    <Link href="/contact?project=projecthub">
                      Inquire About Purchase
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </FadeInWhenVisible>
            </div>
            <FadeInWhenVisible delay={0.2}>
              <div className="relative rounded-xl overflow-hidden border border-primary/10 shadow-xl h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={galleryImages[currentImageIndex] || "/placeholder.svg"}
                      alt={`ProjectHub Screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "w-6 bg-primary" : "bg-white/50 hover:bg-white/80"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8 relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <FadeInWhenVisible delay={0.1}>
              <motion.div
                className="bg-primary/5 rounded-xl p-6 border border-primary/10 text-center"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">₹4,00,000</div>
                <p />
                <div className="text-3xl font-bold text-primary">₹4,00,000</div>
                <p className="text-sm text-muted-foreground mt-1">Selling Price</p>
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <motion.div
                className="bg-primary/5 rounded-xl p-6 border border-primary/10 text-center"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <BarChart className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">₹10K+</div>
                <p className="text-sm text-muted-foreground mt-1">Monthly Revenue</p>
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <motion.div
                className="bg-primary/5 rounded-xl p-6 border border-primary/10 text-center"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">5-10%</div>
                <p className="text-sm text-muted-foreground mt-1">Transaction Fee</p>
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <motion.div
                className="bg-primary/5 rounded-xl p-6 border border-primary/10 text-center"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">12-18</div>
                <p className="text-sm text-muted-foreground mt-1">Months ROI</p>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-12 bg-muted/30 relative z-10">
        <div className="container">
          <FadeInWhenVisible>
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Executive Summary
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <motion.div
                className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <DollarSign className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Investment Opportunity</h3>
                <p className="text-muted-foreground">
                  ProjectHub represents a significant investment opportunity in the growing digital marketplace sector.
                  With a complete codebase and ready-to-launch infrastructure, this platform enables immediate entry
                  into a lucrative market with minimal additional development required.
                </p>
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <motion.div
                className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <BarChart className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Growth Potential</h3>
                <p className="text-muted-foreground">
                  The platform is designed for scalability, with multiple revenue streams and expansion opportunities.
                  As the digital economy continues to grow, ProjectHub is positioned to capture increasing market share
                  in the project marketplace niche, with potential for international expansion.
                </p>
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <motion.div
                className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Target Audience</h3>
                <p className="text-muted-foreground">
                  ProjectHub caters to a diverse audience including freelancers, agencies, entrepreneurs, and businesses
                  looking to buy or sell digital projects. The platform serves both creators seeking to monetize their
                  work and buyers looking for ready-made solutions to accelerate their business goals.
                </p>
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <motion.div
                className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Competitive Advantage</h3>
                <p className="text-muted-foreground">
                  Unlike general marketplaces, ProjectHub is specifically designed for digital projects with features
                  tailored to this niche. The platform's focus on security, quality verification, and specialized
                  project categories creates a significant competitive advantage in an underserved market segment.
                </p>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-12 relative z-10">
        <div className="container">
          <FadeInWhenVisible>
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Market Opportunity
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground">
                The digital project marketplace represents a significant and growing opportunity
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1} className="lg:col-span-2">
              <motion.div
                className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-8 shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  Growing Digital Economy
                </h3>
                <p className="text-muted-foreground mb-6">
                  The global digital economy continues to expand rapidly, with increasing demand for websites,
                  applications, and digital assets. This growth is driven by:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      Accelerating digital transformation across all industries
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      Increasing number of entrepreneurs and startups seeking digital solutions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      Growing freelance economy creating more digital assets
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      Businesses seeking cost-effective alternatives to custom development
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BarChart className="h-6 w-6 text-primary" />
                  Market Size & Projections
                </h3>
                <p className="text-muted-foreground">
                  The global digital asset marketplace is projected to reach $5.6 billion by 2025, with a compound
                  annual growth rate of 14.7%. The specialized niche for complete digital projects represents an
                  estimated $1.2 billion segment with even higher growth potential due to limited competition and
                  increasing demand.
                </p>
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 rounded-xl p-8 shadow-lg h-full"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <h3 className="text-2xl font-bold mb-6">Market Highlights</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">$5.6B</div>
                    <p className="text-sm text-muted-foreground">Projected market size by 2025</p>
                    <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">14.7%</div>
                    <p className="text-sm text-muted-foreground">Annual growth rate</p>
                    <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">$1.2B</div>
                    <p className="text-sm text-muted-foreground">Digital projects segment</p>
                    <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 1.5, delay: 0.9 }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">73%</div>
                    <p className="text-sm text-muted-foreground">Businesses preferring ready solutions</p>
                    <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "73%" }}
                        transition={{ duration: 1.5, delay: 1.1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-muted/30 relative z-10">
        <div className="container">
          <FadeInWhenVisible>
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Key Features
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground">
                ProjectHub comes with a comprehensive set of features designed to create a secure, user-friendly
                marketplace
              </p>
            </div>
          </FadeInWhenVisible>

          <Tabs defaultValue="security" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-background/50 p-1 rounded-full">
              <TabsTrigger
                value="security"
                className="text-base py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Lock className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger
                value="marketplace"
                className="text-base py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Globe className="h-4 w-4 mr-2" />
                Marketplace
              </TabsTrigger>
              <TabsTrigger
                value="user"
                className="text-base py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Users className="h-4 w-4 mr-2" />
                User Experience
              </TabsTrigger>
              <TabsTrigger
                value="admin"
                className="text-base py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Code className="h-4 w-4 mr-2" />
                Admin Tools
              </TabsTrigger>
            </TabsList>

            <TabsContent value="security" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FadeInWhenVisible delay={0.1}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Secure Payments</h3>
                    <p className="text-muted-foreground">
                      Integrated payment processing with industry-standard security protocols, supporting multiple
                      payment methods including credit cards, PayPal, and cryptocurrency options.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <Briefcase className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Escrow Services</h3>
                    <p className="text-muted-foreground">
                      Built-in escrow system that holds payment until both parties confirm successful project delivery,
                      protecting both buyers and sellers from potential fraud.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.3}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Fraud Prevention</h3>
                    <p className="text-muted-foreground">
                      Advanced fraud detection algorithms and verification processes to identify and prevent suspicious
                      activities, ensuring a safe trading environment.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>
              </div>
            </TabsContent>

            <TabsContent value="marketplace" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FadeInWhenVisible delay={0.1}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <Users className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">User Ratings & Reviews</h3>
                    <p className="text-muted-foreground">
                      Comprehensive rating and review system allowing buyers and sellers to build reputation based on
                      transaction history, creating trust within the marketplace.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <Check className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Project Verification</h3>
                    <p className="text-muted-foreground">
                      Quality assurance process that verifies projects meet marketplace standards before listing,
                      ensuring buyers receive functional, high-quality digital assets.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.3}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Seller Protection</h3>
                    <p className="text-muted-foreground">
                      Intellectual property protection features and dispute resolution systems to protect sellers'
                      rights and ensure fair treatment in case of disagreements.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>
              </div>
            </TabsContent>

            <TabsContent value="user" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FadeInWhenVisible delay={0.1}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Intuitive Interface</h3>
                    <p className="text-muted-foreground">
                      User-friendly design with intuitive navigation and search functionality, making it easy for users
                      to find, evaluate, and purchase projects that meet their needs.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <Users className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Messaging System</h3>
                    <p className="text-muted-foreground">
                      Built-in communication tools allowing buyers and sellers to discuss project details, negotiate
                      terms, and address questions before and after transactions.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.3}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <BarChart className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Project Analytics</h3>
                    <p className="text-muted-foreground">
                      Detailed analytics for sellers to track listing performance, visitor statistics, and conversion
                      rates, helping optimize their offerings for better results.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>
              </div>
            </TabsContent>

            <TabsContent value="admin" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FadeInWhenVisible delay={0.1}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Moderation Tools</h3>
                    <p className="text-muted-foreground">
                      Comprehensive admin dashboard for content moderation, user management, and transaction oversight
                      to maintain marketplace quality and security.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <BarChart className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Revenue Analytics</h3>
                    <p className="text-muted-foreground">
                      Detailed financial reporting and analytics tools to track marketplace performance, revenue
                      streams, and growth metrics for data-driven decision making.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.3}>
                  <motion.div
                    className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <Users className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">User Management</h3>
                    <p className="text-muted-foreground">
                      Advanced user management system with verification processes, account controls, and support tools
                      to ensure a high-quality user base and positive community.
                    </p>
                  </motion.div>
                </FadeInWhenVisible>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-12 relative z-10">
        <div className="container">
          <FadeInWhenVisible>
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Business Model
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground">
                ProjectHub features multiple revenue streams for sustainable growth and profitability
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Primary Revenue Streams</h3>

                <div className="space-y-4">
                  <motion.div
                    className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/10 shadow-lg"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      Transaction Fees
                    </h4>
                    <p className="text-muted-foreground">
                      The platform charges a 5-10% commission on each successful transaction, providing a scalable
                      revenue stream that grows with marketplace volume. With projected monthly transactions of $100,000
                      in the first year, this represents $5,000-$10,000 in monthly revenue from transaction fees alone.
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/10 shadow-lg"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Premium Services
                    </h4>
                    <p className="text-muted-foreground">
                      Additional revenue comes from premium services including featured listings, advanced analytics for
                      sellers, verification badges, and priority support. These subscription-based services are
                      projected to generate $3,000-$5,000 in monthly recurring revenue.
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/10 shadow-lg"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Advertising
                    </h4>
                    <p className="text-muted-foreground">
                      Targeted advertising opportunities for relevant services and tools create an additional revenue
                      stream. With a focused audience of digital professionals, advertising space on the platform
                      commands premium rates, estimated at $2,000-$4,000 monthly.
                    </p>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold pt-4">Expansion Opportunities</h3>
                <p className="text-muted-foreground">
                  Future revenue growth can be achieved through geographic expansion, additional service offerings such
                  as custom project requests, escrow service fees, and potential white-label solutions for enterprise
                  clients.
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 rounded-xl p-8 shadow-lg h-full"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <h3 className="text-2xl font-bold mb-6">Financial Highlights</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">₹4,00,000</div>
                    <p className="text-sm text-muted-foreground">Selling price</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl font-bold text-primary">₹10,000 - ₹19,000</div>
                    <p className="text-sm text-muted-foreground">Projected monthly revenue</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl font-bold text-primary">5-10%</div>
                    <p className="text-sm text-muted-foreground">Transaction fee</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl font-bold text-primary">12-18 months</div>
                    <p className="text-sm text-muted-foreground">Estimated ROI period</p>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/contact?project=projecthub">
                      Inquire About Purchase
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-muted/30 relative z-10">
        <div className="container">
          <FadeInWhenVisible>
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Client Testimonials
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground">What our clients say about ProjectHub</p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeInWhenVisible delay={0.1}>
              <motion.div
                className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "ProjectHub has transformed how we acquire digital assets for our business. The platform is intuitive,
                  secure, and offers a wide range of high-quality projects. The escrow service gives us peace of mind
                  with every purchase."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">RK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rahul Kumar</h4>
                    <p className="text-sm text-muted-foreground">CEO, Digital Innovations</p>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <motion.div
                className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "As a freelance developer, ProjectHub has opened up a new revenue stream for me. I can now monetize
                  projects I've already built, reaching a wider audience of potential buyers. The platform handles all
                  the payment and security aspects, letting me focus on creating."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm text-muted-foreground">Freelance Developer</p>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 relative z-10">
        <div className="container">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-8 shadow-lg">
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Get In Touch
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
                <p className="text-muted-foreground">Ready to acquire ProjectHub? Contact us today!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div className="flex flex-col items-center text-center p-4" whileHover={{ y: -5 }}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 9219967205</p>
                </motion.div>

                <motion.div className="flex flex-col items-center text-center p-4" whileHover={{ y: -5 }}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">x.vinay.verma@gmail.com</p>
                </motion.div>

                <motion.div className="flex flex-col items-center text-center p-4" whileHover={{ y: -5 }}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Website</h3>
                  <p className="text-muted-foreground">techspiresolutions.in</p>
                </motion.div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/contact?project=projecthub">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30 relative z-10">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20 shadow-xl"
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(59, 130, 246, 0.3)" }}
          >
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Ready to Acquire ProjectHub?
            </h2>
            <p className="text-muted-foreground">
              This turnkey marketplace solution offers immediate entry into a growing market with multiple revenue
              streams. Contact us today to discuss acquisition details and implementation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
              >
                <Link href="/contact?project=projecthub">
                  Inquire About Purchase
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-full"
              >
                <a href="https://v0-project-hub-description.vercel.app/" target="_blank" rel="noopener noreferrer">
                  View Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
