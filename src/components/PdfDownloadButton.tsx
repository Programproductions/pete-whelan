import { DownloadCvButtons } from './DownloadCvButtons'

type PdfDownloadButtonProps = {
  available: boolean
}

export function PdfDownloadButton({ available }: PdfDownloadButtonProps) {
  return (
    <section className="border-t border-zinc-800/80 px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm text-zinc-500">Need the traditional version?</p>
        <div className="mt-4 flex justify-center">
          <DownloadCvButtons pdfAvailable={available} />
        </div>
      </div>
    </section>
  )
}
