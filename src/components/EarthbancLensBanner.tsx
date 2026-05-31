import { usePortfolioStore } from '../store/usePortfolioStore'

export function EarthbancLensBanner() {
  const { lens, setLens } = usePortfolioStore()
  if (lens !== 'earthbanc') return null

  return (
    <div className="border-b border-violet-500/20 bg-violet-500/10 px-4 py-2 text-center text-sm text-violet-200/90">
      Viewing portfolio through Earthbanc relevance lens.{' '}
      <button
        type="button"
        onClick={() => setLens('default')}
        className="ml-2 underline decoration-violet-400/50 hover:text-white"
      >
        Clear lens
      </button>
    </div>
  )
}
