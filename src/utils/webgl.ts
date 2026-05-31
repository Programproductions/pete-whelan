export function isWebGLError(message: string): boolean {
  return /webgl/i.test(message) || /WebGL context/i.test(message)
}

/** Soft probe — never used to block 3D; only for diagnostics. */
export function probeWebGL(): boolean {
  if (typeof document === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: false }) ??
        canvas.getContext('webgl', { failIfMajorPerformanceCaveat: false }) ??
        canvas.getContext('experimental-webgl'),
    )
  } catch {
    return false
  }
}
