import { useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import { AiNativeSection } from '../components/AiNativeSection'
import { InteractiveGraphSection } from '../components/InteractiveGraphSection'
import { NodeDetailPanel } from '../components/NodeDetailPanel'
import { ProjectDeepDive } from '../components/ProjectDeepDive'
import { SkillClusters } from '../components/SkillClusters'
import { PdfDownloadButton } from '../components/PdfDownloadButton'
import { SiteFooter } from '../components/SiteFooter'
import { pdfPath } from '../data/cvContent'

export function Home() {
  const [pdfAvailable, setPdfAvailable] = useState(false)

  useEffect(() => {
    fetch(pdfPath, { method: 'HEAD' })
      .then((res) => setPdfAvailable(res.ok))
      .catch(() => setPdfAvailable(false))
  }, [])

  const scrollToGraph = () => {
    document.getElementById('graph')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#07080a]">
      <Hero onExploreGraph={scrollToGraph} pdfAvailable={pdfAvailable} />
      <AiNativeSection />
      <InteractiveGraphSection />
      <ProjectDeepDive />
      <SkillClusters />
      <PdfDownloadButton available={pdfAvailable} />
      <SiteFooter />
      <NodeDetailPanel />
    </div>
  )
}
