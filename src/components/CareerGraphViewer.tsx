import { useEffect, useMemo, useState } from 'react'
import { Graph2DView } from './Graph2DView'
import { GraphCanvas } from './GraphCanvas'
import { GraphErrorBoundary } from './GraphErrorBoundary'
import { EmbeddedPreviewNotice } from './EmbeddedPreviewNotice'
import { isWebGLError } from '../utils/webgl'
import { isWebGLBlockedEnvironment } from '../utils/previewEnvironment'

type CareerGraphViewerProps = {
  active: boolean
  className?: string
}

type ViewMode = '3d' | '2d'

/**
 * 3D when WebGL is allowed (normal tab). Embedded Vercel/GitHub previews block WebGL —
 * show 2D + "open in new tab" instead of a confusing failure message.
 */
export function CareerGraphViewer({ active, className }: CareerGraphViewerProps) {
  const embeddedPreview = useMemo(() => isWebGLBlockedEnvironment(), [])
  const [mode, setMode] = useState<ViewMode>(embeddedPreview ? '2d' : '3d')
  const [webglFailed, setWebglFailed] = useState(false)

  useEffect(() => {
    if (!active) {
      setWebglFailed(false)
      if (embeddedPreview) setMode('2d')
      else setMode('3d')
    }
  }, [active, embeddedPreview])

  useEffect(() => {
    if (!active || mode !== '3d') return

    const onRejection = (event: PromiseRejectionEvent) => {
      const msg = String(
        (event.reason as Error | undefined)?.message ?? event.reason ?? '',
      )
      if (isWebGLError(msg)) {
        event.preventDefault()
        setWebglFailed(true)
        setMode('2d')
      }
    }

    window.addEventListener('unhandledrejection', onRejection)
    return () => window.removeEventListener('unhandledrejection', onRejection)
  }, [active, mode])

  if (!active) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-zinc-800 bg-[#050608] text-sm text-zinc-500 ${className ?? 'h-64'}`}
      >
        Loading graph…
      </div>
    )
  }

  const show2d = mode === '2d' || webglFailed

  if (show2d) {
    return (
      <div className={className}>
        {embeddedPreview && !webglFailed && (
          <EmbeddedPreviewNotice onTry3dAnyway={() => setMode('3d')} />
        )}
        {webglFailed && !embeddedPreview && (
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-500/20 bg-amber-950/30 px-3 py-2">
            <p className="text-xs text-amber-100/90">
              3D could not start in this browser tab — showing 2D (same nodes and edges).
            </p>
            <button
              type="button"
              onClick={() => {
                setWebglFailed(false)
                setMode('3d')
              }}
              className="shrink-0 rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200 hover:bg-zinc-700"
            >
              Try 3D again
            </button>
          </div>
        )}
        <Graph2DView className="h-[min(62vh,560px)] w-full md:h-[min(65vh,600px)]" />
      </div>
    )
  }

  return (
    <GraphErrorBoundary
      className={className}
      onWebGLFallback={() => {
        setWebglFailed(true)
        setMode('2d')
      }}
    >
      <GraphCanvas className={className ?? 'h-[min(62vh,560px)] w-full md:h-[min(65vh,600px)]'} />
    </GraphErrorBoundary>
  )
}
