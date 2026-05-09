'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export type ShaderBackdropProps = {
  mouse: React.MutableRefObject<THREE.Vector2>
}

/**
 * Full-bleed atmospheric plane — grain, vignette, subtle UV warp from pointer.
 */
export function ShaderBackdrop({ mouse }: ShaderBackdropProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const smoothMouse = useRef(new THREE.Vector2(0, 0))
  const { viewport } = useThree()

  useFrame((state, delta) => {
    const mat = materialRef.current
    if (!mat) return
    mat.uniforms.uTime.value = state.clock.elapsedTime
    smoothMouse.current.lerp(mouse.current, 1 - Math.exp(-10 * delta))
    mat.uniforms.uMouse.value.copy(smoothMouse.current)
  })

  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
  }).current

  return (
    <mesh ref={meshRef} position={[0, 0, -8]} scale={[viewport.width * 1.35, viewport.height * 1.35, 1]}>
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          precision highp float;
          uniform float uTime;
          uniform vec2 uMouse;
          varying vec2 vUv;

          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
          }

          void main() {
            vec2 uv = vUv;
            vec2 w = uMouse * 0.014;
            uv += sin(uv.y * 6.2831853 + uTime * 0.35) * w;

            float n = hash(floor(uv * 900.0) + uTime * 0.05);
            float grain = (n - 0.5) * 0.038;

            vec3 cool = vec3(0.42, 0.46, 0.52);
            vec3 base = vec3(0.036, 0.038, 0.044) + cool * 0.028 * sin(uTime * 0.16 + uv.x * 2.0);
            float vig = smoothstep(0.92, 0.36, length(uv - 0.5));

            vec3 col = (base + grain) * vig;
            gl_FragColor = vec4(col, 0.88);
          }
        `}
      />
    </mesh>
  )
}
