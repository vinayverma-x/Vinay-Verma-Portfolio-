"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { motion } from "framer-motion"

interface BoyAvatarProps {
  className?: string
  size?: number
  autoRotate?: boolean
}

export default function BoyAvatar({ className = "", size = 300, autoRotate = true }: BoyAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const avatarRef = useRef<THREE.Group | null>(null)
  const headRef = useRef<THREE.Mesh | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const targetRotation = useRef({ x: 0, y: 0 })
  const controlsRef = useRef<OrbitControls | null>(null)
  const [actualSize, setActualSize] = useState(size)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const animationFrameRef = useRef<number | null>(null)

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
    camera.position.set(0, 0.5, 2.2)
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(actualSize, actualSize)
    renderer.setClearColor(0x000000, 0)
    renderer.outputEncoding = THREE.sRGBEncoding
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
    controls.target.set(0, 0.5, 0)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 2, 3)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    scene.add(directionalLight)

    const fillLight = new THREE.DirectionalLight(0x3b82f6, 0.3)
    fillLight.position.set(-1, 1, 1)
    scene.add(fillLight)

    const backLight = new THREE.DirectionalLight(0xffffff, 0.5)
    backLight.position.set(0, 1, -2)
    scene.add(backLight)

    // Add point lights for more realistic lighting
    const pointLight1 = new THREE.PointLight(0x3b82f6, 0.5)
    pointLight1.position.set(1, 1, 1)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xffffff, 0.3)
    pointLight2.position.set(-1, 0.5, -1)
    scene.add(pointLight2)

    // Create a stylized avatar
    const createStylizedAvatar = () => {
      // Create a group for the avatar
      const avatar = new THREE.Group()
      avatarRef.current = avatar

      // Head - more detailed with better materials
      const headGeometry = new THREE.SphereGeometry(0.25, 32, 32)
      const headMaterial = new THREE.MeshStandardMaterial({
        color: 0xf2c097,
        roughness: 0.7,
        metalness: 0.1,
        envMapIntensity: 0.5,
      })
      const head = new THREE.Mesh(headGeometry, headMaterial)
      head.position.y = 0.5
      head.castShadow = true
      head.receiveShadow = true
      headRef.current = head

      // Body - more detailed with better materials
      const bodyGeometry = new THREE.CylinderGeometry(0.2, 0.15, 0.5, 32)
      const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        roughness: 0.6,
        metalness: 0.2,
        envMapIntensity: 0.5,
      })
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
      body.position.y = 0.15
      body.castShadow = true
      body.receiveShadow = true

      // Eyes - more detailed with better materials
      const eyeGeometry = new THREE.SphereGeometry(0.05, 16, 16)
      const eyeMaterial = new THREE.MeshStandardMaterial({
        color: 0x222222,
        roughness: 0.3,
        metalness: 0.5,
        envMapIntensity: 0.8,
      })

      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      leftEye.position.set(0.08, 0.55, 0.2)
      leftEye.scale.set(0.8, 1, 0.8)
      leftEye.castShadow = true

      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      rightEye.position.set(-0.08, 0.55, 0.2)
      rightEye.scale.set(0.8, 1, 0.8)
      rightEye.castShadow = true

      // Add eye shine for more realism
      const eyeShineGeometry = new THREE.SphereGeometry(0.015, 8, 8)
      const eyeShineMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })

      const leftEyeShine = new THREE.Mesh(eyeShineGeometry, eyeShineMaterial)
      leftEyeShine.position.set(0.03, 0.03, 0.03)
      leftEye.add(leftEyeShine)

      const rightEyeShine = new THREE.Mesh(eyeShineGeometry, eyeShineMaterial)
      rightEyeShine.position.set(0.03, 0.03, 0.03)
      rightEye.add(rightEyeShine)

      // Hair - more detailed with better materials
      const hairGeometry = new THREE.BoxGeometry(0.35, 0.1, 0.3)
      const hairMaterial = new THREE.MeshStandardMaterial({
        color: 0x3a3a3a,
        roughness: 0.8,
        metalness: 0.1,
        envMapIntensity: 0.3,
      })
      const hair = new THREE.Mesh(hairGeometry, hairMaterial)
      hair.position.set(0, 0.65, 0)
      hair.castShadow = true
      hair.receiveShadow = true

      // Add more detailed hair strands
      const hairStrandsGroup = new THREE.Group()
      const strandGeometry = new THREE.BoxGeometry(0.03, 0.08, 0.03)
      const strandMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a2a2a,
        roughness: 0.9,
        metalness: 0.1,
      })

      // Create multiple hair strands on top
      for (let i = 0; i < 8; i++) {
        const strand = new THREE.Mesh(strandGeometry, strandMaterial)
        const angle = (i / 8) * Math.PI
        const radius = 0.12
        strand.position.set(Math.cos(angle) * radius, 0.7 + Math.random() * 0.05, Math.sin(angle) * radius)
        strand.rotation.set(Math.random() * 0.2 - 0.1, Math.random() * 0.2 - 0.1, Math.random() * 0.2 - 0.1)
        strand.castShadow = true
        hairStrandsGroup.add(strand)
      }

      // Arms - more detailed with better materials
      const armGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.4, 16)
      const armMaterial = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        roughness: 0.6,
        metalness: 0.2,
        envMapIntensity: 0.5,
      })

      const leftArm = new THREE.Mesh(armGeometry, armMaterial)
      leftArm.position.set(0.3, 0.15, 0)
      leftArm.rotation.z = Math.PI / 6
      leftArm.castShadow = true
      leftArm.receiveShadow = true

      const rightArm = new THREE.Mesh(armGeometry, armMaterial)
      rightArm.position.set(-0.3, 0.15, 0)
      rightArm.rotation.z = -Math.PI / 6
      rightArm.castShadow = true
      rightArm.receiveShadow = true

      // Add hands
      const handGeometry = new THREE.SphereGeometry(0.06, 16, 16)
      const handMaterial = new THREE.MeshStandardMaterial({
        color: 0xf2c097,
        roughness: 0.7,
        metalness: 0.1,
      })

      const leftHand = new THREE.Mesh(handGeometry, handMaterial)
      leftHand.position.set(0, -0.2, 0)
      leftHand.scale.set(1, 0.8, 1)
      leftHand.castShadow = true
      leftArm.add(leftHand)

      const rightHand = new THREE.Mesh(handGeometry, handMaterial)
      rightHand.position.set(0, -0.2, 0)
      rightHand.scale.set(1, 0.8, 1)
      rightHand.castShadow = true
      rightArm.add(rightHand)

      // Legs - more detailed with better materials
      const legGeometry = new THREE.CylinderGeometry(0.07, 0.05, 0.4, 16)
      const legMaterial = new THREE.MeshStandardMaterial({
        color: 0x222222,
        roughness: 0.7,
        metalness: 0.1,
        envMapIntensity: 0.3,
      })

      const leftLeg = new THREE.Mesh(legGeometry, legMaterial)
      leftLeg.position.set(0.1, -0.2, 0)
      leftLeg.castShadow = true
      leftLeg.receiveShadow = true

      const rightLeg = new THREE.Mesh(legGeometry, legMaterial)
      rightLeg.position.set(-0.1, -0.2, 0)
      rightLeg.castShadow = true
      rightLeg.receiveShadow = true

      // Add feet
      const footGeometry = new THREE.SphereGeometry(0.06, 16, 16)
      const footMaterial = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.8,
        metalness: 0.2,
      })

      const leftFoot = new THREE.Mesh(footGeometry, footMaterial)
      leftFoot.position.set(0, -0.2, 0.02)
      leftFoot.scale.set(1, 0.5, 1.3)
      leftFoot.castShadow = true
      leftLeg.add(leftFoot)

      const rightFoot = new THREE.Mesh(footGeometry, footMaterial)
      rightFoot.position.set(0, -0.2, 0.02)
      rightFoot.scale.set(1, 0.5, 1.3)
      rightFoot.castShadow = true
      rightLeg.add(rightFoot)

      // Mouth - more detailed
      const mouthGeometry = new THREE.BoxGeometry(0.1, 0.03, 0.05)
      const mouthMaterial = new THREE.MeshStandardMaterial({
        color: 0x333333,
        roughness: 0.5,
        metalness: 0.1,
      })
      const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial)
      mouth.position.set(0, 0.42, 0.2)
      mouth.castShadow = true

      // Add all parts to the head for better cursor tracking
      head.add(leftEye, rightEye, mouth)

      // Add all parts to the avatar
      avatar.add(head, body, hair, hairStrandsGroup, leftArm, rightArm, leftLeg, rightLeg)
      avatar.position.y = -0.2
      scene.add(avatar)

      // Add subtle animation to the avatar
      const animateAvatar = () => {
        if (avatarRef.current) {
          // Subtle breathing effect
          avatarRef.current.position.y = -0.2 + Math.sin(Date.now() * 0.001) * 0.01

          // Subtle arm movement
          if (leftArm && rightArm) {
            leftArm.rotation.z = Math.PI / 6 + Math.sin(Date.now() * 0.0005) * 0.05
            rightArm.rotation.z = -Math.PI / 6 - Math.sin(Date.now() * 0.0005) * 0.05
          }
        }
      }

      // Add the animation to the render loop
      const originalAnimate = animate
      animate = () => {
        animateAvatar()
        originalAnimate()
      }

      setLoading(false)
    }

    // Create the stylized avatar
    createStylizedAvatar()

    // Mouse move event for head tracking with enhanced responsiveness
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1

        mousePosition.current = { x, y }

        // Set target rotation based on mouse position
        // Enhanced responsiveness with wider range
        targetRotation.current = {
          x: THREE.MathUtils.clamp(y * 0.7, -0.7, 0.7),
          y: THREE.MathUtils.clamp(x * 0.7, -0.7, 0.7),
        }
      }
    }

    // Touch move event for mobile devices with enhanced responsiveness
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0]
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
          const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1
          const y = -((touch.clientY - rect.top) / rect.height) * 2 + 1

          mousePosition.current = { x, y }

          // Set target rotation based on touch position
          // Enhanced responsiveness with wider range
          targetRotation.current = {
            x: THREE.MathUtils.clamp(y * 0.7, -0.7, 0.7),
            y: THREE.MathUtils.clamp(x * 0.7, -0.7, 0.7),
          }
        }
      }
    }

    // Add mouse and touch event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    // Animation loop
    const clock = new THREE.Clock()

    function animate() {
      animationFrameRef.current = requestAnimationFrame(animate)

      // Update controls
      controls.update()

      // Update head rotation based on mouse position with smoother interpolation
      if (headRef.current) {
        // Smoothly interpolate current rotation towards target rotation
        headRef.current.rotation.x += (targetRotation.current.x - headRef.current.rotation.x) * 0.08
        headRef.current.rotation.y += (targetRotation.current.y - headRef.current.rotation.y) * 0.08
      }

      // Render
      renderer.render(scene, camera)
    }

    animate()

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
  }, [actualSize, autoRotate])

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
