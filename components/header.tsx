"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, X, ChevronDown, Sparkles } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { siteConfig } from "@/config/site"

export default function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Get WhatsApp number safely
  const whatsappNumber = siteConfig.contact?.phone ? siteConfig.contact.phone.replace(/\D/g, "") : "9219967205"

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "#",
      label: "Services",
      dropdown: [
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/cybersecurity", label: "Cybersecurity" },
        { href: "/services/seo-optimization", label: "SEO Optimization" },
        { href: "/services/ai-integration", label: "AI Integration" },
        { href: "/services/mobile-app-development", label: "Mobile App Development" },
        { href: "/services/database-design", label: "Database Management" },
      ],
    },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-luxury-gold/10 shadow-sm dark:bg-gray-900/95 dark:border-luxury-gold/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
            >
              <span className="text-lg md:text-xl font-bold text-luxury-gold group-hover:text-luxury-gold/90 transition-colors">
                V
              </span>
              <motion.div
                className="absolute inset-0 bg-luxury-gold/10 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-bold text-lg md:text-xl font-heading bg-clip-text text-transparent bg-gradient-to-r from-luxury-gold to-luxury-copper">
                {siteConfig.name}
              </span>
              <span className="text-xs text-muted-foreground -mt-1">TechSpire Solutions</span>
            </motion.div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1 md:gap-2">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href + link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onHoverStart={() => setHoveredItem(link.label)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {link.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`flex items-center gap-1 px-3 py-2 relative ${
                        hoveredItem === link.label ? "text-luxury-gold" : ""
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 opacity-70 transition-transform duration-200 ${
                          hoveredItem === link.label ? "rotate-180" : ""
                        }`}
                      />
                      {hoveredItem === link.label && (
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-luxury-gold rounded-full w-0"
                          layoutId="navIndicator"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="w-48 p-2 rounded-xl border border-luxury-gold/10 bg-background/95 backdrop-blur-md dark:bg-gray-900/95 dark:border-gray-800/50"
                  >
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem
                        key={item.href}
                        asChild
                        className="rounded-lg focus:bg-luxury-gold/10 focus:text-luxury-gold"
                      >
                        <Link href={item.href} className="cursor-pointer w-full py-2 px-2">
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-luxury-gold relative px-3 py-2 rounded-md ${
                    isActive(link.href)
                      ? "text-luxury-gold bg-luxury-gold/10"
                      : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-luxury-gold rounded-full"
                      layoutId="activeIndicator"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {hoveredItem === link.label && !isActive(link.href) && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-luxury-gold/50 rounded-full"
                      layoutId="hoverIndicator"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              )}
            </motion.div>
          ))}

          {isMounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-2"
            >
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle Theme"
                onClick={() => handleThemeChange(theme === "dark" ? "light" : "dark")}
                className="rounded-full hover:bg-luxury-gold/10"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle Theme</span>
              </Button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="ml-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="bg-gradient-luxury hover:bg-gradient-to-r hover:from-luxury-copper hover:to-luxury-gold transition-all duration-300 shadow-sm hover:shadow-md rounded-full text-white"
            >
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4" />
                <span>Hire Me</span>
              </a>
            </Button>
          </motion.div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {isMounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => handleThemeChange(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
          )}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] glass-effect border-l border-luxury-gold/10 dark:bg-gray-900/95 dark:border-gray-800/50"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-luxury-gold">V</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg font-heading bg-clip-text text-transparent bg-gradient-to-r from-luxury-gold to-luxury-copper">
                      {siteConfig.name}
                    </span>
                    <span className="text-xs text-muted-foreground -mt-1">TechSpire Solutions</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href + link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="mb-2"
                  >
                    {link.dropdown ? (
                      <div className="mb-1">
                        <div className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground">
                          {link.label}
                        </div>
                        <div className="ml-4 border-l border-luxury-gold/20 pl-2 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex px-3 py-2 text-sm rounded-md hover:bg-muted/50 hover:text-luxury-gold"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md ${
                          isActive(link.href)
                            ? "text-luxury-gold bg-luxury-gold/10"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-luxury-gold"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  <Button
                    asChild
                    className="mt-4 bg-gradient-luxury hover:bg-gradient-to-r hover:from-luxury-copper hover:to-luxury-gold transition-all duration-300 w-full shadow-sm rounded-full text-white"
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>Hire Me</span>
                    </a>
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
