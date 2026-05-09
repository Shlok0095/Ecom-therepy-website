'use client'

import { AdaptiveCanvas } from '@/components/canvas/AdaptiveCanvas'

import { HeroScene } from '@/components/scenes/home/HeroScene'

export default function WebGLHeroLayer() {
  return (
    <AdaptiveCanvas>
      <HeroScene />
    </AdaptiveCanvas>
  )
}
