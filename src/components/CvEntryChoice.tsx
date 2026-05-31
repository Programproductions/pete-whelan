import { useState } from 'react'
import { motion } from 'framer-motion'
import { pdfPath } from '../data/cvContent'
import { downloadCvPdf } from '../utils/downloadCvPdf'

type CvEntryChoiceProps = {
  onExploreInteractive: () => void
  pdfAvailable: boolean
}

export function CvEntryChoice({ onExploreInteractive, pdfAvailable }: CvEntryChoiceProps) {
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
          className="group relative overflow-hidden rounded-2xl border border-red-500/40 bg-gradient-to-br from-red-950/80 to-zinc-950 p-6 text-left ring-1 ring-red-500/20 transition hover:border-red-400/60 hover:shadow-[0_0_32px_rgba(239,68,68,0.15)] disabled:opacity-60"
        >
          <span className="inline-block rounded-full bg-red-500/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-red-300">
            Red pill
          </span>
          <span className="mt-3 block text-lg font-semibold text-red-100">
            {generating ? 'Generating…' : 'Generate PDF'}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-red-200/60">
            The familiar résumé — structured, printable, recruiter-ready.
          </span>
          {pdfAvailable && (
            <a
              href={pdfPath}
              download
              onClick={(e) => e.stopPropagation()}
              className="mt-4 inline-block text-xs text-red-300/80 underline-offset-2 hover:text-red-200 hover:underline"
            >
              Or download static copy
            </a>
          )}
        </motion.button>

        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onExploreInteractive}
          className="group relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/50 to-zinc-950 p-6 text-left ring-1 ring-cyan-500/20 transition hover:border-cyan-400/60 hover:shadow-[0_0_32px_rgba(34,211,238,0.15)]"
        >
          <span className="inline-block rounded-full bg-cyan-500/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan-300">
            Blue pill
          </span>
          <span className="mt-3 block text-lg font-semibold text-cyan-100">
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
