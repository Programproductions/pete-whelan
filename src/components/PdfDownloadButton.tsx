import { pdfPath } from '../data/cvContent'

type PdfDownloadButtonProps = {
  available: boolean
}

export function PdfDownloadButton({ available }: PdfDownloadButtonProps) {
  return (
    <section className="border-t border-zinc-800/80 px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm text-zinc-500">Need the traditional version?</p>
        {available ? (
          <a
            href={pdfPath}
            download
            className="mt-4 inline-block rounded-lg bg-zinc-800/80 px-6 py-3 text-sm font-medium text-zinc-200 ring-1 ring-zinc-700 transition hover:bg-zinc-800"
          >
            Download PDF CV
          </a>
        ) : (
          <p className="mt-4 text-sm text-zinc-600">PDF version coming shortly.</p>
        )}
      </div>
    </section>
  )
}
