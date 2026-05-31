import type { GraphViewMode } from '../utils/graphLayout'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { GraphControls } from './GraphControls'
import { ConstellationBar } from './ConstellationBar'

const viewModes: { id: GraphViewMode; label: string }[] = [
  { id: 'graph', label: 'Graph' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'timeline', label: 'Timeline' },
]

export function GraphToolbar() {
  const { viewMode, setViewMode } = usePortfolioStore()

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">View</span>
        {viewModes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            onClick={() => setViewMode(mode.id)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              viewMode === mode.id
                ? 'bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/40'
                : 'bg-zinc-800/60 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>
      <ConstellationBar />
      <GraphControls />
    </div>
  )
}
