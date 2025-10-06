import Script from "next/script"

interface StructuredDataProps {
  type: "person" | "organization" | "website" | "article" | "breadcrumb"
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vinay Verma",
          alternateName: "VinayVermaX",
          description:
            "Full-Stack Developer, Ethical Hacker, and SEO Expert specializing in modern web development and cybersecurity solutions",
          url: "https://techspiresolutions.in",
          image: "https://techspiresolutions.in/og.jpg",
          sameAs: [
            "https://github.com/vinayverma-x",
            "https://linkedin.com/in/vinayvermax",
            "https://x.com/VinayVermaX",
            "https://instagram.com/vinayverma.0",
          ],
          jobTitle: "Full-Stack Developer & Ethical Hacker",
          worksFor: {
            "@type": "Organization",
            name: "TechSpire Solutions",
          },
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "B.N.Lal Vocational Inter College",
          },
          knowsAbout: [
            "Web Development",
            "Cybersecurity",
            "Ethical Hacking",
            "SEO",
            "Digital Marketing",
            "React.js",
            "Next.js",
            "Node.js",
            "Python",
            "JavaScript",
          ],
          email: "vinay@techspiresolutions.in",
          telephone: "+91-9876543210",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Uttar Pradesh",
            addressCountry: "India",
          },
        }

      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TechSpire Solutions",
          alternateName: "TechSpire",
          url: "https://techspiresolutions.in",
          logo: "https://techspiresolutions.in/og.jpg",
          image: "https://techspiresolutions.in/og.jpg",
          description: "Professional web development, cybersecurity, and digital marketing services by Vinay Verma",
          founder: {
            "@type": "Person",
            name: "Vinay Verma",
          },
          foundingDate: "2022",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Uttar Pradesh",
            addressCountry: "India",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9876543210",
            contactType: "customer service",
            email: "vinay@techspiresolutions.in",
          },
          sameAs: [
            "https://github.com/vinayverma-x",
            "https://linkedin.com/in/vinayvermax",
            "https://x.com/VinayVermaX",
          ],
          serviceArea: {
            "@type": "Country",
            name: "India",
          },
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Web Development",
                  description: "Custom web development using modern technologies",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cybersecurity Services",
                  description: "Ethical hacking and security auditing services",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO Optimization",
                  description: "Search engine optimization and digital marketing",
                },
              },
            ],
          },
        }

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "TechSpire Solutions - Vinay Verma Portfolio",
          alternateName: "Vinay Verma Portfolio",
          url: "https://techspiresolutions.in",
          description: "Professional portfolio of Vinay Verma - Full-Stack Developer, Ethical Hacker, and SEO Expert",
          publisher: {
            "@type": "Person",
            name: "Vinay Verma",
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://techspiresolutions.in/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
          mainEntity: {
            "@type": "Person",
            name: "Vinay Verma",
          },
        }

      case "breadcrumb":
        return data

      default:
        return {}
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <StructuredData type="breadcrumb" data={breadcrumbData} />
}
