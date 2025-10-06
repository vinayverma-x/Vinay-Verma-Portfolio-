import type { Metadata } from "next"
import ProjectsPageClient from "./ProjectsPageClient"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Projects Portfolio - Web Development & Cybersecurity Projects",
  description:
    "Explore Vinay Verma's portfolio of web development, cybersecurity, and full-stack projects. From e-commerce platforms to security audit tools, see real-world applications built with modern technologies.",
  keywords: [
    "Vinay Verma projects",
    "web development portfolio",
    "cybersecurity projects",
    "React projects",
    "Next.js applications",
    "full-stack projects",
    "e-commerce development",
    "security audit tools",
    "portfolio website",
    "JavaScript projects",
    "Python applications",
  ],
  openGraph: {
    title: "Projects Portfolio - Web Development & Cybersecurity | TechSpire Solutions",
    description:
      "Explore innovative web development and cybersecurity projects by Vinay Verma. Real-world applications showcasing modern technologies and best practices.",
    type: "website",
    images: ["/og-projects.jpg"],
  },
  twitter: {
    title: "Projects Portfolio - Web Development & Cybersecurity",
    description: "Explore innovative projects by Vinay Verma - from e-commerce platforms to security tools.",
  },
  alternates: {
    canonical: "/projects",
  },
}

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Projects", href: "/projects" }]} />
      <ProjectsPageClient />
    </>
  )
}
