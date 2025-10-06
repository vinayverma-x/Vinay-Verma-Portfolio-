import type { Metadata } from "next"
import PricingPageClient from "./PricingPageClient"

export const metadata: Metadata = {
  title: "Pricing | TechSpire Solutions",
  description: "Transparent pricing for all our services",
}

export default function PricingPage() {
  return <PricingPageClient />
}
