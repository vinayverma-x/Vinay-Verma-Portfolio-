"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  GraduationCap,
  ArrowRight,
  Award,
  Users,
  Clock,
  CheckCircle,
  Heart,
  Code,
  Shield,
  Search,
  Sparkles,
  BookOpen,
  Calendar,
  MapPin,
} from "lucide-react"
import PageHeader from "@/components/page-header"
import BoyAvatar from "@/components/boy-avatar"
import SkillsSection from "@/components/skills-section"

export default function AboutPageClient() {
  // Refs for scroll animations
  const introRef = useRef(null)
  const expertiseRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)
  const ctaRef = useRef(null)

  const introInView = useInView(introRef, { once: true, margin: "-100px" })
  const expertiseInView = useInView(expertiseRef, { once: true, margin: "-100px" })
  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" })
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Page Header with Particles */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-500/10 dark:to-transparent"></div>
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/10 dark:bg-blue-500/20"
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
          title="About Me"
          description="My journey from a curious student to a passionate self-taught developer and cybersecurity enthusiast"
        />
      </div>

      {/* About Section with enhanced design */}
      <section ref={introRef} className="py-16 md:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-[400px] h-[400px] md:w-[600px] md:h-[600px] -left-[200px] md:-left-[300px] top-[20%] opacity-10 dark:opacity-5 animate-blob"></div>
          <div className="blob w-[350px] h-[350px] md:w-[500px] md:h-[500px] -right-[175px] md:-right-[250px] bottom-[10%] opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 xl:gap-16 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: introInView ? 1 : 0, x: introInView ? 0 : -20 }}
                transition={{ duration: 0.6 }}
              >
                {/* Decorative elements */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative rounded-2xl overflow-hidden bg-card/80 dark:bg-card/30 backdrop-blur-sm p-1 border border-blue-500/10 dark:border-blue-500/5 shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>

                  <div className="p-4 md:p-6 backdrop-blur-sm">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse animation-duration-4000"></div>
                      <BoyAvatar size={350} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="flex-1 space-y-6 order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: introInView ? 1 : 0, x: introInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-600 border border-blue-500/20 mb-4 mx-auto lg:mx-0">
                <span className="mr-2 inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Self-Taught Developer & Ethical Hacker
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Journey Story
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto lg:mx-0"></div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>
                  Hi! I'm Vinay Verma, a passionate self-taught developer from Uttar Pradesh, India. My journey into the
                  tech world began right after completing my 12th grade from{" "}
                  <span className="text-blue-600 font-semibold">B.N.Lal Vocational Inter College</span> in 2022.
                </p>

                <p>
                  Instead of following the traditional college path, I made a bold decision to take a gap year and dive
                  headfirst into the world of technology. This wasn't just a break from studies – it was the beginning
                  of an incredible self-learning adventure that transformed my life.
                </p>

                <p>
                  During this transformative period, I immersed myself in online coding courses, particularly from{" "}
                  <span className="text-purple-600 font-semibold">Apna College</span>, where I learned the fundamentals
                  of programming. But I didn't stop there – I explored web development, cybersecurity, UI/UX design,
                  video editing, and digital marketing.
                </p>

                <p>
                  Today, I'm the founder of <span className="text-blue-600 font-semibold">TechSpire Solutions</span>,
                  where I combine my technical expertise with creative problem-solving to deliver exceptional digital
                  solutions for businesses worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8">
                <motion.div
                  className="flex items-start gap-3 group p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200/50 dark:border-blue-800/30"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300 border border-blue-500/20 group-hover:border-blue-500/40">
                    <Award className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
                      Quality Focused
                    </h4>
                    <p className="text-sm text-muted-foreground">Delivering excellence in every project</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 group p-4 rounded-xl bg-purple-50/50 dark:bg-purple-900/10 border border-purple-200/50 dark:border-purple-800/30"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors duration-300 border border-purple-500/20 group-hover:border-purple-500/40">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-purple-600 transition-colors duration-300">
                      Client Centered
                    </h4>
                    <p className="text-sm text-muted-foreground">Your success is my priority</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 group p-4 rounded-xl bg-green-50/50 dark:bg-green-900/10 border border-green-200/50 dark:border-green-800/30"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors duration-300 border border-green-500/20 group-hover:border-green-500/40">
                    <Clock className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-green-600 transition-colors duration-300">
                      Always Learning
                    </h4>
                    <p className="text-sm text-muted-foreground">Continuously updating my skills</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 group p-4 rounded-xl bg-orange-50/50 dark:bg-orange-900/10 border border-orange-200/50 dark:border-orange-800/30"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-orange-500/40">
                    <Heart className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-orange-600 transition-colors duration-300">
                      Passionate Work
                    </h4>
                    <p className="text-sm text-muted-foreground">Love what I do, do what I love</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section ref={expertiseRef} className="py-16 relative overflow-hidden bg-muted/5 dark:bg-muted/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-[400px] h-[400px] md:w-[500px] md:h-[500px] -right-[200px] md:-right-[250px] top-[10%] opacity-10 dark:opacity-5 animate-blob animation-delay-1000"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: expertiseInView ? 1 : 0, y: expertiseInView ? 0 : 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My Expertise Areas
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: expertiseInView ? 1 : 0, width: expertiseInView ? 80 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: expertiseInView ? 1 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Specialized services I offer to help businesses thrive in the digital world
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {[
              {
                icon: <Code className="h-8 w-8 text-blue-500" />,
                title: "Web Development",
                description:
                  "Creating responsive, high-performance websites and web applications using modern frameworks like React, Next.js, and Node.js.",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50/50 dark:bg-blue-900/10",
                borderColor: "border-blue-200/50 dark:border-blue-800/30",
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-500" />,
                title: "Cybersecurity",
                description:
                  "Protecting your digital assets with comprehensive security audits, penetration testing, and vulnerability assessments.",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50/50 dark:bg-purple-900/10",
                borderColor: "border-purple-200/50 dark:border-purple-800/30",
              },
              {
                icon: <Search className="h-8 w-8 text-green-500" />,
                title: "SEO Optimization",
                description:
                  "Improving your online visibility and driving organic traffic with proven SEO strategies and techniques.",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50/50 dark:bg-green-900/10",
                borderColor: "border-green-200/50 dark:border-green-800/30",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: expertiseInView ? 1 : 0, y: expertiseInView ? 0 : 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}
                ></div>
                <div
                  className={`relative h-full rounded-xl overflow-hidden ${service.bgColor} backdrop-blur-sm p-6 border ${service.borderColor} shadow-xl flex flex-col`}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>

                  <div className="w-16 h-16 rounded-xl bg-white/50 dark:bg-gray-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20 dark:border-gray-700/50">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>

                  <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                    <Button asChild variant="ghost" className="p-0 h-auto hover:bg-transparent group/btn">
                      <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        <span className="text-blue-600 group-hover/btn:text-blue-500 flex items-center font-medium">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Tabs */}
      <section ref={experienceRef} className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-[400px] h-[400px] md:w-[500px] md:h-[500px] -left-[200px] md:-left-[250px] top-[10%] opacity-10 dark:opacity-5 animate-blob animation-delay-3000"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My Journey & Learning Path
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: experienceInView ? 1 : 0, width: experienceInView ? 80 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: experienceInView ? 1 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From traditional education to self-taught expertise
            </motion.p>
          </div>

          <Tabs defaultValue="education" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-muted/20 dark:bg-muted/10 backdrop-blur-sm rounded-full">
              <TabsTrigger
                value="education"
                className="text-base py-3 rounded-full data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-300"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Education
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="text-base py-3 rounded-full data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-600 data-[state=active]:shadow-sm transition-all duration-300"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="mt-6 space-y-6">
              {[
                {
                  title: "Higher Secondary Education (12th Grade)",
                  institution: "B.N.Lal Vocational Inter College",
                  location: "Uttar Pradesh, India",
                  year: "2022",
                  description:
                    "Completed higher secondary education with a focus on science and mathematics. This foundation in analytical thinking and problem-solving became crucial for my programming journey.",
                  icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
                  color: "blue",
                },
                {
                  title: "Self-Taught Programming Journey",
                  institution: "Apna College & Online Platforms",
                  location: "Online Learning",
                  year: "2022-Present",
                  description:
                    "Embarked on an intensive self-learning journey through online courses, tutorials, and hands-on projects. Mastered JavaScript, Python, React, Node.js, and various other technologies through dedicated practice.",
                  icon: <BookOpen className="h-6 w-6 text-purple-500" />,
                  color: "purple",
                },
                {
                  title: "Cybersecurity & Ethical Hacking",
                  institution: "Self-Taught & Practical Experience",
                  location: "Hands-on Learning",
                  year: "2022-Present",
                  description:
                    "Developed expertise in cybersecurity through practical experience, vulnerability research, and real-world security assessments. Specialized in web application security and penetration testing.",
                  icon: <Shield className="h-6 w-6 text-green-500" />,
                  color: "green",
                },
              ].map((education, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className={`border-${education.color}-200/50 dark:border-${education.color}-800/30 bg-${education.color}-50/50 dark:bg-${education.color}-900/10 backdrop-blur-sm shadow-md overflow-hidden group hover:border-${education.color}-300/50 dark:hover:border-${education.color}-700/50 transition-all duration-300`}
                  >
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${education.color}-500 to-${education.color}-600`}
                    ></div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-${education.color}-500/10 flex items-center justify-center flex-shrink-0 border border-${education.color}-500/20`}
                          >
                            {education.icon}
                          </div>
                          <div>
                            <CardTitle
                              className={`text-xl group-hover:text-${education.color}-600 dark:group-hover:text-${education.color}-400 transition-colors duration-300`}
                            >
                              {education.title}
                            </CardTitle>
                            <p className="text-muted-foreground mt-1 font-medium">{education.institution}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {education.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {education.year}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Badge
                          className={`bg-${education.color}-500/10 text-${education.color}-600 hover:bg-${education.color}-500/20 border border-${education.color}-500/20`}
                        >
                          {education.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{education.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="experience" className="mt-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-purple-200/50 dark:border-purple-800/30 bg-purple-50/50 dark:bg-purple-900/10 backdrop-blur-sm shadow-md overflow-hidden group hover:border-purple-300/50 dark:hover:border-purple-700/50 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                          <Briefcase className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            Founder & Full-Stack Developer
                          </CardTitle>
                          <p className="text-muted-foreground mt-1 font-medium">TechSpire Solutions</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              Uttar Pradesh, India
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              2022-Present
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 border border-purple-500/20">
                        Current
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Founded TechSpire Solutions to provide comprehensive digital solutions to businesses worldwide.
                      Specializing in web development, cybersecurity, and digital marketing services.
                    </p>
                    <ul className="space-y-4 text-muted-foreground">
                      {[
                        "Developed 20+ responsive websites and web applications using modern technologies like React, Next.js, and Node.js",
                        "Conducted security audits and penetration testing for various clients, identifying and fixing critical vulnerabilities",
                        "Implemented SEO strategies that improved client website rankings by an average of 150%",
                        "Created custom e-commerce solutions with integrated payment gateways and inventory management",
                        "Provided ongoing technical support and maintenance for client projects",
                        "Built a strong portfolio of satisfied clients across different industries",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-100/50 dark:hover:bg-purple-900/20 transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: experienceInView ? 1 : 0, x: experienceInView ? 0 : -10 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                        >
                          <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-purple-500/20">
                            <CheckCircle className="h-3 w-3 text-purple-500" />
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef}>
        <SkillsSection className="py-16 md:py-20 container px-4 sm:px-6 lg:px-8" />
      </section>

      {/* Enhanced CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-20 relative overflow-hidden bg-muted/5 dark:bg-muted/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-[400px] h-[400px] md:w-[500px] md:h-[500px] -left-[200px] md:-left-[250px] bottom-[10%] opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative rounded-2xl overflow-hidden border border-blue-500/10 dark:border-blue-500/5 bg-card/80 dark:bg-card/30 backdrop-blur-sm p-8 md:p-12 shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>

                <Sparkles className="h-12 w-12 text-blue-500 mx-auto mb-6 opacity-75" />

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                  Let's collaborate on your next project and bring your vision to life with modern technology, creative
                  solutions, and a passion for excellence. I'm here to help you succeed in the digital world.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group px-8 py-6 text-base font-semibold"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <span>Let's Work Together</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/5 group px-8 py-6 text-base font-semibold bg-transparent"
                  >
                    <Link href="/projects" className="flex items-center gap-2">
                      <span>View My Portfolio</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
