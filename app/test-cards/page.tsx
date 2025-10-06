import ThemedSection from "@/components/themed-section"
import ThemedCard from "@/components/themed-card"
import ThemedButton from "@/components/themed-button"
import ProjectCard from "@/components/project-card"
import { Badge } from "@/components/ui/badge"

export default function TestCardsPage() {
  // Sample project for testing
  const sampleProject = {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced product filtering and secure checkout.",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=600&width=800&text=E-Commerce%20Platform",
    link: "/projects/ecommerce-platform",
    featured: true,
    longDescription:
      "Built a scalable e-commerce solution with advanced product filtering. Implemented secure payment processing with Stripe. Created responsive design for all devices.",
    completionDate: "2023",
  }

  return (
    <div className="min-h-screen">
      <ThemedSection sectionType="home" className="py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Component Test Page</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Themed Cards</h2>
            <div className="space-y-6">
              <ThemedCard
                title="Home Card"
                description="This is a card with home theme"
                sectionType="home"
                footer={
                  <ThemedButton variant="primary" sectionType="home">
                    Home Button
                  </ThemedButton>
                }
              >
                <p className="text-muted-foreground">Card content goes here</p>
              </ThemedCard>

              <ThemedCard
                title="About Card"
                description="This is a card with about theme"
                sectionType="about"
                footer={
                  <ThemedButton variant="primary" sectionType="about">
                    About Button
                  </ThemedButton>
                }
              >
                <p className="text-muted-foreground">Card content goes here</p>
              </ThemedCard>

              <ThemedCard
                title="Services Card"
                description="This is a card with services theme"
                sectionType="services"
                footer={
                  <ThemedButton variant="primary" sectionType="services">
                    Services Button
                  </ThemedButton>
                }
              >
                <p className="text-muted-foreground">Card content goes here</p>
              </ThemedCard>

              <ThemedCard
                title="Projects Card"
                description="This is a card with projects theme"
                sectionType="projects"
                footer={
                  <ThemedButton variant="primary" sectionType="projects">
                    Projects Button
                  </ThemedButton>
                }
              >
                <p className="text-muted-foreground">Card content goes here</p>
              </ThemedCard>

              <ThemedCard
                title="Contact Card"
                description="This is a card with contact theme"
                sectionType="contact"
                footer={
                  <ThemedButton variant="primary" sectionType="contact">
                    Contact Button
                  </ThemedButton>
                }
              >
                <p className="text-muted-foreground">Card content goes here</p>
              </ThemedCard>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Themed Buttons</h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Primary Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <ThemedButton variant="primary">Default</ThemedButton>
                  <ThemedButton variant="primary" sectionType="home">
                    Home
                  </ThemedButton>
                  <ThemedButton variant="primary" sectionType="about">
                    About
                  </ThemedButton>
                  <ThemedButton variant="primary" sectionType="services">
                    Services
                  </ThemedButton>
                  <ThemedButton variant="primary" sectionType="projects">
                    Projects
                  </ThemedButton>
                  <ThemedButton variant="primary" sectionType="contact">
                    Contact
                  </ThemedButton>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Secondary Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <ThemedButton variant="secondary">Secondary</ThemedButton>
                  <ThemedButton variant="outline">Outline</ThemedButton>
                  <ThemedButton variant="ghost">Ghost</ThemedButton>
                  <ThemedButton variant="link">Link</ThemedButton>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Button Sizes</h3>
                <div className="flex flex-wrap gap-3 items-center">
                  <ThemedButton variant="primary" size="sm">
                    Small
                  </ThemedButton>
                  <ThemedButton variant="primary" size="default">
                    Default
                  </ThemedButton>
                  <ThemedButton variant="primary" size="lg">
                    Large
                  </ThemedButton>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Link Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <ThemedButton variant="primary" href="#" external>
                    External Link
                  </ThemedButton>
                  <ThemedButton variant="secondary" href="#">
                    Internal Link
                  </ThemedButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Project Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProjectCard project={sampleProject} variant="default" />
          <div className="lg:col-span-2">
            <ProjectCard project={sampleProject} variant="featured" />
          </div>
          <ProjectCard project={sampleProject} variant="minimal" />
          <div className="lg:col-span-2">
            <ProjectCard project={sampleProject} variant="list" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Professional Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="professional-heading">Professional Heading</h3>
            <p className="professional-gradient-text text-2xl">Gradient Text</p>
            <div className="professional-card p-4">
              <p>Professional Card</p>
            </div>
            <button className="professional-button-primary px-4 py-2 rounded-md">Professional Button</button>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge className="theme-badge">Theme Badge</Badge>
              <Badge className="bg-luxury-gold/10 text-luxury-gold">Luxury Badge</Badge>
              <Badge className="bg-primary/10 text-primary">Primary Badge</Badge>
            </div>

            <div className="glass-effect p-4 rounded-xl">
              <p>Glass Effect</p>
            </div>

            <div className="gradient-gold text-white p-4 rounded-xl">
              <p>Gold Gradient</p>
            </div>

            <div className="gradient-gold-subtle p-4 rounded-xl">
              <p>Subtle Gold Gradient</p>
            </div>
          </div>
        </div>
      </ThemedSection>
    </div>
  )
}
