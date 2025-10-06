import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "About Vinay Verma - Self-Taught Developer Journey",
  description:
    "Learn about Vinay Verma's journey from B.N.Lal Vocational Inter College to becoming a self-taught Full-Stack Developer and Ethical Hacker. Discover his passion for coding, cybersecurity, and digital innovation.",
  keywords: [
    "Vinay Verma biography",
    "self-taught developer",
    "B.N.Lal Vocational Inter College",
    "college dropout success story",
    "Apna College student",
    "online learning journey",
    "Uttar Pradesh developer",
    "ethical hacker story",
    "coding journey",
    "tech entrepreneur India",
  ],
  openGraph: {
    title: "About Vinay Verma - Self-Taught Developer Journey | TechSpire Solutions",
    description:
      "Discover Vinay Verma's inspiring journey from traditional education to becoming a successful self-taught developer and ethical hacker.",
    type: "profile",
    images: ["/og-about.jpg"],
  },
  twitter: {
    title: "About Vinay Verma - Self-Taught Developer Journey",
    description:
      "From B.N.Lal Vocational Inter College to tech entrepreneur - discover Vinay's inspiring self-taught journey.",
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "About", href: "/about" }]} />
      <AboutPageClient />
    </>
  )
}
