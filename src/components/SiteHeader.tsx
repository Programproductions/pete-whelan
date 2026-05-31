import { site } from '../data/cvContent'
import { usePortfolioStore, type SiteMode } from '../store/usePortfolioStore'

export function SiteHeader() {
  const { siteMode, setSiteMode } = usePortfolioStore()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-[#07080a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <span className="text-sm font-medium text-zinc-300">{site.brandLabel}</span>
        <div className="flex rounded-lg bg-zinc-900/80 p-0.5 ring-1 ring-zinc-800">
          {(['interactive', 'traditional'] as SiteMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setSiteMode(mode)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium capitalize transition ${
                siteMode === mode
                  ? 'bg-zinc-800 text-zinc-100'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {mode === 'interactive' ? 'Interactive' : 'Traditional'}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
