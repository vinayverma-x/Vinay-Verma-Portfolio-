import { Skeleton } from "@/components/ui/skeleton"
import PageHeader from "@/components/page-header"

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="About Us" description="Learn more about TechSpire Solutions and our journey" />

      {/* About Section Skeleton */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <Skeleton className="rounded-lg h-[400px] w-full" />
            </div>
            <div className="flex-1 space-y-6">
              <Skeleton className="h-8 w-48" />
              <div className="w-20 h-1 bg-primary/30"></div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Tabs Skeleton */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <Skeleton className="h-8 w-64 mx-auto" />
            <div className="w-20 h-1 bg-primary/30 mx-auto"></div>
            <Skeleton className="h-4 w-full max-w-md mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-12 w-full mb-6" />

            <div className="space-y-6">
              <Skeleton className="h-64 w-full rounded-lg" />
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
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
