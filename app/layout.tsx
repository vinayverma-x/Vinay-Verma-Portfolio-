import type React from "react"
import type { Metadata, Viewport } from "next"
import ClientLayout from "./client"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://techspiresolutions.in"),
  title: {
    template: "%s | Vinay Verma - Full-Stack Developer & Ethical Hacker",
    default: "TechSpire Solutions | Vinay Verma - Full-Stack Developer | Ethical Hacker | SEO Expert",
  },
  description:
    "TechSpire Solutions by Vinay Verma offers comprehensive digital services including web development, cybersecurity, SEO, digital marketing, app development, ethical hacking, and social engagement. Self-taught developer from Uttar Pradesh, India.",
  keywords: [
    "Vinay Verma",
    "TechSpire Solutions",
    "Full-Stack Developer",
    "Ethical Hacker",
    "SEO Expert",
    "Web Development",
    "Cybersecurity",
    "Digital Marketing",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "JavaScript Expert",
    "Uttar Pradesh Developer",
    "Indian Developer",
    "Freelance Developer",
    "Security Consultant",
    "Web Designer",
    "App Developer",
    "B.N.Lal Vocational Inter College",
    "Self-taught programmer",
    "Online learning",
    "Apna College",
    "College dropout success",
    "Tech entrepreneur",
  ],
  authors: [{ name: "Vinay Verma", url: "https://techspiresolutions.in" }],
  creator: "Vinay Verma",
  publisher: "TechSpire Solutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "hi-IN": "/hi",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techspiresolutions.in",
    siteName: "TechSpire Solutions",
    title: "TechSpire Solutions | Vinay Verma - Full-Stack Developer | Ethical Hacker | SEO Expert",
    description:
      "TechSpire Solutions by Vinay Verma offers comprehensive digital services including web development, cybersecurity, SEO, digital marketing, app development, ethical hacking, and social engagement. Self-taught developer from Uttar Pradesh, India.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "TechSpire Solutions - Vinay Verma Portfolio",
        type: "image/jpeg",
      },
      {
        url: "/og-square.jpg",
        width: 1200,
        height: 1200,
        alt: "TechSpire Solutions - Vinay Verma",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSpire Solutions | Vinay Verma - Full-Stack Developer & Ethical Hacker",
    description:
      "Self-taught Full-Stack Developer & Ethical Hacker from Uttar Pradesh, India. Specializing in modern web development and cybersecurity solutions.",
    creator: "@VinayVermaX",
    site: "@VinayVermaX",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  generator: "Next.js",
  applicationName: "TechSpire Solutions",
  appleWebApp: {
    capable: true,
    title: "TechSpire Solutions",
    statusBarStyle: "default",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
