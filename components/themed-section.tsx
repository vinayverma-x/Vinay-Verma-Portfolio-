import type React from "react"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ThemedSectionProps {
  sectionType?: "home" | "about" | "services" | "projects" | "contact"
  className?: string
  children: React.ReactNode
  withContainer?: boolean
  withBlobs?: boolean
  withGrid?: boolean
  id?: string
}

const ThemedSection = forwardRef<HTMLElement, ThemedSectionProps>(
  (
    {
      sectionType = "home",
      className,
      children,
      withContainer = true,
      withBlobs = true,
      withGrid = true,
      id,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "relative py-16 md:py-24 overflow-hidden",
          {
            [`theme-${sectionType}`]: sectionType,
          },
          className,
        )}
        {...props}
      >
        {/* Background elements */}
        {(withBlobs || withGrid) && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {withBlobs && (
              <>
                <div className="blob w-[600px] h-[600px] -left-[300px] top-[20%] opacity-10 dark:opacity-5 animate-blob"></div>
                <div className="blob w-[500px] h-[500px] -right-[250px] bottom-[10%] opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
              </>
            )}
            {withGrid && (
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
            )}
          </div>
        )}

        {/* Content */}
        {withContainer ? <div className="container relative z-10">{children}</div> : children}
      </section>
    )
  },
)

ThemedSection.displayName = "ThemedSection"

export default ThemedSection
