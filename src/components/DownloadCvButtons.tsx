import { useState } from 'react'
import { downloadCvPdf } from '../utils/downloadCvPdf'

type DownloadCvButtonsProps = {
  className?: string
}

const buttonClass =
  'rounded-lg bg-zinc-800/80 px-4 py-2 text-sm text-zinc-200 ring-1 ring-zinc-700 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50'

export function DownloadCvButtons({ className = '' }: DownloadCvButtonsProps) {
  const [generating, setGenerating] = useState(false)

  const handleGenerate = async () => {
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
    <button
      type="button"
      onClick={() => void handleGenerate()}
      disabled={generating}
      className={`${buttonClass} ${className}`.trim()}
    >
      {generating ? 'Generating…' : 'Download résumé (PDF)'}
    </button>
  )
}
