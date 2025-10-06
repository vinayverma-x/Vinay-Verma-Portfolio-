import type { Metadata, Viewport } from "next"
import ContactPageClient from "./ContactPageClient"
import { Breadcrumb } from "@/components/breadcrumb"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Contact Vinay Verma - Get Professional Web Development Services",
  description:
    "Get in touch with Vinay Verma for professional web development, cybersecurity, and digital marketing services. Based in Uttar Pradesh, India, serving clients worldwide.",
  keywords: [
    "contact Vinay Verma",
    "hire web developer",
    "cybersecurity consultant",
    "freelance developer India",
    "Uttar Pradesh developer",
    "web development quote",
    "project consultation",
    "technical support",
    "business inquiry",
  ],
  openGraph: {
    title: "Contact Vinay Verma - Professional Web Development Services | TechSpire Solutions",
    description:
      "Ready to start your next project? Contact Vinay Verma for professional web development and cybersecurity services.",
    type: "website",
    images: ["/og-contact.jpg"],
  },
  twitter: {
    title: "Contact Vinay Verma - Professional Web Development Services",
    description: "Ready to start your project? Get in touch with expert developer Vinay Verma.",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
        <div className="container relative z-10">
          <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's Work Together</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss how I can help your business? I'm just a message away.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-16 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-24 right-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Contact Section */}
      <section className="py-16 relative z-10">
        <div className="container">
          <ContactPageClient />
        </div>
      </section>
    </div>
  )
}
