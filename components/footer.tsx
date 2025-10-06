"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Send, Heart } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-blue-500/10 dark:border-blue-500/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob w-[400px] h-[400px] md:w-[500px] md:h-[500px] -left-[200px] md:-left-[250px] top-[10%] opacity-5 dark:opacity-[0.02] animate-blob animation-delay-3000"></div>
        <div className="blob w-[500px] h-[500px] md:w-[600px] md:h-[600px] -right-[250px] md:-right-[300px] bottom-[5%] opacity-5 dark:opacity-[0.02] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.01]"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-blue-500/5 dark:border-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative group rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative p-6 md:p-10 bg-card/80 dark:bg-card/30 backdrop-blur-sm rounded-2xl border border-blue-500/10 dark:border-blue-500/5">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="text-center lg:text-left space-y-3 lg:max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Stay Connected
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Subscribe to get updates about new projects, tech insights, and exclusive content from my journey
                      as a self-taught developer.
                    </p>
                  </div>

                  <div className="w-full lg:w-auto lg:min-w-[400px]">
                    <form className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-grow">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="pl-10 rounded-full border-blue-500/20 focus:border-blue-500/50 bg-card/50 dark:bg-card/30 h-12 text-base"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group text-white h-12 px-8 font-semibold"
                      >
                        <span className="hidden sm:inline-block">Subscribe</span>
                        <span className="sm:hidden">Subscribe</span>
                        <Send className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                  <div className="absolute inset-0.5 bg-background dark:bg-gray-900 rounded-lg flex items-center justify-center text-blue-600 font-bold text-lg">
                    TS
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight">{siteConfig.name}</span>
              </div>
            </Link>

            <p className="text-muted-foreground leading-relaxed">
              A passionate self-taught developer from Uttar Pradesh, India, specializing in modern web development,
              cybersecurity, and digital solutions. Turning ideas into reality through code.
            </p>

            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: Github, href: "https://github.com/vinayverma-x", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com/vinayverma_x", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com/in/vinayverma-dev", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/vinayverma.dev", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/20 dark:bg-gray-800/50 flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:bg-blue-100/50 dark:hover:bg-blue-900/20 transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-blue-600 dark:text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Me", href: "/about" },
                { name: "My Services", href: "/services" },
                { name: "Portfolio", href: "/projects" },
                { name: "Contact", href: "/contact" },
                { name: "Pricing", href: "/pricing" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 text-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-purple-600 dark:text-purple-400">My Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Web Development", href: "/services/web-development" },
                { name: "Cybersecurity Audits", href: "/services/cybersecurity" },
                { name: "SEO Optimization", href: "/services/seo-optimization" },
                { name: "UI/UX Design", href: "/services/ui-ux-design" },
                { name: "Mobile Apps", href: "/services/mobile-development" },
                { name: "Digital Marketing", href: "/services/digital-marketing" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 text-purple-500" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-green-600 dark:text-green-400">Get In Touch</h3>
            <ul className="space-y-5">
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Email</h4>
                    <a
                      href="mailto:vinay@techspiresolutions.in"
                      className="text-foreground hover:text-blue-600 transition-colors duration-300 font-medium"
                    >
                      vinay@techspiresolutions.in
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+919876543210"
                      className="text-foreground hover:text-green-600 transition-colors duration-300 font-medium"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Location</h4>
                    <p className="text-foreground font-medium">Uttar Pradesh, India</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-blue-500/5 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} {siteConfig.name}. Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> in
            India.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-sm text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
