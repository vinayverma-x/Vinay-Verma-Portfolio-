"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Globe, Shield, Code, Search, Smartphone, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const services = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    link: "/services/web-development",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security audits and solutions.",
    link: "/services/cybersecurity",
  },
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: "SEO Optimization",
    description: "Improve your online visibility and drive organic traffic to your website.",
    link: "/services/seo-optimization",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "AI Integration",
    description: "Leverage the power of artificial intelligence to enhance your digital products.",
    link: "/services/ai-integration",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    link: "/services/mobile-app-development",
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Database Design",
    description: "Efficient and scalable database solutions tailored to your specific needs.",
    link: "/services/database-design",
  },
]

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

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section id="services" className="py-20 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
            <p className="text-muted-foreground text-lg">
              Comprehensive digital solutions to help your business thrive in the digital landscape
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeIn}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(212, 175, 55, 0.2)",
                  borderColor: "rgba(212, 175, 55, 0.3)",
                }}
                className={cn(
                  "rounded-xl p-6 transition-all duration-300 border shadow-md",
                  isDark
                    ? "bg-gray-900/50 backdrop-blur-sm border-[#D4AF37]/10 dark:border-[#D4AF37]/5 hover:border-[#D4AF37]/20"
                    : "bg-white/90 backdrop-blur-sm border-[#D4AF37]/10 hover:border-[#D4AF37]/20",
                  "group",
                )}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeIn} className="flex justify-center mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-md"
            >
              <Link href="/services" className="flex items-center gap-2 px-6">
                Explore All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
