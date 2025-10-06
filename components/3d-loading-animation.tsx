"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface LoadingAnimationProps {
  size?: number
  primaryColor?: string
  secondaryColor?: string
  backgroundColor?: string
}

export default function ThreeDLoadingAnimation({
  size = 200,
  primaryColor = "#3b82f6",
  secondaryColor = "#1e40af",
  backgroundColor = "transparent",
}: LoadingAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(size, size)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Convert hex colors to THREE.Color
    const primary = new THREE.Color(primaryColor)
    const secondary = new THREE.Color(secondaryColor)

    // Create loading animation elements
    const group = new THREE.Group()
    scene.add(group)

    // Outer ring
    const outerRingGeometry = new THREE.TorusGeometry(1.5, 0.1, 16, 100)
    const outerRingMaterial = new THREE.MeshStandardMaterial({
      color: primary,
      metalness: 0.7,
      roughness: 0.2,
    })
    const outerRing = new THREE.Mesh(outerRingGeometry, outerRingMaterial)
    group.add(outerRing)

    // Middle ring
    const middleRingGeometry = new THREE.TorusGeometry(1.2, 0.08, 16, 100)
    const middleRingMaterial = new THREE.MeshStandardMaterial({
      color: secondary,
      metalness: 0.7,
      roughness: 0.2,
    })
    const middleRing = new THREE.Mesh(middleRingGeometry, middleRingMaterial)
    middleRing.rotation.x = Math.PI / 2
    group.add(middleRing)

    // Inner ring
    const innerRingGeometry = new THREE.TorusGeometry(0.9, 0.06, 16, 100)
    const innerRingMaterial = new THREE.MeshStandardMaterial({
      color: primary,
      metalness: 0.7,
      roughness: 0.2,
    })
    const innerRing = new THREE.Mesh(innerRingGeometry, innerRingMaterial)
    innerRing.rotation.y = Math.PI / 2
    group.add(innerRing)

    // Core sphere
    const coreGeometry = new THREE.IcosahedronGeometry(0.5, 1)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: secondary,
      metalness: 0.8,
      roughness: 0.2,
      emissive: secondary,
      emissiveIntensity: 0.5,
    })
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    group.add(core)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(-5, -5, 5)
    scene.add(pointLight)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate rings at different speeds
      outerRing.rotation.x += 0.01
      outerRing.rotation.y += 0.005

      middleRing.rotation.y += 0.015
      middleRing.rotation.z += 0.01

      innerRing.rotation.x += 0.02
      innerRing.rotation.z += 0.01

      // Pulse the core
      const scale = 0.8 + Math.sin(Date.now() * 0.003) * 0.2
      core.scale.set(scale, scale, scale)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      renderer.setSize(size, size)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [size, primaryColor, secondaryColor, backgroundColor])

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: backgroundColor,
        margin: "0 auto",
      }}
    />
  )
}
