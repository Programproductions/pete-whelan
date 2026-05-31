import { constellations, type ConstellationId } from '../data/constellations'
import { usePortfolioStore } from '../store/usePortfolioStore'

export function ConstellationBar() {
  const { constellation, setConstellation } = usePortfolioStore()

  return (
    <div>
      <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
        Constellations
      </span>
      <div className="mt-2 flex flex-wrap gap-2">
        {constellations.map((c) => (
          <button
            key={c.id}
            type="button"
            title={c.description}
            onClick={() =>
              setConstellation(constellation === c.id ? null : (c.id as ConstellationId))
            }
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              constellation === c.id
                ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40'
                : 'bg-zinc-800/60 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  )
}
