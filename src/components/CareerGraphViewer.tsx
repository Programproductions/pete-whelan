import { Graph2DView } from './Graph2DView'
import { GraphCanvas } from './GraphCanvas'
import { useWebGLAvailable } from '../hooks/useWebGLAvailable'

type CareerGraphViewerProps = {
  active: boolean
  className?: string
}

/**
 * Picks 3D (WebGL) or 2D (SVG) graph. Probes WebGL before mounting Three.js
 * so sandboxed / GPU-disabled browsers do not throw uncaught errors.
 */
export function CareerGraphViewer({ active, className }: CareerGraphViewerProps) {
  const webgl = useWebGLAvailable(active)

  if (!active || webgl === null) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-zinc-800 bg-[#050608] text-sm text-zinc-500 ${className ?? 'h-64'}`}
      >
        Loading graph…
      </div>
    )
  }

  if (!webgl) {
    return (
      <div className={className}>
        <p className="mb-2 rounded-lg border border-amber-500/20 bg-amber-950/30 px-3 py-2 text-xs text-amber-100/90">
          WebGL is unavailable in this browser (often due to sandboxing or disabled hardware
          acceleration). Showing the 2D graph instead — same nodes and connections.
        </p>
        <Graph2DView className="h-[min(62vh,560px)] w-full md:h-[min(65vh,600px)]" />
      </div>
    )
  }

  return <GraphCanvas className={className ?? 'h-[min(62vh,560px)] w-full md:h-[min(65vh,600px)]'} />
}
