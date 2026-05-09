'use client'

export function LightingRig() {
  return (
    <>
      <ambientLight intensity={0.14} color="#b8c4dc" />
      <directionalLight position={[5, 7.5, 4]} intensity={1.08} color="#fff6e8" />
      <directionalLight position={[-4.5, -2.5, -5]} intensity={0.36} color="#6a5a78" />
      <pointLight position={[2.4, 1.2, 3]} intensity={0.42} distance={16} decay={2} color="#e8d4b8" />
      <pointLight position={[-2, -1, 2]} intensity={0.18} distance={10} decay={2} color="#9db7ff" />
    </>
  )
}
