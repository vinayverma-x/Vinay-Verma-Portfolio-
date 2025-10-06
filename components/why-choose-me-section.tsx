"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Clock, Users, Zap, Award, Shield } from "lucide-react"
import { useTheme } from "next-themes"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">{icon}</div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export default function WhyChooseMeSection() {
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
    <section id="why-choose-me" className="py-20 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B87333] mx-auto"></div>
            <p className="text-muted-foreground text-lg">
              I deliver exceptional digital solutions with a focus on quality, security, and client satisfaction
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeIn}>
              <Feature
                icon={<CheckCircle className="h-6 w-6 text-[#D4AF37]" />}
                title="Quality Assurance"
                description="Every project undergoes rigorous testing to ensure high-quality, bug-free deliverables that exceed expectations."
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <Feature
                icon={<Clock className="h-6 w-6 text-[#D4AF37]" />}
                title="Timely Delivery"
                description="I understand the importance of deadlines and ensure that projects are completed on time, every time."
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <Feature
                icon={<Users className="h-6 w-6 text-[#D4AF37]" />}
                title="Client-Centric Approach"
                description="Your vision and requirements are my priority. I maintain clear communication throughout the project lifecycle."
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <Feature
                icon={<Zap className="h-6 w-6 text-[#D4AF37]" />}
                title="Performance Optimization"
                description="I build solutions that are not just functional but also optimized for speed, efficiency, and scalability."
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <Feature
                icon={<Award className="h-6 w-6 text-[#D4AF37]" />}
                title="Industry Best Practices"
                description="I stay updated with the latest technologies and follow industry best practices to deliver cutting-edge solutions."
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <Feature
                icon={<Shield className="h-6 w-6 text-[#D4AF37]" />}
                title="Security First"
                description="Security is integrated into every stage of development to protect your data and users from potential threats."
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
