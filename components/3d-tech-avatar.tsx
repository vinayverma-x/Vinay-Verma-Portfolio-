"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { motion } from "framer-motion"

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
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [actualSize, setActualSize] = useState(size)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const targetRotation = useRef({ x: 0, y: 0 })
  const avatarRef = useRef<THREE.Group | null>(null)

  // Adjust size for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setActualSize(Math.min(size, window.innerWidth - 40))
      } else {
        setActualSize(size)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [size])

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    camera.position.set(0, 0, 5)
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(actualSize, actualSize)
    renderer.setClearColor(0x000000, 0)
    // Use compatible properties for Three.js
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    rendererRef.current = renderer
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controlsRef.current = controls
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.enablePan = false
    controls.autoRotate = autoRotate
    controls.autoRotateSpeed = 0.5

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(-5, -5, 5)
    scene.add(pointLight)

    // Convert hex colors to THREE.Color
    const primary = new THREE.Color(primaryColor)
    const secondary = new THREE.Color(secondaryColor)

    // Create abstract tech avatar
    const avatar = new THREE.Group()
    avatarRef.current = avatar

    // Core sphere
    const coreGeometry = new THREE.IcosahedronGeometry(1.2, 2)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: primary,
      metalness: 0.7,
      roughness: 0.2,
      wireframe: true,
    })
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    avatar.add(core)

    // Inner sphere
    const innerGeometry = new THREE.IcosahedronGeometry(1, 3)
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: secondary,
      metalness: 0.5,
      roughness: 0.3,
      transparent: true,
      opacity: 0.7,
    })
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial)
    avatar.add(innerSphere)

    // Orbiting particles
    const particleCount = 50
    const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8)
    const particleMaterial = new THREE.MeshStandardMaterial({
      color: primary,
      emissive: primary,
      emissiveIntensity: 0.5,
    })

    const particles = new THREE.Group()
    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial)

      // Position particles in a spherical distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 1.5 + Math.random() * 0.5

      particle.position.x = radius * Math.sin(phi) * Math.cos(theta)
      particle.position.y = radius * Math.sin(phi) * Math.sin(theta)
      particle.position.z = radius * Math.cos(phi)

      particles.add(particle)
    }
    avatar.add(particles)

    // Connecting lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: primary,
      transparent: true,
      opacity: 0.3,
    })

    // Connect some particles with lines
    for (let i = 0; i < 25; i++) {
      const startParticle = particles.children[Math.floor(Math.random() * particleCount)]
      const endParticle = particles.children[Math.floor(Math.random() * particleCount)]

      if (startParticle !== endParticle) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([startParticle.position, endParticle.position])
        const line = new THREE.Line(lineGeometry, lineMaterial)
        avatar.add(line)
      }
    }

    // Add floating rings
    const ringCount = 3
    for (let i = 0; i < ringCount; i++) {
      const ringGeometry = new THREE.TorusGeometry(1.8 + i * 0.2, 0.02, 16, 100)
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? primary : secondary,
        metalness: 0.7,
        roughness: 0.3,
        transparent: true,
        opacity: 0.7 - i * 0.1,
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = Math.PI / 2 + (i * Math.PI) / 4
      ring.rotation.y = (i * Math.PI) / 3
      avatar.add(ring)
    }

    scene.add(avatar)

    // Mouse move event for avatar tracking
    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1

        mousePosition.current = { x, y }

        // Set target rotation based on mouse position
        targetRotation.current = {
          x: THREE.MathUtils.clamp(y * 0.3, -0.3, 0.3),
          y: THREE.MathUtils.clamp(x * 0.5, -0.5, 0.5),
        }
      }
    }

    // Touch move event for mobile devices
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0]
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
          const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1
          const y = -((touch.clientY - rect.top) / rect.height) * 2 + 1

          mousePosition.current = { x, y }

          // Set target rotation based on touch position
          targetRotation.current = {
            x: THREE.MathUtils.clamp(y * 0.3, -0.3, 0.3),
            y: THREE.MathUtils.clamp(x * 0.5, -0.5, 0.5),
          }
        }
      }
    }

    // Add mouse and touch event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    // Animation loop
    function animate() {
      animationFrameRef.current = requestAnimationFrame(animate)

      // Update controls
      controls.update()

      // Rotate inner sphere
      if (innerSphere) {
        innerSphere.rotation.x += 0.005
        innerSphere.rotation.y += 0.005
      }

      // Rotate core
      if (core) {
        core.rotation.x -= 0.003
        core.rotation.y -= 0.003
      }

      // Rotate particles
      if (particles) {
        particles.rotation.y += 0.001
      }

      // Animate rings
      avatar.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.TorusGeometry) {
          child.rotation.z += 0.002 * (index % 2 === 0 ? 1 : -1)
        }
      })

      // Respond to mouse movement
      avatar.rotation.x += (targetRotation.current.x - avatar.rotation.x) * 0.05
      avatar.rotation.y += (targetRotation.current.y - avatar.rotation.y) * 0.05

      // Render
      renderer.render(scene, camera)
    }

    animate()
    setLoading(false)

    // Handle resize
    const handleResize = () => {
      if (rendererRef.current) {
        rendererRef.current.setSize(actualSize, actualSize)
      }
      if (cameraRef.current) {
        cameraRef.current.aspect = 1
        cameraRef.current.updateProjectionMatrix()
      }
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("resize", handleResize)

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }

      if (rendererRef.current) {
        rendererRef.current.dispose()
      }

      if (controlsRef.current) {
        controlsRef.current.dispose()
      }
    }
  }, [actualSize, autoRotate, primaryColor, secondaryColor])

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: `${actualSize}px`, height: `${actualSize}px` }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </motion.div>
  )
}
