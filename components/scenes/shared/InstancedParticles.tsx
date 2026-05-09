'use client'

import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

export type InstancedParticlesProps = {
  count: number
}

/**
 * Sparse instanced motes — minimal overdraw, depthWrite off for layering.
 */
export function InstancedParticles({ count }: InstancedParticlesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const geo = useMemo(() => new THREE.SphereGeometry(1, 8, 8), [])
  const mat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#d6d6ce'),
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
      }),
    []
  )

  const seeds = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1.8
    }
    return arr
  }, [count])

  useFrame((state) => {
    const mesh = meshRef.current
    if (!mesh) return
    const t = state.clock.elapsedTime * 0.11
    for (let i = 0; i < count; i++) {
      const ix = i * 3
      dummy.position.set(seeds[ix], seeds[ix + 1], seeds[ix + 2])
      dummy.position.y += Math.sin(t + i * 0.37) * 0.007
      const s = 0.007 + (i % 8) * 0.002
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
  })

  return <instancedMesh ref={meshRef} args={[geo, mat, count]} frustumCulled />
}
