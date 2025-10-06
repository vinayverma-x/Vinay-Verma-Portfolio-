import { Skeleton } from "@/components/ui/skeleton"
import PageHeader from "@/components/page-header"

export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="My Services" description="Comprehensive solutions for your digital needs" />

      {/* Services Grid Skeleton */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-primary/10 bg-background/80 backdrop-blur-sm overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-6 w-40" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </div>
                    <Skeleton className="h-20 w-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                    <Skeleton className="h-10 w-full mt-4" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Process Section Skeleton */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <Skeleton className="h-8 w-48 mx-auto" />
            <div className="w-20 h-1 bg-primary/30 mx-auto"></div>
            <Skeleton className="h-4 w-full max-w-md mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="text-center space-y-4">
                  <Skeleton className="h-16 w-16 rounded-full mx-auto" />
                  <Skeleton className="h-6 w-32 mx-auto" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-16">
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
