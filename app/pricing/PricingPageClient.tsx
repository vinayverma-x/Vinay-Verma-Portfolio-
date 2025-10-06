"use client"

import type { Viewport } from "next"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, X, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"
import { services } from "@/utils/services-data"
import { cn } from "@/lib/utils"
import FloatingElement from "@/components/floating-element"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function PricingPageClient() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="blob w-[700px] h-[700px] -left-[350px] -top-[200px] opacity-10"></div>
      <div className="blob w-[600px] h-[600px] -right-[300px] bottom-[10%] opacity-10"></div>

      {[...Array(5)].map((_, i) => (
        <FloatingElement
          key={i}
          className="absolute rounded-full bg-primary/5"
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
          delay={i * 0.5}
          duration={10 + Math.random() * 10}
          distance={20 + Math.random() * 30}
        />
      ))}

      <PageHeader title="Our Pricing" description="Transparent pricing for all our services" />

      <div className="container relative z-10">
        <div className="flex justify-center mb-12">
          <div className="bg-muted/30 p-1 rounded-full inline-flex">
            <Button
              variant={billingCycle === "monthly" ? "default" : "ghost"}
              className={cn("rounded-full text-sm", billingCycle === "monthly" ? "bg-primary text-white" : "")}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === "annual" ? "default" : "ghost"}
              className={cn("rounded-full text-sm", billingCycle === "annual" ? "bg-primary text-white" : "")}
              onClick={() => setBillingCycle("annual")}
            >
              Annual (Save 20%)
            </Button>
          </div>
        </div>

        <Tabs defaultValue={services[0].id} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-primary/20 data-[state=active]:border-primary"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="space-y-8">
              <div className="text-center space-y-4 max-w-3xl mx-auto mb-8">
                <h2 className="text-3xl font-bold tracking-tight">{service.title} Pricing</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
                <p className="text-muted-foreground">{service.longDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.plans.map((plan) => {
                  // Calculate annual price (20% discount)
                  const originalPrice = Number.parseInt(plan.price.replace(/[^\d]/g, ""))
                  const annualPrice = Math.round(originalPrice * 0.8)
                  const displayPrice = billingCycle === "annual" ? `₹${annualPrice}` : plan.price

                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "group relative overflow-hidden rounded-xl border transition-all duration-500",
                        plan.popular
                          ? "border-2 border-primary/30 hover:border-primary/50 scale-105 shadow-lg"
                          : "border-primary/10 hover:border-primary/30",
                      )}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-xs font-medium text-white rounded-bl-lg">
                          Popular
                        </div>
                      )}
                      {!plan.popular && (
                        <div className="absolute top-0 right-0 bg-muted px-3 py-1 text-xs font-medium rounded-bl-lg">
                          {plan.id.split("-")[0].charAt(0).toUpperCase() + plan.id.split("-")[0].slice(1)}
                        </div>
                      )}
                      <CardHeader className="pt-10">
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <div className="mt-4 flex items-baseline text-primary">
                          <span className="text-4xl font-extrabold tracking-tight">{displayPrice}</span>
                          <span className="ml-1 text-muted-foreground">onwards</span>
                        </div>
                        <CardDescription className="mt-4">{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                              )}
                              <div>
                                <span
                                  className={cn("text-sm font-medium", feature.included ? "" : "text-muted-foreground")}
                                >
                                  {feature.title}
                                </span>
                                {feature.description && (
                                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 rounded-full"
                        >
                          <a
                            href={`https://wa.me/919219967205?text=I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package%20with%20${billingCycle}%20billing`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {plan.buttonText || "Get Started"}
                          </a>
                        </Button>
                      </CardFooter>
                    </motion.div>
                  )
                })}
              </div>

              <div className="text-center mt-8 text-muted-foreground">
                <p>
                  Need a custom solution?{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    Contact me
                  </Link>{" "}
                  for a personalized quote.
                </p>
              </div>

              <div className="mt-16">
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-8">
                  <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
                  <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                  {service.faqs.map((faq, index) => (
                    <Card key={index} className="hover:shadow-md transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-start gap-2">
                          <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary/5 p-8 rounded-lg border border-primary/20">
                  <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
                  <p className="text-muted-foreground">
                    Contact me today to discuss your {service.title.toLowerCase()} requirements and how I can help you
                    achieve your goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 transition-all duration-300 rounded-full"
                    >
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-full"
                    >
                      <a href="https://wa.me/919219967205" target="_blank" rel="noopener noreferrer">
                        WhatsApp Me
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Comparison Table */}
      <section className="py-16 bg-muted/30 relative z-10 mt-16">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Service Comparison</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">Compare our services to find the perfect fit for your needs</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-primary/5 border border-primary/10 rounded-tl-lg">Service</th>
                  <th className="p-4 text-center bg-primary/5 border border-primary/10">Starting Price</th>
                  <th className="p-4 text-center bg-primary/5 border border-primary/10">Delivery Time</th>
                  <th className="p-4 text-center bg-primary/5 border border-primary/10">Support</th>
                  <th className="p-4 text-center bg-primary/5 border border-primary/10 rounded-tr-lg">Best For</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={service.id} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-4 border border-primary/10 font-medium">{service.title}</td>
                    <td className="p-4 border border-primary/10 text-center">From {service.plans[0].price}</td>
                    <td className="p-4 border border-primary/10 text-center">
                      {service.id === "web-development"
                        ? "2-8 weeks"
                        : service.id === "cybersecurity"
                          ? "1-4 weeks"
                          : service.id === "seo-optimization"
                            ? "Ongoing"
                            : service.id === "ai-integration"
                              ? "2-6 weeks"
                              : service.id === "mobile-app-development"
                                ? "4-12 weeks"
                                : "2-6 weeks"}
                    </td>
                    <td className="p-4 border border-primary/10 text-center">
                      {service.plans[0].features.find((f) => f.title.includes("support"))?.description || "Included"}
                    </td>
                    <td className="p-4 border border-primary/10 text-center">
                      {service.id === "web-development"
                        ? "Businesses needing online presence"
                        : service.id === "cybersecurity"
                          ? "Security-conscious organizations"
                          : service.id === "seo-optimization"
                            ? "Businesses wanting more visibility"
                            : service.id === "ai-integration"
                              ? "Forward-thinking companies"
                              : service.id === "mobile-app-development"
                                ? "Reaching mobile users"
                                : "Data-driven businesses"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 gradient-border p-8 bg-background/50 backdrop-blur-md">
            <h2 className="text-3xl font-bold tracking-tight">Need a Custom Quote?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">
              Contact me for a personalized quote tailored to your specific requirements and budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <Button
                asChild
                size="lg"
                className="mt-4 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-4 rounded-full border-primary/20 hover:border-primary/50"
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
