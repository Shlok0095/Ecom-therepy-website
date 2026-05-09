'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { damp } from 'maath/easing'
import { useRef } from 'react'

import { useEngineStore } from '@/stores/engineStore'

/**
 * Subtle scroll-linked camera retreat — keeps typography readable; emotion without gymnastics.
 */
export function CinematicCamera() {
  const { camera } = useThree()
  const zState = useRef({ z: 6.2 }).current

  useFrame((_, delta) => {
    const scrollProgress = useEngineStore.getState().scrollProgress
    const targetZ = 6.15 - scrollProgress * 0.38
    damp(zState, 'z', targetZ, 0.65, delta)
    camera.position.z = zState.z
  })

  return null
}
