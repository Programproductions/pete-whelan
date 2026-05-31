import { motion } from 'framer-motion'
import { hero, contact } from '../data/cvContent'
import { CvEntryChoice } from './CvEntryChoice'

type HeroProps = {
  onExploreGraph: () => void
  pdfAvailable: boolean
}

export function Hero({ onExploreGraph, pdfAvailable }: HeroProps) {
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
          {hero.name}
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
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <CvEntryChoice onExploreInteractive={onExploreGraph} pdfAvailable={pdfAvailable} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8"
        >
          <a
            href={`mailto:${contact.email}`}
            className="text-sm text-zinc-500 transition hover:text-zinc-300"
          >
            {contact.email}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
