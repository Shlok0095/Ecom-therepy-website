'use client'

import { Canvas, type RootState } from '@react-three/fiber'
import { Suspense, type ReactNode } from 'react'
import * as THREE from 'three'

export type CanvasRootProps = {
  children: ReactNode
  dpr?: [number, number]
  frameloop?: 'always' | 'demand' | 'never'
  onReady?: (state: RootState) => void
}

/**
 * Low-level R3F canvas — tone mapping & color space for PBR materials.
 */
export function CanvasRoot({ children, dpr = [1, 1.75], frameloop = 'always', onReady }: CanvasRootProps) {
  return (
    <Canvas
      className="h-full w-full touch-none"
      dpr={dpr}
      frameloop={frameloop}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
      }}
      camera={{ position: [0, 0, 6.2], fov: 40, near: 0.1, far: 42 }}
      onCreated={(state) => {
        state.gl.toneMapping = THREE.ACESFilmicToneMapping
        state.gl.toneMappingExposure = 1.05
        state.scene.background = null
        state.gl.setClearColor(0x000000, 0)
        onReady?.(state)
      }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  )
}
