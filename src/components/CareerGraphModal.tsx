import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { GraphControls } from './GraphControls'
import { GraphLayerControls } from './GraphLayerControls'
import { CareerGraphViewer } from './CareerGraphViewer'
import { usePortfolioStore } from '../store/usePortfolioStore'

type CareerGraphModalProps = {
  open: boolean
  onClose: () => void
}

export function CareerGraphModal({ open, onClose }: CareerGraphModalProps) {
  const selectNodeWithPath = usePortfolioStore((s) => s.selectNodeWithPath)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      selectNodeWithPath(null)
    }
  }, [open, selectNodeWithPath])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="career-graph-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#07080a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex shrink-0 items-start justify-between gap-4 border-b border-zinc-800 px-5 py-4 md:px-6">
              <div>
                <h2 id="career-graph-title" className="text-lg font-semibold text-zinc-100 md:text-xl">
                  Interactive career graph
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Click a node for detail · drag to pan the 2D view or orbit in 3D when available
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-lg px-3 py-1.5 text-sm text-zinc-400 ring-1 ring-zinc-700 hover:bg-zinc-800 hover:text-zinc-200"
              >
                Close
              </button>
            </header>

            <div className="shrink-0 space-y-4 border-b border-zinc-800/80 px-5 py-3 md:px-6">
              <GraphLayerControls />
              <GraphControls />
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
              <CareerGraphViewer
                active={open}
                className="h-[min(62vh,560px)] w-full md:h-[min(65vh,600px)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
