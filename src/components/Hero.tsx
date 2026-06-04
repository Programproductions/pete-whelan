import { motion } from 'framer-motion'
import { hero, site } from '../data/cvContent'
import { HeroCTA } from './HeroCTA'

type HeroProps = {
  onExploreGraph: () => void
}

export function Hero({ onExploreGraph }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pt-36 lg:px-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.15), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80"
        >
          {hero.proofLine}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-6xl"
        >
          {site.brandLabel}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-4 text-lg font-medium text-cyan-300/90 md:text-xl"
        >
          {hero.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-8"
        >
          <p className="text-sm font-medium text-zinc-500">{hero.platformsIntro}</p>
          <ul className="mt-3 space-y-2">
            {hero.platforms.map((platform) => (
              <li key={platform.name} className="flex gap-2 text-sm text-zinc-300 md:text-base">
                <span className="text-cyan-400/90">•</span>
                <span>
                  <span className="font-medium text-zinc-100">{platform.name}</span>
                  {platform.subtitle && (
                    <span className="text-zinc-500"> ({platform.subtitle})</span>
                  )}
                  <span className="text-zinc-400"> — {platform.outcome}</span>
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
        >
          <HeroCTA onViewArchitecture={onExploreGraph} />
        </motion.div>
      </div>
    </section>
  )
}
