/** Returns true only when the browser can create a real WebGL context. */
export function isWebGLAvailable(): boolean {
  if (typeof document === 'undefined') return false

  try {
    const canvas = document.createElement('canvas')
    const contexts: ('webgl2' | 'webgl' | 'experimental-webgl')[] = [
      'webgl2',
      'webgl',
      'experimental-webgl',
    ]

    for (const type of contexts) {
      const gl = canvas.getContext(type, {
        failIfMajorPerformanceCaveat: false,
        powerPreference: 'default',
      })
      if (gl) {
        const webgl = gl as WebGLRenderingContext
        const lose = webgl.getExtension('WEBGL_lose_context')
        lose?.loseContext()
        return true
      }
    }
    return false
  } catch {
    return false
  }
}

export function isWebGLError(message: string): boolean {
  return /webgl/i.test(message) || /WebGL context/i.test(message)
}
