"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Mail, Calendar, Building, GraduationCap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EnhancedAboutPage() {
  const [activeTab, setActiveTab] = useState("experience")

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 95 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 65 },
    { name: "AWS", level: 60 },
    { name: "Cybersecurity", level: 85 },
    { name: "UI/UX Design", level: 75 },
  ]

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechSpire Solutions",
      period: "2022 - Present",
      description:
        "Leading development of web applications using React, Next.js, and Node.js. Implementing security best practices and mentoring junior developers.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc.",
      period: "2020 - 2022",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with design and product teams to implement new features.",
    },
    {
      title: "Web Developer",
      company: "CreativeTech Solutions",
      period: "2018 - 2020",
      description: "Built responsive websites and implemented front-end designs using HTML, CSS, and JavaScript.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Delhi University",
      year: "2018",
      description: "Specialized in Web Technologies and Information Security",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Mumbai University",
      year: "2015",
      description: "Focused on Programming and Database Management",
    },
    {
      degree: "Certified Ethical Hacker (CEH)",
      institution: "EC-Council",
      year: "2019",
      description: "Professional certification in ethical hacking and cybersecurity",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="About Me"
        description="Learn more about my background, skills, and experience."
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="relative w-full aspect-square max-w-md mx-auto mb-6 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Vinay+Verma"
                alt="Vinay Verma"
                width={400}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Vinay Verma</h2>
              <p className="text-muted-foreground mb-4">Full Stack Developer & Cybersecurity Expert</p>

              <div className="flex justify-center gap-4 mb-6">
                <Button asChild variant="outline" size="sm">
                  <a href="/resume.pdf" download>
                    <Download size={16} className="mr-2" /> Resume
                  </a>
                </Button>
                <Button asChild size="sm">
                  <Link href="/contact">
                    <Mail size={16} className="mr-2" /> Contact
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
                  {skills.map((skill) => (
                    <motion.div key={skill.name} variants={fadeInUp}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="lg:col-span-2">
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a passionate Full Stack Developer and Cybersecurity Expert with over 5 years of experience in
                  building secure, scalable, and user-friendly web applications. My expertise spans across front-end and
                  back-end technologies, with a special focus on React, Next.js, Node.js, and modern security practices.
                </p>
                <p>
                  Throughout my career, I have worked on a diverse range of projects, from e-commerce platforms to
                  enterprise-level applications, always prioritizing clean code, performance, and security. I enjoy
                  solving complex problems and continuously learning new technologies to stay at the forefront of web
                  development.
                </p>
                <p>
                  When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and
                  mentoring aspiring developers. I'm always open to new opportunities and collaborations that challenge
                  me to grow professionally.
                </p>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="experience">
              <Card>
                <CardContent className="p-6">
                  <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="relative pl-8 border-l-2 border-muted pb-8 last:pb-0"
                      >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                          <h4 className="text-xl font-bold">{exp.title}</h4>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar size={16} className="mr-1" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <div className="flex items-center mb-3 text-muted-foreground">
                          <Building size={16} className="mr-1" />
                          <span>{exp.company}</span>
                        </div>
                        <p>{exp.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education">
              <Card>
                <CardContent className="p-6">
                  <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="relative pl-8 border-l-2 border-muted pb-8 last:pb-0"
                      >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                          <h4 className="text-xl font-bold">{edu.degree}</h4>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar size={16} className="mr-1" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                        <div className="flex items-center mb-3 text-muted-foreground">
                          <GraduationCap size={16} className="mr-1" />
                          <span>{edu.institution}</span>
                        </div>
                        <p>{edu.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  variants={fadeInUp}
                  className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <Badge className="mb-2">2023</Badge>
                  <h4 className="font-bold mb-1">AWS Certified Solutions Architect</h4>
                  <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <Badge className="mb-2">2022</Badge>
                  <h4 className="font-bold mb-1">Professional Scrum Master I</h4>
                  <p className="text-sm text-muted-foreground">Scrum.org</p>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <Badge className="mb-2">2021</Badge>
                  <h4 className="font-bold mb-1">MongoDB Certified Developer</h4>
                  <p className="text-sm text-muted-foreground">MongoDB University</p>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <Badge className="mb-2">2020</Badge>
                  <h4 className="font-bold mb-1">React Developer Certification</h4>
                  <p className="text-sm text-muted-foreground">Meta (formerly Facebook)</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
