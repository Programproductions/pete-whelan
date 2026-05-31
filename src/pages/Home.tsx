import { useEffect, useState } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { EarthbancLensBanner } from '../components/EarthbancLensBanner'
import { AiNativeSection } from '../components/AiNativeSection'
import { Hero } from '../components/Hero'
import { CareerGraphModal } from '../components/CareerGraphModal'
import { InteractiveGraphSection } from '../components/InteractiveGraphSection'
import { InteractiveMethodology } from '../components/InteractiveMethodology'
import { NodeDetailPanel } from '../components/NodeDetailPanel'
import { ProjectDeepDive } from '../components/ProjectDeepDive'
import { SkillClusters } from '../components/SkillClusters'
import { PdfDownloadButton } from '../components/PdfDownloadButton'
import { SiteFooter } from '../components/SiteFooter'
import { RecruiterView } from '../components/RecruiterView'
import { WhyNotCvSection } from '../components/WhyNotCvSection'
import { useEarthbancLens } from '../hooks/useEarthbancLens'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { pdfPath } from '../data/cvContent'
import { timelineMilestones } from '../utils/graphLayout'

function TimelineStrip() {
  const viewMode = usePortfolioStore((s) => s.viewMode)
  if (viewMode !== 'timeline') return null
  return (
    <div className="border-t border-zinc-800/50 bg-zinc-900/20 px-6 py-4 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 text-xs text-zinc-500">
        {timelineMilestones.map((m, i) => (
          <span key={m} className="flex items-center gap-2">
            {i > 0 && <span className="text-zinc-700">→</span>}
            <span className="rounded bg-zinc-800/60 px-2 py-1 text-zinc-400">{m}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Home() {
  const [pdfAvailable, setPdfAvailable] = useState(false)
  const [graphOpen, setGraphOpen] = useState(false)
  const siteMode = usePortfolioStore((s) => s.siteMode)
  useEarthbancLens()

  useEffect(() => {
    fetch(pdfPath, { method: 'HEAD' })
      .then((res) => setPdfAvailable(res.ok))
      .catch(() => setPdfAvailable(false))
  }, [])

  const openGraph = () => setGraphOpen(true)

  return (
    <div className="min-h-screen bg-[#07080a]">
      <SiteHeader />
      <EarthbancLensBanner />
      {siteMode === 'traditional' ? (
        <RecruiterView pdfAvailable={pdfAvailable} />
      ) : (
        <>
          <Hero onExploreGraph={openGraph} pdfAvailable={pdfAvailable} />
          <AiNativeSection />
          <InteractiveGraphSection onOpenGraph={openGraph} />
          <TimelineStrip />
          <InteractiveMethodology />
          <ProjectDeepDive />
          <SkillClusters />
          <WhyNotCvSection />
          <PdfDownloadButton available={pdfAvailable} />
        </>
      )}
      <SiteFooter />
      <CareerGraphModal open={graphOpen} onClose={() => setGraphOpen(false)} />
      {siteMode === 'interactive' && <NodeDetailPanel />}
    </div>
  )
}
