import { Skeleton } from "@/components/ui/skeleton"
import PageHeader from "@/components/page-header"

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="My Projects"
        description="Explore my portfolio of web development, cybersecurity, and digital solutions"
      />

      {/* Featured Projects Skeleton */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="space-y-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Skeleton className="h-10 w-64 mx-auto" />
              <div className="w-20 h-1 bg-primary/30 mx-auto"></div>
              <Skeleton className="h-5 w-full max-w-md mx-auto" />
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-primary/10 bg-background/80 backdrop-blur-sm overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/2 relative">
                      <Skeleton className="h-64 md:h-full w-full" />
                    </div>
                    <div className="md:w-1/2 p-6 flex flex-col">
                      <div className="mb-2 flex gap-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                      <Skeleton className="h-8 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-20 w-full mb-6" />
                      <Skeleton className="h-10 w-32 mt-auto" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Skeleton */}
      <section className="py-12">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <Skeleton className="h-10 w-48 mx-auto" />
            <div className="w-20 h-1 bg-primary/30 mx-auto"></div>
            <Skeleton className="h-5 w-full max-w-md mx-auto" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="flex-shrink-0">
              <Skeleton className="h-10 w-64" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-primary/10 bg-background/80 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative h-56">
                    <Skeleton className="h-full w-full" />
                  </div>
                  <div className="p-6 flex flex-col">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <Skeleton className="h-10 w-full mt-auto" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary/5 p-8 rounded-lg border border-primary/20">
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-4 w-full max-w-lg mx-auto" />
            <Skeleton className="h-10 w-32 mx-auto mt-4" />
          </div>
        </div>
      </section>
    </div>
  )
}
