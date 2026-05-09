'use client'

import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'

import {
  BLOOM_INTENSITY,
  BLOOM_LUMINANCE_THRESHOLD,
  BLOOM_RADIUS,
  VIGNETTE_DARKNESS,
  VIGNETTE_OFFSET,
} from '@/lib/three/constants'

export type LuxuryPostProcessingProps = {
  enabled: boolean
}

/**
 * Restrained bloom + vignette — disable on low tier / when `enabled` false.
 */
export function LuxuryPostProcessing({ enabled }: LuxuryPostProcessingProps) {
  if (!enabled) return null

  return (
    <EffectComposer multisampling={0}>
      <Bloom
        luminanceThreshold={BLOOM_LUMINANCE_THRESHOLD}
        intensity={BLOOM_INTENSITY}
        radius={BLOOM_RADIUS}
        mipmapBlur
      />
      <Vignette eskil={false} offset={VIGNETTE_OFFSET} darkness={VIGNETTE_DARKNESS} />
    </EffectComposer>
  )
}
