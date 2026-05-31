import { nodeById } from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'

export function RelationshipPath() {
  const { relationshipPath, selectNodeWithPath } = usePortfolioStore()
  if (relationshipPath.length < 2) return null

  return (
    <div className="mt-6 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
      <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/80">
        Relationship path
      </p>
      <div className="mt-3 flex flex-col gap-1">
        {relationshipPath.map((id, i) => {
          const node = nodeById.get(id)
          if (!node) return null
          return (
            <div key={`${id}-${i}`} className="flex items-start gap-2">
              {i > 0 && <span className="ml-1 text-zinc-600">↓</span>}
              <button
                type="button"
                onClick={() => selectNodeWithPath(node)}
                className="text-left text-sm text-zinc-300 transition hover:text-cyan-300"
              >
                {node.label}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
