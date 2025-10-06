"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Twitter,
  Instagram,
  Clock,
  CheckCircle,
  Send,
  Loader2,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Tabs defaultValue="contact" className="w-full max-w-5xl mx-auto">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="contact">Contact Me</TabsTrigger>
        <TabsTrigger value="faq">FAQ</TabsTrigger>
      </TabsList>

      <TabsContent value="contact" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-4">
            <Card className="hover-lift transition-all duration-300 overflow-hidden border-0 shadow-md">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/50"></div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {siteConfig.links.email}
                </a>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-all duration-300 overflow-hidden border-0 shadow-md">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/50"></div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {siteConfig.links.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-all duration-300 overflow-hidden border-0 shadow-md">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/50"></div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Uttar Pradesh, India</p>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-all duration-300 overflow-hidden border-0 shadow-md">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/50"></div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Available 24/7</p>
                <p className="text-muted-foreground">Response within a few hours</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="hover-lift transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  {submitStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 text-green-600 dark:text-green-400"
                          : "bg-red-500/10 text-red-600 dark:text-red-400"
                      }`}
                    >
                      {submitStatus.message}
                    </motion.div>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-medium">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Connect With Me</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-primary/5 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-primary/5 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-primary/5 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Twitter className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Twitter</span>
            </a>

            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-primary/5 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Instagram</span>
            </a>

            <a
              href="https://techspiresolutions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-primary/5 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Website</span>
            </a>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="faq">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="hover-lift transition-all duration-300 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                What is your typical project timeline?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Project timelines vary depending on the scope and complexity. A simple website might take 2-3 weeks,
                while more complex applications can take 1-3 months. I'll provide a detailed timeline during our initial
                consultation.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift transition-all duration-300 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                How do you handle project pricing?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I offer both fixed-price and hourly rate options depending on the project requirements. For most
                projects, I provide a detailed quote after understanding your specific needs and scope.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift transition-all duration-300 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                Do you provide ongoing support after project completion?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, I offer ongoing support and maintenance packages to ensure your website or application continues to
                run smoothly. We can discuss the specific support requirements during our consultation.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift transition-all duration-300 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                What technologies do you specialize in?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I specialize in modern web technologies including React, Next.js, Node.js, and various database
                solutions. I also have expertise in cybersecurity, SEO, and AI integration. The specific technology
                stack is chosen based on your project requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift transition-all duration-300 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                Do you work with clients internationally?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, I work with clients from around the world. With modern communication tools, time zone differences
                are easily managed, and I'm flexible with scheduling meetings at times that work for you.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift transition-all duration-300 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                What is your approach to project management?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I follow an agile methodology with regular check-ins and updates. This ensures transparency throughout
                the development process and allows for adjustments as needed. You'll have access to project management
                tools to track progress in real-time.
              </p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
