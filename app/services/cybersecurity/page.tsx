import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Cybersecurity Services | TechSpire Solutions",
  description: "Protect your digital assets with comprehensive security solutions",
}

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Cybersecurity Services"
        description="Protect your digital assets with comprehensive security solutions"
      />

      {/* Service Overview */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Comprehensive Security Solutions</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-muted-foreground">
                I provide expert cybersecurity services to help businesses identify and fix security vulnerabilities in
                their websites, applications, and networks. My approach combines technical expertise with practical
                solutions to protect your digital assets from cyber threats.
              </p>
              <p className="text-muted-foreground">
                Whether you need a security audit, penetration testing, or implementation of security best practices, I
                have the skills and experience to enhance your organization's security posture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 transition-all duration-300">
                  <Link href="/contact">
                    Get a Security Assessment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <a href="https://wa.me/919219967205" target="_blank" rel="noopener noreferrer">
                    Contact on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-primary/10">
              <Image
                src="/cybersecurity.jpg"
                alt="Cybersecurity"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Services Offered</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">Comprehensive cybersecurity services to protect your digital assets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Penetration Testing</CardTitle>
                <CardDescription>Identify vulnerabilities before hackers do</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Web application penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Network penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">API security testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Detailed vulnerability reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <CardTitle>Security Audits</CardTitle>
                <CardDescription>Comprehensive assessment of your security posture</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Code security review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Infrastructure security assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Security policy evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Compliance gap analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <CardTitle>Security Implementation</CardTitle>
                <CardDescription>Implement robust security measures</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Secure authentication systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Data encryption implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Security monitoring setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Incident response planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Affordable Pricing</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">Transparent pricing options to suit your security needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-500 border border-primary/10 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-muted px-3 py-1 text-xs font-medium rounded-bl-lg">Basic</div>
              <CardHeader className="pt-10">
                <CardTitle className="text-2xl">Basic Security Audit</CardTitle>
                <div className="mt-4 flex items-baseline text-primary">
                  <span className="text-4xl font-extrabold tracking-tight">₹20,000</span>
                  <span className="ml-1 text-muted-foreground">onwards</span>
                </div>
                <CardDescription className="mt-4">Essential security assessment for small websites</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Vulnerability scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Basic penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Security configuration review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Detailed report with recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">1 follow-up consultation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                  <a
                    href="https://wa.me/919219967205?text=I'm%20interested%20in%20the%20Basic%20Security%20Audit%20package"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-primary/30 hover:border-primary/50 relative overflow-hidden scale-105">
              <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-xs font-medium text-white rounded-bl-lg">
                Popular
              </div>
              <CardHeader className="pt-10">
                <CardTitle className="text-2xl">Comprehensive Security</CardTitle>
                <div className="mt-4 flex items-baseline text-primary">
                  <span className="text-4xl font-extrabold tracking-tight">₹40,000</span>
                  <span className="ml-1 text-muted-foreground">onwards</span>
                </div>
                <CardDescription className="mt-4">Complete security assessment for business websites</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Advanced vulnerability scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">In-depth penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Code security review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Security implementation assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">3 months of security monitoring</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                  <a
                    href="https://wa.me/919219967205?text=I'm%20interested%20in%20the%20Comprehensive%20Security%20package"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border border-primary/10 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-muted px-3 py-1 text-xs font-medium rounded-bl-lg">
                Advanced
              </div>
              <CardHeader className="pt-10">
                <CardTitle className="text-2xl">Enterprise Security</CardTitle>
                <div className="mt-4 flex items-baseline text-primary">
                  <span className="text-4xl font-extrabold tracking-tight">₹75,000</span>
                  <span className="ml-1 text-muted-foreground">onwards</span>
                </div>
                <CardDescription className="mt-4">
                  Advanced security for complex applications and e-commerce
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Comprehensive security audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Advanced penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Security architecture review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Complete security implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">6 months of security monitoring</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                  <a
                    href="https://wa.me/919219967205?text=I'm%20interested%20in%20the%20Enterprise%20Security%20package"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8 text-muted-foreground">
            <p>
              Need a custom security solution?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact me
              </Link>{" "}
              for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">What my clients say about my cybersecurity services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">VP</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Vikram Patel</CardTitle>
                    <CardDescription>Bangalore, India</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Vinay conducted a thorough security audit of our e-commerce platform and identified several critical
                  vulnerabilities that we were unaware of. His detailed report and implementation guidance helped us
                  secure our platform effectively. Highly recommended!"
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">MJ</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Michael Johnson</CardTitle>
                    <CardDescription>London, UK</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "After experiencing a security breach, we hired Vinay to assess our systems and implement better
                  security measures. His expertise in cybersecurity is impressive, and he provided practical solutions
                  that were easy to implement. Our systems are now much more secure."
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">SS</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sanjay Sharma</CardTitle>
                    <CardDescription>Delhi, India</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Vinay's penetration testing service was eye-opening. He found vulnerabilities in our web application
                  that our internal team had missed. His approach is methodical and his explanations are clear, making
                  it easy for us to understand and address the issues."
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">AR</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Amanda Rodriguez</CardTitle>
                    <CardDescription>Toronto, Canada</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "We engaged Vinay for a security audit of our financial application. His attention to detail and
                  thorough approach uncovered several potential security risks. The remediation plan he provided was
                  clear and actionable. We now feel much more confident about our application's security."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Secure Your Digital Assets?</h2>
            <p className="text-muted-foreground">
              Let's discuss your security requirements and create a comprehensive plan to protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
                <Link href="/contact">Get a Security Assessment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <a href="https://wa.me/919219967205" target="_blank" rel="noopener noreferrer">
                  WhatsApp Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
