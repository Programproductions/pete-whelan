import { useEffect, useState } from 'react'
import { isWebGLAvailable } from '../utils/webgl'

/** When `enabled` is false, returns null (not checked). */
export function useWebGLAvailable(enabled: boolean): boolean | null {
  const [available, setAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    if (!enabled) {
      setAvailable(null)
      return
    }
    setAvailable(isWebGLAvailable())
  }, [enabled])

  return enabled ? available : null
}
