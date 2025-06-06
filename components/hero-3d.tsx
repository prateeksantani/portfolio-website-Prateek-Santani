"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Box, Environment } from "@react-three/drei"
import * as THREE from "three"

function WireframeGlobe() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
      <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.6} />
    </Sphere>
  )
}

function FloatingCubes() {
  const cubesRef = useRef<THREE.Group>(null)

  const cubePositions = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      position: [(Math.random() - 0.5) * 6, 1 + Math.random() * 2, (Math.random() - 0.5) * 6] as [
        number,
        number,
        number,
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      scale: 0.15 + Math.random() * 0.2,
    }))
  }, [])

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.children.forEach((cube, i) => {
        cube.rotation.x += 0.01 * (i + 1)
        cube.rotation.y += 0.01 * (i + 1)
        cube.position.y += Math.sin(state.clock.elapsedTime + i) * 0.002
      })
    }
  })

  return (
    <group ref={cubesRef}>
      {cubePositions.map((cube, i) => (
        <Box key={i} position={cube.position} rotation={cube.rotation} scale={cube.scale}>
          <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.4} />
        </Box>
      ))}
    </group>
  )
}

function GridLines() {
  const gridRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  const lines = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const points = []

    // Create smaller grid lines
    for (let i = -6; i <= 6; i += 1.5) {
      points.push(-6, -1.5, i, 6, -1.5, i)
      points.push(i, -1.5, -6, i, -1.5, 6)
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3))
    return geometry
  }, [])

  return (
    <group ref={gridRef}>
      <lineSegments geometry={lines}>
        <lineBasicMaterial color="#00ff88" transparent opacity={0.2} />
      </lineSegments>
    </group>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(500 * 3)

    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef} geometry={particles}>
      <pointsMaterial color="#00ff88" size={0.015} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export function Hero3D() {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-teal-900 via-teal-800 to-slate-800 rounded-lg overflow-hidden">
      {/* Three.js Canvas */}
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} className="absolute inset-0">
        <ambientLight intensity={0.2} />
        <pointLight position={[8, 8, 8]} intensity={0.5} color="#00ff88" />

        <WireframeGlobe />
        <FloatingCubes />
        <GridLines />
        <ParticleField />

        <Environment preset="night" />
      </Canvas>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4 font-mono">The world is my oyster.</h2>

          <div className="space-y-2 text-sm md:text-base font-mono [&>*]:text-[#00ff88]">
            <p>I operate from India.</p>
            <p>However, I work for clients</p>
            <p>all over the world.</p>
            <p className="text-green-400 font-semibold mt-3">Digital borders are thin.</p>
          </div>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
    </div>
  )
}
