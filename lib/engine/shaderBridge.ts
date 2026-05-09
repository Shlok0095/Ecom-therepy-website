import { damp } from 'maath/easing'

/** Clamp to [0,1] for shader uniforms & timelines */
export function clamp01(t: number): number {
  return Math.min(1, Math.max(0, t))
}

/** Frame-rate independent smoothing onto a mutable `{ value }` uniform bucket */
export function dampUniformScalar(
  bucket: { value: number },
  target: number,
  smoothTime: number,
  delta: number
): void {
  damp(bucket, 'value', target, smoothTime, delta)
}
