import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Shield, Search, Cpu, Smartphone, Database } from "lucide-react"
import PageHeader from "@/components/page-header"
import type { Metadata, Viewport } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Digital Services - Web Development, Cybersecurity & SEO",
  description:
    "Professional digital services by Vinay Verma including custom web development, cybersecurity consulting, ethical hacking, SEO optimization, and digital marketing solutions for businesses worldwide.",
  keywords: [
    "web development services",
    "cybersecurity consulting",
    "ethical hacking services",
    "SEO optimization",
    "digital marketing",
    "custom web applications",
    "security audit",
    "penetration testing",
    "React development",
    "Next.js development",
    "e-commerce development",
    "API development",
    "database design",
    "cloud deployment",
  ],
  openGraph: {
    title: "Digital Services - Web Development, Cybersecurity & SEO | TechSpire Solutions",
    description:
      "Professional digital services including web development, cybersecurity, and SEO by expert developer Vinay Verma.",
    type: "website",
    images: ["/og-services.jpg"],
  },
  twitter: {
    title: "Digital Services - Web Development, Cybersecurity & SEO",
    description: "Professional digital services by Vinay Verma - web development, cybersecurity, and SEO solutions.",
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={[{ name: "Services", href: "/services" }]} />
      <PageHeader title="My Services" description="Comprehensive solutions for your digital needs" />

      {/* Services Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>Custom websites and web applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I build responsive, high-performance websites and web applications using modern technologies like
                  React, Next.js, and Node.js. My solutions are tailored to meet your specific business needs and
                  provide an exceptional user experience.
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Custom website development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Web application development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>E-commerce solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Content management systems</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="group mt-2 w-full bg-transparent">
                  <Link href="/services/web-development">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription>Security audits and penetration testing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I help businesses identify and fix security vulnerabilities in their websites and applications through
                  comprehensive security audits and penetration testing. Protect your digital assets and customer data
                  from cyber threats.
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Security audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Vulnerability assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Security best practices implementation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="group mt-2 w-full bg-transparent">
                  <Link href="/services/cybersecurity">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SEO Optimization</CardTitle>
                <CardDescription>Improve your online visibility</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I help businesses improve their search engine rankings and online visibility through comprehensive SEO
                  strategies. Increase your organic traffic and reach more potential customers with effective SEO
                  techniques.
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>On-page SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Off-page SEO strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Keyword research and analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>SEO performance tracking</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="group mt-2 w-full bg-transparent">
                  <Link href="/services/seo-optimization">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Integration</CardTitle>
                <CardDescription>Enhance your applications with AI capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I help businesses integrate AI capabilities into their applications to enhance user experiences,
                  automate processes, and gain valuable insights from data. Leverage the power of AI to stay ahead of
                  the competition.
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Chatbot development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>AI-powered content generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Data analysis and insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Process automation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="group mt-2 w-full bg-transparent">
                  <Link href="/services/ai-integration">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mobile App Development</CardTitle>
                <CardDescription>Cross-platform mobile applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I develop cross-platform mobile applications that work seamlessly on both iOS and Android devices.
                  Reach your mobile audience with high-performance, feature-rich applications that provide an
                  exceptional user experience.
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>React Native development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Flutter development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Native Android development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>App store submission and optimization</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="group mt-2 w-full bg-transparent">
                  <Link href="/services/mobile-app-development">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Database Design & Management</CardTitle>
                <CardDescription>Efficient data storage and retrieval solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I design and implement efficient database solutions that ensure optimal data storage, retrieval, and
                  management. From relational databases to NoSQL solutions, I help you choose and implement the right
                  database for your needs.
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Database design and architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Data migration and integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Database security implementation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="group mt-2 w-full bg-transparent">
                  <Link href="/services/database-design">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">My Work Process</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">A structured approach to delivering high-quality solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <span className="text-xl font-bold text-primary">01</span>
              </div>
              <h3 className="text-xl font-semibold">Discovery</h3>
              <p className="text-muted-foreground">
                Understanding your requirements, goals, and challenges through detailed discussions and research.
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <span className="text-xl font-bold text-primary">02</span>
              </div>
              <h3 className="text-xl font-semibold">Planning</h3>
              <p className="text-muted-foreground">
                Creating a detailed roadmap and strategy for implementing the solution based on your requirements.
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <span className="text-xl font-bold text-primary">03</span>
              </div>
              <h3 className="text-xl font-semibold">Development</h3>
              <p className="text-muted-foreground">
                Building the solution using the latest technologies and best practices to ensure high quality and
                performance.
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <span className="text-xl font-bold text-primary">04</span>
              </div>
              <h3 className="text-xl font-semibold">Delivery</h3>
              <p className="text-muted-foreground">
                Testing, refining, and delivering the final solution, along with documentation and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Contact me today to discuss your project requirements and how I can help you achieve your goals.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
