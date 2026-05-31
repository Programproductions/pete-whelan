import { useState } from 'react'
import { pdfPath } from '../data/cvContent'
import { downloadCvPdf } from '../utils/downloadCvPdf'

type DownloadCvButtonsProps = {
  pdfAvailable: boolean
  className?: string
}

const buttonClass =
  'rounded-lg bg-zinc-800/80 px-4 py-2 text-sm text-zinc-200 ring-1 ring-zinc-700 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50'

export function DownloadCvButtons({ pdfAvailable, className = '' }: DownloadCvButtonsProps) {
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
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {pdfAvailable ? (
        <a href={pdfPath} download className={buttonClass}>
          Download PDF
        </a>
      ) : (
        <span className="rounded-lg px-4 py-2 text-sm text-zinc-600 ring-1 ring-zinc-800">
          Static PDF coming shortly
        </span>
      )}
      <button
        type="button"
        onClick={() => void handleGenerate()}
        disabled={generating}
        className={buttonClass}
      >
        {generating ? 'Generating…' : 'Generate PDF'}
      </button>
    </div>
  )
}
