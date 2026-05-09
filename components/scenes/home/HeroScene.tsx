'use client'

import { PARTICLE_COUNT_HIGH, PARTICLE_COUNT_LOW } from '@/lib/three/constants'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import { useSceneQuality } from '@/components/canvas/SceneManager'

import { LightingRig } from '@/components/scenes/shared/LightingRig'
import { InstancedParticles } from '@/components/scenes/shared/InstancedParticles'
import { FloatingMesh } from '@/components/scenes/home/FloatingMesh'
import { ShaderBackdrop } from '@/components/scenes/home/ShaderBackdrop'

export function HeroScene() {
  const quality = useSceneQuality()
  const mouse = useMouseParallax()
  const particles = quality === 'high' ? PARTICLE_COUNT_HIGH : PARTICLE_COUNT_LOW

  return (
    <>
      <LightingRig />
      <ShaderBackdrop mouse={mouse} />
      <group position={[2.35, 0.12, 0]}>
        <FloatingMesh mouse={mouse} />
      </group>
      <InstancedParticles count={particles} />
    </>
  )
}
