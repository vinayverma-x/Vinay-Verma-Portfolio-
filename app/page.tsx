import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import WhyChooseMeSection from "@/components/why-choose-me-section"
import { CTASection } from "@/components/cta-section"
import TestimonialsSection from "@/components/testimonials-section"
import { StatisticsSection } from "@/components/statistics-section"
import { RecentProjectsSection } from "@/components/recent-projects-section"
import { NewsletterSection } from "@/components/newsletter-section"
import ChatWidget from "@/components/chat-widget"
import { Suspense } from "react"
import FuturisticLoading from "@/components/futuristic-loading"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<FuturisticLoading color="#D4AF37" accentColor="#B87333" />}>
        <HeroSection />
        <StatisticsSection />
        <ServicesSection />
        <RecentProjectsSection />
        <WhyChooseMeSection />
        <TestimonialsSection />
        <NewsletterSection />
        <CTASection
          title="Ready to Start Your Project?"
          description="Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design."
          buttonText="Contact Me"
          buttonLink="/contact"
        />
      </Suspense>
      <ChatWidget />
    </main>
  )
}
