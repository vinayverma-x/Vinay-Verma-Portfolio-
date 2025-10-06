import Head from "next/head"
import { StructuredData } from "./structured-data"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: "website" | "article" | "profile"
  noIndex?: boolean
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
  keywords = [],
  author = "Vinay Verma",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOHeadProps) {
  const siteTitle = title
    ? `${title} | Vinay Verma - Full-Stack Developer & Ethical Hacker`
    : "TechSpire Solutions | Vinay Verma - Full-Stack Developer | Ethical Hacker | SEO Expert"

  const siteDescription =
    description ||
    "TechSpire Solutions by Vinay Verma offers comprehensive digital services including web development, cybersecurity, SEO, digital marketing, app development, ethical hacking, and social engagement."

  const siteCanonical = canonical ? `https://techspiresolutions.in${canonical}` : "https://techspiresolutions.in"
  const siteOgImage = ogImage || "https://techspiresolutions.in/og.jpg"

  const allKeywords = [
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
    ...keywords,
    ...tags,
  ].join(", ")

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={allKeywords} />
        <meta name="author" content={author} />
        <meta name="creator" content="Vinay Verma" />
        <meta name="publisher" content="TechSpire Solutions" />
        <link rel="canonical" href={siteCanonical} />

        {/* Viewport and Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TechSpire Solutions" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={siteCanonical} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteOgImage} />
        <meta property="og:image:alt" content="TechSpire Solutions - Vinay Verma Portfolio" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="TechSpire Solutions" />
        <meta property="og:locale" content="en_US" />

        {/* Article specific Open Graph tags */}
        {ogType === "article" && (
          <>
            <meta property="article:author" content={author} />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {section && <meta property="article:section" content={section} />}
            {tags.map((tag, index) => (
              <meta key={index} property="article:tag" content={tag} />
            ))}
          </>
        )}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@VinayVermaX" />
        <meta name="twitter:creator" content="@VinayVermaX" />
        <meta name="twitter:url" content={siteCanonical} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteOgImage} />
        <meta name="twitter:image:alt" content="TechSpire Solutions - Vinay Verma Portfolio" />

        {/* Additional SEO Meta Tags */}
        <meta
          name="robots"
          content={
            noIndex
              ? "noindex, nofollow"
              : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          }
        />
        <meta
          name="googlebot"
          content={
            noIndex
              ? "noindex, nofollow"
              : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          }
        />
        <meta name="bingbot" content={noIndex ? "noindex, nofollow" : "index, follow"} />

        {/* Language and Geographic */}
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.country" content="IN" />
        <meta name="geo.placename" content="Uttar Pradesh, India" />

        {/* Theme and App */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="application-name" content="TechSpire Solutions" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Head>

      {/* Structured Data */}
      <StructuredData type="person" />
      <StructuredData type="organization" />
      <StructuredData type="website" />
    </>
  )
}
