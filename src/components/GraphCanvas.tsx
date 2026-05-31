import { useEffect, useState } from 'react'
import { GraphErrorBoundary } from './GraphErrorBoundary'
import { GraphScene } from './GraphScene'
import { MobileGraphFallback } from './MobileGraphFallback'

type GraphCanvasProps = {
  className?: string
}

function useWebGLAvailable(): boolean | null {
  const [available, setAvailable] = useState<boolean | null>(null)
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') ?? canvas.getContext('webgl')
      setAvailable(!!gl)
    } catch {
      setAvailable(false)
    }
  }, [])
  return available
}

/** Direct graph mount — no lazy chunk (avoids preview/production load failures). */
export function GraphCanvas({ className }: GraphCanvasProps) {
  const webgl = useWebGLAvailable()

  if (webgl === null) {
    return (
      <div
        className={`flex min-h-[400px] items-center justify-center rounded-xl border border-zinc-800 bg-[#050608] ${className ?? ''}`}
      >
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500/30 border-t-cyan-400" />
      </div>
    )
  }

  if (!webgl) {
    return (
      <div className={className}>
        <p className="mb-3 text-xs text-zinc-500">WebGL unavailable — relationship explorer below.</p>
        <MobileGraphFallback />
      </div>
    )
  }

  return (
    <GraphErrorBoundary className={className}>
      <GraphScene className={className} />
    </GraphErrorBoundary>
  )
}
