import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRight, Check, ExternalLink, Code, Clock, DollarSign, Briefcase, Shield, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import { getProjectForSaleById, projectsForSale } from "@/utils/projects-data"

// Generate static params for all project IDs
export function generateStaticParams() {
  return (projectsForSale || []).map((project) => ({
    id: project.id,
  }))
}

export default function ProjectForSalePage({ params }: { params: { id: string } }) {
  const project = getProjectForSaleById(params.id)

  if (!project) {
    notFound()
  }

  // Ensure all arrays have default values to prevent mapping errors
  const features = project.features || []
  const galleryImages = project.galleryImages || []
  const technologies = project.technologies || []
  const businessModel = project.businessModel || []

  // Filter related projects safely
  const relatedProjects = (projectsForSale || [])
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title={project.title} description="Ready-to-use project for sale" />

      {/* Project Overview */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden border border-primary/10 mb-8">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Project Overview</h2>
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                  <p className="text-muted-foreground whitespace-pre-line">{project.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className="relative rounded-xl overflow-hidden border border-primary/10 aspect-video"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Business Model</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {businessModel.map((model, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{model}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {project.revenue && (
                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                    <h3 className="text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      Potential Revenue
                    </h3>
                    <p className="text-muted-foreground">{project.revenue}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-primary/10">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <CardTitle className="text-2xl">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Price:</span>
                    <div className="flex items-center gap-2">
                      {project.discountedPrice ? (
                        <>
                          <span className="text-xl font-bold text-primary">${project.discountedPrice}</span>
                          <span className="text-sm text-muted-foreground line-through">${project.price}</span>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-primary">${project.price}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Category:</span>
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Development Time:</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{project.developmentTime}</span>
                    </div>
                  </div>

                  {project.monthlyMaintenance && (
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monthly Maintenance:</span>
                      <span>{project.monthlyMaintenance}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Included Support:</span>
                    <span>{project.includedSupport}</span>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-full">
                      <Link href="/contact?project=purchase">
                        Purchase Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    {project.demoUrl && (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-primary/20 hover:border-primary/50 rounded-full"
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          View Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="bg-primary/5 border-t border-primary/10 flex-col items-start gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Secure payment process</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Code className="h-4 w-4 text-primary" />
                    <span>Full source code included</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Wrench className="h-4 w-4 text-primary" />
                    <span>Customization available</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Related Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">Explore other projects that might interest you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject) => (
              <Card
                key={relatedProject.id}
                className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedProject.imageUrl || "/placeholder.svg"}
                    alt={relatedProject.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="default" className="bg-green-500 text-white border-none">
                      ${relatedProject.discountedPrice || relatedProject.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{relatedProject.title}</CardTitle>
                  <CardDescription>{relatedProject.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href={`/projects/for-sale/${relatedProject.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h2 className="text-3xl font-bold tracking-tight">Interested in This Project?</h2>
            <p className="text-muted-foreground">
              Contact us to discuss purchasing this project or to request customizations to fit your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-300 rounded-full"
              >
                <Link href="/contact?project=purchase">Purchase Now</Link>
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
