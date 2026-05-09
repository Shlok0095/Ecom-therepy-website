'use client'

import type { ReactNode } from 'react'

import { SceneQualityProvider } from '@/components/canvas/SceneManager'
import { LenisProvider } from '@/components/layout/LenisProvider'
import { NativeScrollBridge } from '@/components/layout/NativeScrollBridge'
import { PerformanceMonitor } from '@/components/engine/PerformanceMonitor'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SceneQualityProvider>
      <LenisProvider>
        <NativeScrollBridge />
        {children}
        <PerformanceMonitor />
      </LenisProvider>
    </SceneQualityProvider>
  )
}
