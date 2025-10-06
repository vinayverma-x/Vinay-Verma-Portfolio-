import ProjectHubClientPage from "./ProjectHubClientPage"
import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "ProjectHub | TechSpire Solutions",
  description: "A secure marketplace where users can buy and sell digital projects",
}

export default function ProjectHubPage() {
  return <ProjectHubClientPage />
}
