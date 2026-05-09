'use client'

import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export type FloatingMeshProps = {
  mouse: React.MutableRefObject<THREE.Vector2>
}

/** Hero sculpture — neutral metal read under dark UI. */
export function FloatingMesh({ mouse }: FloatingMeshProps) {
  const group = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    const g = group.current
    if (!g) return
    g.rotation.x += delta * 0.048
    g.rotation.y += delta * 0.062
    g.position.x = THREE.MathUtils.lerp(g.position.x, mouse.current.x * 0.44, 0.052)
    g.position.y = THREE.MathUtils.lerp(g.position.y, mouse.current.y * 0.26, 0.052)
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[0.54, 0]} />
        <meshPhysicalMaterial
          color="#080a10"
          metalness={0.93}
          roughness={0.2}
          clearcoat={0.14}
          clearcoatRoughness={0.35}
          reflectivity={0.55}
          emissive="#94a3b8"
          emissiveIntensity={0.032}
        />
      </mesh>
    </group>
  )
}
