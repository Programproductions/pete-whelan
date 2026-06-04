import { motion } from 'framer-motion'

type HeroCTAProps = {
  onExplorePortfolio: () => void
}

export function HeroCTA({ onExplorePortfolio }: HeroCTAProps) {
  const scrollToPlatforms = () => {
    document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="mt-10 flex flex-wrap gap-3">
      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={scrollToPlatforms}
        className="rounded-lg bg-cyan-500/20 px-5 py-2.5 text-sm font-semibold text-cyan-100 ring-1 ring-cyan-500/40 transition hover:bg-cyan-500/30"
      >
        Explore platforms
      </motion.button>
      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onExplorePortfolio}
        className="rounded-lg bg-zinc-800/80 px-5 py-2.5 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 transition hover:bg-zinc-800"
      >
        Explore portfolio
      </motion.button>
    </div>
  )
}
