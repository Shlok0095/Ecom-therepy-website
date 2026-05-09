'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Pointer (-1..1) in clip-like space. Updates on mousemove only — meshes/backdrop smooth in `useFrame`.
 */
export function useMouseParallax(): React.MutableRefObject<THREE.Vector2> {
  const mouse = useRef(new THREE.Vector2(0, 0))

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth || 1
      const h = window.innerHeight || 1
      mouse.current.x = (e.clientX / w) * 2 - 1
      mouse.current.y = -(e.clientY / h) * 2 + 1
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return mouse
}
