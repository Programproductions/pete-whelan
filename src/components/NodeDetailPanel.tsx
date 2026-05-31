import { AnimatePresence, motion } from 'framer-motion'
import { enrichNode } from '../data/narratives'
import {
  getConnectedIds,
  nodeById,
  type NodeType,
  type PortfolioNode,
} from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { RelationshipPath } from './RelationshipPath'

function typeLabel(type: NodeType): string {
  return type.replace(/-/g, ' ')
}

function groupRelated(nodes: PortfolioNode[]) {
  const groups: Record<string, PortfolioNode[]> = {
    project: [],
    technology: [],
    skill: [],
    domain: [],
    company: [],
    methodology: [],
    person: [],
  }
  nodes.forEach((n) => {
    const key = n.type === 'technology' ? 'technology' : n.type
    if (groups[key]) groups[key].push(n)
  })
  return groups
}

export function NodeDetailPanel() {
  const { selectedNode, selectNodeWithPath, setSelectedNode } = usePortfolioStore()

  const node = selectedNode ? enrichNode(selectedNode) : null
  const related =
    node &&
    ([...getConnectedIds(node.id)]
      .map((id) => nodeById.get(id))
      .filter(Boolean) as PortfolioNode[])
  const grouped = related ? groupRelated(related) : null

  return (
    <AnimatePresence>
      {node && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => selectNodeWithPath(null)}
          />
          <motion.aside
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-lg flex-col border-l border-zinc-800 bg-[#0a0b0e]/98 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-start justify-between border-b border-zinc-800 p-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  {typeLabel(node.type)}
                </p>
                <h2 className="mt-1 text-xl font-semibold text-zinc-50">{node.label}</h2>
              </div>
              <button
                type="button"
                onClick={() => selectNodeWithPath(null)}
                className="rounded-md p-2 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <section>
                <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  What it is
                </h3>
                <p className="mt-2 text-sm font-medium text-cyan-400/90">{node.summary}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{node.detail}</p>
              </section>

              {node.whyExists && (
                <section className="mt-6">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Why it exists
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{node.whyExists}</p>
                </section>
              )}

              {node.problemSolved && (
                <section className="mt-6">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Problem solved
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {node.problemSolved}
                  </p>
                </section>
              )}

              {node.outcome && (
                <section className="mt-6">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Outcome
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{node.outcome}</p>
                </section>
              )}

              {node.ledTo && node.ledTo.length > 0 && (
                <section className="mt-6">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    What it led to
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {node.ledTo.map((id) => {
                      const target = nodeById.get(id)
                      return (
                        <li key={id}>
                          <button
                            type="button"
                            onClick={() => target && selectNodeWithPath(target)}
                            className="text-sm text-cyan-400/90 hover:text-cyan-300"
                          >
                            → {target?.label ?? id}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </section>
              )}

              {node.keyPoints && node.keyPoints.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {node.keyPoints.map((point) => (
                    <li key={point} className="text-sm text-zinc-400">
                      · {point}
                    </li>
                  ))}
                </ul>
              )}

              <RelationshipPath />

              {node.earthbancRelevance && (
                <div className="mt-6 rounded-lg border border-violet-500/20 bg-violet-500/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-violet-400/80">
                    Regulated platform relevance
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">{node.earthbancRelevance}</p>
                </div>
              )}

              {grouped && (
                <div className="mt-8 space-y-4">
                  {(
                    [
                      ['Projects', 'project'],
                      ['Technologies', 'technology'],
                      ['Skills', 'skill'],
                      ['Domains', 'domain'],
                      ['Organisations', 'company'],
                      ['Methodologies', 'methodology'],
                    ] as const
                  ).map(([label, key]) => {
                    const items = grouped[key]
                    if (!items?.length) return null
                    return (
                      <div key={key}>
                        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                          {label}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {items.map((n) => (
                            <button
                              key={n.id}
                              type="button"
                              onClick={() => selectNodeWithPath(n)}
                              className="rounded-md bg-zinc-800/80 px-2.5 py-1 text-xs text-zinc-300 hover:bg-zinc-700"
                            >
                              {n.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
