import { useMemo, useState } from 'react'
import {
  filterNodes,
  getConnectedIds,
  nodeById,
  portfolioNodes,
  type PortfolioNode,
} from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { GraphControls } from './GraphControls'

type MobileGraphFallbackProps = {
  /** When true, toolbar lives above — hide duplicate filters/search. */
  embedded?: boolean
}

function NodeAccordionItem({ node }: { node: PortfolioNode }) {
  const [open, setOpen] = useState(false)
  const { selectNodeWithPath } = usePortfolioStore()
  const related = [...getConnectedIds(node.id)]
    .map((id) => nodeById.get(id))
    .filter(Boolean)
    .slice(0, 6) as PortfolioNode[]

  return (
    <div className="border-b border-zinc-800/80">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <div>
          <span className="font-mono text-[10px] uppercase text-zinc-500">{node.type}</span>
          <p className="mt-0.5 font-medium text-zinc-100">{node.label}</p>
        </div>
        <span className="text-zinc-500">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="pb-4">
          <p className="text-sm text-zinc-400">{node.summary}</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">{node.detail}</p>
          <button
            type="button"
            onClick={() => selectNodeWithPath(node)}
            className="mt-3 text-xs font-medium text-cyan-400"
          >
            Open full detail →
          </button>
          {related.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {related.map((r) => (
                <span
                  key={r.id}
                  className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400"
                >
                  {r.label}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function MobileGraphFallback({ embedded = false }: MobileGraphFallbackProps) {
  const { filter, search } = usePortfolioStore()
  const filtered = useMemo(
    () => filterNodes(portfolioNodes, filter, search),
    [filter, search],
  )

  const featured = filtered.filter((n) => n.featured)
  const rest = filtered.filter((n) => !n.featured)

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-4">
      {!embedded && (
        <p className="mb-4 text-xs text-zinc-500">
          Compact view for smaller screens — tap items to open details.
        </p>
      )}
      {!embedded && <GraphControls />}
      <div className={embedded ? '' : 'mt-6'}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Featured
        </p>
        {featured.map((node) => (
          <NodeAccordionItem key={node.id} node={node} />
        ))}
      </div>
      <div className="mt-4 max-h-80 overflow-y-auto">
        {rest.map((node) => (
          <NodeAccordionItem key={node.id} node={node} />
        ))}
      </div>
    </div>
  )
}
