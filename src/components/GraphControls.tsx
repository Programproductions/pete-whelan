import type { FilterCategory } from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'

const filters: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'companies', label: 'Companies' },
  { id: 'ai', label: 'AI' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'internal-tools', label: 'Internal Tools' },
]

export function GraphControls() {
  const { filter, search, setFilter, setSearch } = usePortfolioStore()

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              filter === f.id
                ? 'bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/40'
                : 'bg-zinc-800/60 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <input
        type="search"
        placeholder="Search nodes…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 sm:max-w-xs"
      />
    </div>
  )
}
