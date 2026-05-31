import { AnimatePresence, motion } from 'framer-motion'
import {
  getConnectedIds,
  nodeById,
  type PortfolioNode,
} from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'

function typeLabel(type: PortfolioNode['type']): string {
  return type.replace(/-/g, ' ')
}

export function NodeDetailPanel() {
  const { selectedNode, setSelectedNode, setSelectedNode: select } = usePortfolioStore()

  const related =
    selectedNode &&
    [...getConnectedIds(selectedNode.id)]
      .map((id) => nodeById.get(id))
      .filter(Boolean) as PortfolioNode[]

  return (
    <AnimatePresence>
      {selectedNode && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setSelectedNode(null)}
          />
          <motion.aside
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-zinc-800 bg-[#0c0d10]/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-start justify-between border-b border-zinc-800 p-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  {typeLabel(selectedNode.type)}
                </p>
                <h2 className="mt-1 text-xl font-semibold text-zinc-50">{selectedNode.label}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNode(null)}
                className="rounded-md p-2 text-zinc-500 transition hover:bg-zinc-800 hover:text-zinc-200"
                aria-label="Close panel"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <p className="text-sm font-medium text-cyan-400/80">{selectedNode.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{selectedNode.detail}</p>
              {selectedNode.keyPoints && selectedNode.keyPoints.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {selectedNode.keyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-zinc-400 before:text-cyan-500 before:content-['·']"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {selectedNode.earthbancRelevance && (
                <div className="mt-8 rounded-lg border border-violet-500/20 bg-violet-500/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-violet-400/80">
                    Platform & regulated product relevance
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {selectedNode.earthbancRelevance}
                  </p>
                </div>
              )}
              {related && related.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Related nodes
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {related.slice(0, 12).map((node) => (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => select(node)}
                        className="rounded-md bg-zinc-800/80 px-2.5 py-1 text-xs text-zinc-300 transition hover:bg-zinc-700 hover:text-zinc-100"
                      >
                        {node.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
