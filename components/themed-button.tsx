import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { forwardRef } from "react"

interface ThemedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  sectionType?: "home" | "about" | "services" | "projects" | "contact"
  href?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  className?: string
  children: React.ReactNode
  external?: boolean
}

const ThemedButton = forwardRef<HTMLButtonElement, ThemedButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      sectionType = "home",
      href,
      icon,
      iconPosition = "right",
      className,
      children,
      external = false,
      ...props
    },
    ref,
  ) => {
    // Determine button classes based on variant and section type
    const buttonClasses = cn(
      "rounded-full transition-all duration-300",
      {
        // Primary variant
        "bg-gradient-to-r from-luxury-gold to-luxury-copper text-white hover:from-luxury-copper hover:to-luxury-gold shadow-md hover:shadow-lg":
          variant === "primary" && !sectionType,
        [`theme-${sectionType}-button`]: variant === "primary" && sectionType,

        // Secondary variant
        "bg-white border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/5 hover:border-luxury-gold/50 shadow-sm hover:shadow-md dark:bg-gray-900 dark:border-luxury-gold/20 dark:hover:bg-luxury-gold/10":
          variant === "secondary",

        // Outline variant
        "border border-luxury-gold/20 text-luxury-gold hover:bg-luxury-gold/5 hover:border-luxury-gold/40":
          variant === "outline",

        // Ghost variant
        "text-luxury-gold hover:bg-luxury-gold/5": variant === "ghost",

        // Link variant
        "p-0 h-auto text-luxury-gold hover:text-luxury-gold/80 underline-offset-4 hover:underline": variant === "link",

        // Size variants
        "h-10 px-4 py-2": size === "default",
        "h-9 px-3 text-sm": size === "sm",
        "h-11 px-6 text-lg": size === "lg",
        "h-10 w-10 p-0": size === "icon",
      },
      className,
    )

    // If href is provided, render as Link
    if (href) {
      return (
        <Button asChild className={buttonClasses} {...props} ref={ref}>
          <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2"
          >
            {icon && iconPosition === "left" && <span className="mr-1">{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span className="ml-1">{icon}</span>}
            {!icon && iconPosition === "right" && variant !== "link" && (
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            )}
          </Link>
        </Button>
      )
    }

    // Otherwise render as button
    return (
      <Button className={buttonClasses} {...props} ref={ref}>
        {icon && iconPosition === "left" && <span className="mr-1">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-1">{icon}</span>}
      </Button>
    )
  },
)

ThemedButton.displayName = "ThemedButton"

export default ThemedButton
