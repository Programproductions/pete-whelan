import { useState } from 'react'
import { motion } from 'framer-motion'
import { downloadCvPdf } from '../utils/downloadCvPdf'

type CvEntryChoiceProps = {
  onExploreInteractive: () => void
}

export function CvEntryChoice({ onExploreInteractive }: CvEntryChoiceProps) {
  const [generating, setGenerating] = useState(false)

  const handleGeneratePdf = async () => {
    setGenerating(true)
    try {
      await downloadCvPdf()
    } catch (err) {
      console.error('PDF generation failed', err)
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="mt-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
        Choose your path
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => void handleGeneratePdf()}
          disabled={generating}
          className="group relative overflow-hidden rounded-2xl border border-zinc-700/60 bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-6 text-left ring-1 ring-zinc-700/40 transition hover:border-zinc-600 hover:shadow-[0_0_32px_rgba(255,255,255,0.04)] disabled:opacity-60"
        >
          <span className="block text-lg font-semibold text-zinc-100">
            {generating ? 'Generating…' : 'Generate PDF'}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-zinc-400">
            The familiar résumé — structured, printable, recruiter-ready.
          </span>
        </motion.button>

        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onExploreInteractive}
          className="group relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/50 to-zinc-950 p-6 text-left ring-1 ring-cyan-500/20 transition hover:border-cyan-400/60 hover:shadow-[0_0_32px_rgba(34,211,238,0.15)]"
        >
          <span className="block text-lg font-semibold text-cyan-100">
            Explore interactive CV
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-cyan-200/60">
            Follow the graph — projects, skills and domains as a living system.
          </span>
        </motion.button>
      </div>
    </div>
  )
}
