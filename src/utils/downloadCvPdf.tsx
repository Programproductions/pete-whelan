import { pdf } from '@react-pdf/renderer'
import { CvPdfDocument } from '../pdf/CvPdfDocument'

const GENERATED_FILENAME = 'Pete-Whelan-Portfolio.pdf'

export async function downloadCvPdf(): Promise<void> {
  const blob = await pdf(<CvPdfDocument />).toBlob()
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = GENERATED_FILENAME
  anchor.click()
  URL.revokeObjectURL(url)
}
