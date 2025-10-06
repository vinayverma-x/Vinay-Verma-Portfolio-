import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { forwardRef } from "react"

interface ThemedCardProps {
  title?: React.ReactNode
  description?: React.ReactNode
  sectionType?: "home" | "about" | "services" | "projects" | "contact"
  className?: string
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  hover?: boolean
  bordered?: boolean
  elevated?: boolean
  glassmorphic?: boolean
}

const ThemedCard = forwardRef<HTMLDivElement, ThemedCardProps>(
  (
    {
      title,
      description,
      sectionType = "home",
      className,
      headerClassName,
      contentClassName,
      footerClassName,
      children,
      footer,
      hover = true,
      bordered = true,
      elevated = true,
      glassmorphic = false,
      ...props
    },
    ref,
  ) => {
    // Determine card classes based on props
    const cardClasses = cn(
      "rounded-xl overflow-hidden transition-all duration-300",
      {
        // Section-specific styling
        [`theme-${sectionType}-card`]: sectionType,

        // Hover effect
        "hover:-translate-y-1": hover,

        // Border styling
        "border border-luxury-gold/10 dark:border-luxury-gold/5": bordered,

        // Elevation
        "shadow-md hover:shadow-lg": elevated,

        // Glassmorphic effect
        "backdrop-blur-sm bg-white/80 dark:bg-gray-900/80": glassmorphic,
      },
      className,
    )

    return (
      <Card className={cardClasses} ref={ref} {...props}>
        {(title || description) && (
          <CardHeader className={headerClassName}>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent className={contentClassName}>{children}</CardContent>
        {footer && <CardFooter className={footerClassName}>{footer}</CardFooter>}
      </Card>
    )
  },
)

ThemedCard.displayName = "ThemedCard"

export default ThemedCard
