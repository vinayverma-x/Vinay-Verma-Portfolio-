import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check, X, HelpCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"
import { getServiceBySlug, services } from "@/utils/services-data"
import { cn } from "@/lib/utils"

// Generate static params for all service slugs
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title={service.title} description={service.longDescription} />

      {/* Service Overview */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Comprehensive {service.title} Solutions</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-muted-foreground">{service.longDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 transition-all duration-300 rounded-full shadow-md hover:shadow-lg"
                >
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-full"
                >
                  <a href="https://wa.me/919219967205" target="_blank" rel="noopener noreferrer">
                    Contact on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-primary/10">
              {service.heroImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl text-primary">{service.icon.charAt(0)}</span>
                  </div>
                </div>
              )}
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
            <p className="text-muted-foreground">
              Comprehensive {service.title.toLowerCase()} services to meet all your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
              >
                <CardHeader className="space-y-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Professional {feature.toLowerCase()} services tailored to your specific business needs and
                    requirements.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Affordable Pricing</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">Transparent pricing options to suit your budget and requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.plans.map((plan) => (
              <Card
                key={plan.id}
                className={cn(
                  "group hover:shadow-xl transition-all duration-500 border relative overflow-hidden",
                  plan.popular
                    ? "border-2 border-primary/30 hover:border-primary/50 scale-105"
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
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
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
                          <span className={cn("text-sm font-medium", feature.included ? "" : "text-muted-foreground")}>
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
                      href={`https://wa.me/919219967205?text=I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.buttonText || "Get Started"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">
              Answers to common questions about our {service.title.toLowerCase()} services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-1 mb-8">
                <TabsTrigger value="all" className="text-base py-3">
                  All Questions
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">
              What our clients say about our {service.title.toLowerCase()} services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">RK</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Rahul Kumar</CardTitle>
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
                  "The {service.title.toLowerCase()} services provided by Vinay exceeded all my expectations. The
                  attention to detail and technical expertise are impressive. I highly recommend these services to
                  anyone looking for professional solutions."
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">AP</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ananya Patel</CardTitle>
                    <CardDescription>Mumbai, India</CardDescription>
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
                  "Working with Vinay on our {service.title.toLowerCase()} project was a pleasure. His technical skills
                  and problem-solving abilities are outstanding. He was always responsive and made the process smooth
                  and efficient."
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
            <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Contact me today to discuss your {service.title.toLowerCase()} requirements and how I can help you achieve
              your goals.
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
      </section>
    </div>
  )
}
