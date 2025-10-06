"use client"
import BoyAvatar from "./boy-avatar"

interface TechAvatarProps {
  className?: string
  size?: number
  autoRotate?: boolean
  primaryColor?: string
  secondaryColor?: string
}

export default function TechAvatar({
  className = "",
  size = 300,
  autoRotate = true,
  primaryColor = "#3b82f6",
  secondaryColor = "#1e40af",
}: TechAvatarProps) {
  // Simply use the boy avatar
  return <BoyAvatar className={className} size={size} primaryColor={primaryColor} secondaryColor={secondaryColor} />
}
