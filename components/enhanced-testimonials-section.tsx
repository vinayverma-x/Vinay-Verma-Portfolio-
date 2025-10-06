"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  country: string
  avatar: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "CTO",
    company: "TechInnovate Solutions",
    country: "India",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Vinay's expertise in web development transformed our digital presence. His attention to detail and commitment to quality resulted in a website that perfectly represents our brand and has significantly improved our user engagement metrics.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Global Reach Inc.",
    country: "United States",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Working with Vinay was a game-changer for our company. His technical skills combined with his understanding of user experience created a seamless platform that our customers love. Our conversion rates have increased by 45% since the launch.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Founder",
    company: "Innovate Digital",
    country: "India",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Vinay delivered beyond our expectations. His ability to translate our vision into a functional, beautiful website while ensuring optimal performance was impressive. He was responsive, professional, and a true partner in our project.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Product Manager",
    company: "NextGen Solutions",
    country: "Singapore",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "I've worked with many developers, but Vinay stands out for his technical excellence and problem-solving abilities. He not only built a robust platform for us but also provided valuable insights that improved our overall product strategy.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ananya Desai",
    role: "CEO",
    company: "Creative Minds Agency",
    country: "India",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Vinay's work on our e-commerce platform was exceptional. His deep understanding of both frontend and backend technologies resulted in a seamless shopping experience for our customers. Our sales have increased by 60% since the redesign.",
    rating: 5,
  },
  {
    id: 6,
    name: "Thomas Weber",
    role: "Director of Technology",
    company: "European Digital Ventures",
    country: "Germany",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Collaborating with Vinay on our enterprise application was a pleasure. His technical expertise, combined with his ability to understand complex business requirements, delivered a solution that has streamlined our operations significantly.",
    rating: 5,
  },
]

export function EnhancedTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([])

  // Determine how many testimonials to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1280) {
        setVisibleTestimonials(getVisibleTestimonials(3))
      } else if (width >= 768) {
        setVisibleTestimonials(getVisibleTestimonials(2))
      } else {
        setVisibleTestimonials(getVisibleTestimonials(1))
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentIndex])

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const getVisibleTestimonials = (count: number) => {
    const result = []
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setAutoplay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setAutoplay(false)
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600">
            Client Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear what clients from around the world have to say about their experience working with me.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full md:w-1/2 xl:w-1/3 px-4"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <Quote size={96} className="text-amber-600 dark:text-amber-400" />
                    </div>

                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-amber-600 dark:border-amber-400">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {testimonial.role}, {testimonial.company}
                        </p>
                        <p className="text-xs text-amber-600 dark:text-amber-400">{testimonial.country}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

                    <p className="text-gray-600 dark:text-gray-300 italic flex-grow">"{testimonial.content}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-700 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-700 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setAutoplay(false)
              }}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? "bg-amber-600 dark:bg-amber-400" : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
