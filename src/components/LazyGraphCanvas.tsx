import { lazy, Suspense } from 'react'

const GraphScene = lazy(() =>
  import('./GraphScene').then((m) => ({ default: m.GraphScene })),
)

type LazyGraphCanvasProps = {
  className?: string
}

export function LazyGraphCanvas({ className }: LazyGraphCanvasProps) {
  return (
    <Suspense
      fallback={
        <div
          className={`flex items-center justify-center rounded-xl border border-zinc-800 bg-[#050608] ${className ?? 'h-[min(52vh,520px)]'}`}
        >
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-cyan-500/30 border-t-cyan-400" />
            <p className="mt-3 text-xs text-zinc-500">Loading career graph…</p>
          </div>
        </div>
      }
    >
      <GraphScene className={className} />
    </Suspense>
  )
}
