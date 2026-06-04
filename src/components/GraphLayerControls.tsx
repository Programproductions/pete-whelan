import type { GraphLayerId } from '../utils/graphLayers'
import { usePortfolioStore } from '../store/usePortfolioStore'

const layers: { id: GraphLayerId; label: string; hint: string }[] = [
  { id: 'organizations', label: 'Companies & clients', hint: 'Inner ring around Pete' },
  { id: 'projects', label: 'Projects', hint: 'Delivery work per organisation' },
  {
    id: 'capabilities',
    label: 'Skills & domains',
    hint: 'Skills, tech, domains & methods — below Pete, linked to projects',
  },
]

export function GraphLayerControls() {
  const { graphLayers, setGraphLayer } = usePortfolioStore()

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
        Graph layers
      </span>
      <div className="flex flex-wrap gap-2">
        {layers.map((layer) => {
          const on = graphLayers[layer.id]
          return (
            <button
              key={layer.id}
              type="button"
              title={layer.hint}
              onClick={() => setGraphLayer(layer.id, !on)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                on
                  ? 'bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/40'
                  : 'bg-zinc-800/60 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {on ? '− ' : '+ '}
              {layer.label}
            </button>
          )
        })}
      </div>
      <p className="text-[10px] text-zinc-600">
        Pete stays at the centre — add or remove layers without hiding the spine.
      </p>
    </div>
  )
}
