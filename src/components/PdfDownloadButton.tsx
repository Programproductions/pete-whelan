import { DownloadCvButtons } from './DownloadCvButtons'

export function PdfDownloadButton() {
  return (
    <section className="border-t border-zinc-800/80 px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm text-zinc-500">Need a traditional résumé for recruiters?</p>
        <div className="mt-4 flex justify-center">
          <DownloadCvButtons />
        </div>
      </div>
    </section>
  )
}
