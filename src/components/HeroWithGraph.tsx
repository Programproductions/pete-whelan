import { motion } from 'framer-motion'
import { hero, contact } from '../data/cvContent'
import { DownloadCvButtons } from './DownloadCvButtons'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { GraphCanvas } from './GraphCanvas'
import { GraphToolbar } from './GraphToolbar'
import { MobileGraphFallback } from './MobileGraphFallback'
import { IterationNotice } from './IterationNotice'

type HeroWithGraphProps = {
  pdfAvailable: boolean
}

export function HeroWithGraph({ pdfAvailable }: HeroWithGraphProps) {
  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <section className="relative px-4 pb-12 pt-24 md:px-8 md:pt-28 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(34, 211, 238, 0.12), transparent 55%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <IterationNotice className="mb-8" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
          <div className="lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80"
            >
              {hero.proofLine}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl lg:text-5xl"
            >
              {hero.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-base font-medium text-cyan-300/90 md:text-lg"
            >
              {hero.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="mt-5 text-sm leading-relaxed text-zinc-400 md:text-base"
            >
              {hero.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-2"
            >
              <DownloadCvButtons pdfAvailable={pdfAvailable} />
              <a
                href={`mailto:${contact.email}`}
                className="rounded-lg px-4 py-2 text-sm text-zinc-400 hover:text-zinc-200"
              >
                Contact
              </a>
            </motion.div>
            <p className="mt-6 hidden text-xs text-zinc-600 lg:block">
              Click any node · constellations filter threads · try Graph view first
            </p>
          </div>

          <div className="flex min-w-0 flex-col">
            <div className="mb-4 hidden md:block">
              <GraphToolbar />
            </div>
            {isMobile ? (
              <>
                <GraphToolbar />
                <MobileGraphFallback />
              </>
            ) : (
              <>
                <GraphCanvas className="h-[min(58vh,560px)] w-full" />
                <p className="mt-2 text-center text-[10px] text-zinc-600">
                  Drag to orbit · scroll to zoom · click a node for the story path
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
