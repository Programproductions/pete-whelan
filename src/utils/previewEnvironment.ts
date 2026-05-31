/** True when this page runs inside another frame (Vercel preview, GitHub PR embed, etc.). */
export function isEmbeddedFrame(): boolean {
  if (typeof window === 'undefined') return false
  try {
    return window.self !== window.top
  } catch {
    return true
  }
}

/** WebGL is routinely blocked in embedded previews — not a site bug. */
export function isWebGLBlockedEnvironment(): boolean {
  return isEmbeddedFrame()
}

export function openSiteInNewTab(): void {
  window.open(window.location.href, '_blank', 'noopener,noreferrer')
}
