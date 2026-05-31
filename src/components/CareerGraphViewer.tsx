import { useEffect, useState } from 'react'
import { Graph2DView } from './Graph2DView'
import { GraphCanvas } from './GraphCanvas'
import { GraphErrorBoundary } from './GraphErrorBoundary'
import { isWebGLError } from '../utils/webgl'

type CareerGraphViewerProps = {
  active: boolean
  className?: string
}

/**
 * Prefer 3D (same as v1). Only switch to 2D if WebGL actually fails at runtime —
 * do not pre-empt with a probe (that caused false "WebGL unavailable" on normal browsers).
 */
export function CareerGraphViewer({ active, className }: CareerGraphViewerProps) {
  const [force2d, setForce2d] = useState(false)

  useEffect(() => {
    if (!active) {
      setForce2d(false)
      return
    }

    const onRejection = (event: PromiseRejectionEvent) => {
      const msg = String(
        (event.reason as Error | undefined)?.message ?? event.reason ?? '',
      )
      if (isWebGLError(msg)) {
        event.preventDefault()
        setForce2d(true)
      }
    }

    window.addEventListener('unhandledrejection', onRejection)
    return () => window.removeEventListener('unhandledrejection', onRejection)
  }, [active])

  if (!active) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-zinc-800 bg-[#050608] text-sm text-zinc-500 ${className ?? 'h-64'}`}
      >
        Loading graph…
      </div>
    )
  }

  if (force2d) {
    return (
      <div className={className}>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-500/20 bg-amber-950/30 px-3 py-2">
          <p className="text-xs text-amber-100/90">
            3D view could not start here — showing the 2D graph (same nodes and edges).
          </p>
          <button
            type="button"
            onClick={() => setForce2d(false)}
            className="shrink-0 rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200 hover:bg-zinc-700"
          >
            Try 3D again
          </button>
        </div>
        <Graph2DView className="h-[min(62vh,560px)] w-full md:h-[min(65vh,600px)]" />
      </div>
    )
  }

  return (
    <GraphErrorBoundary
      className={className}
      onWebGLFallback={() => setForce2d(true)}
    >
      <GraphCanvas className={className ?? 'h-[min(62vh,560px)] w-full md:h-[min(65vh,600px)]'} />
    </GraphErrorBoundary>
  )
}
