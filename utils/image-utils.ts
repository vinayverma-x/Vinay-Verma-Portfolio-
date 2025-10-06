// Professional project categories
const projectCategories = [
  "web-development",
  "mobile-app",
  "dashboard",
  "analytics",
  "ecommerce",
  "portfolio",
  "business",
  "startup",
  "security",
]

// Professional color schemes
const colorSchemes = ["blue", "purple", "cyan", "indigo", "teal", "green", "emerald", "orange", "amber", "rose"]

// Professional image types
const imageTypes = [
  "abstract",
  "technology",
  "business",
  "workspace",
  "code",
  "design",
  "analytics",
  "security",
  "development",
]

// Function to generate a professional project image URL based on project name
export function getProjectImage(width: number, height: number, title: string): string {
  // Create a clean title for the image
  const cleanTitle = title.replace(/[^a-zA-Z0-9 ]/g, "").trim()

  // Generate a hash from the title for consistent colors
  const hash = cleanTitle.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)

  // Select color and category based on hash
  const color = colorSchemes[hash % colorSchemes.length]
  const category = projectCategories[hash % projectCategories.length]

  return `/placeholder.svg?height=${height}&width=${width}&text=${cleanTitle}+${category}+${color}`
}

// Function to get a project cover image
export function getProjectCoverImage(width: number, height: number, title: string): string {
  const cleanTitle = title.replace(/[^a-zA-Z0-9 ]/g, "").trim()
  return `/placeholder.svg?height=${height}&width=${width}&text=${cleanTitle}`
}

// Function to generate random professional images for projects
export function getRandomProfessionalImage(width: number, height: number): string {
  const imageType = imageTypes[Math.floor(Math.random() * imageTypes.length)]
  const category = projectCategories[Math.floor(Math.random() * projectCategories.length)]
  const color = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  const seed = Math.floor(Math.random() * 1000)

  return `/placeholder.svg?height=${height}&width=${width}&text=Professional+${category}+${color}+${seed}`
}
