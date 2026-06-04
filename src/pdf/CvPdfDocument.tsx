import { Document, Page, Text, View, Link } from '@react-pdf/renderer'
import {
  hero,
  site,
  contact,
  aiNativeStatement,
  skillClusters,
  projectDeepDives,
  PLATFORM_DEEP_DIVE_IDS,
} from '../data/cvContent'
import { nodeById } from '../data/portfolioGraph'
import { pdfStyles as s } from './cvPdfStyles'

function PdfFooter({ page }: { page: number }) {
  return (
    <View style={s.footer} fixed>
      <View style={{ flexDirection: 'row', gap: 6 }}>
        <Link src={`mailto:${contact.email}`} style={s.contactLink}>
          {contact.email}
        </Link>
        <Text>·</Text>
        <Link src={contact.linkedin} style={s.contactLink}>
          LinkedIn
        </Link>
      </View>
      <Text style={s.pageNumber}>Page {page}</Text>
    </View>
  )
}

function PdfHeader() {
  return (
    <View style={s.header}>
      <Text style={s.name}>{site.brandLabel}</Text>
      <Text style={s.title}>{hero.title}</Text>
      <View style={s.contactRow}>
        <Link src={`mailto:${contact.email}`} style={s.contactLink}>
          {contact.email}
        </Link>
        <Text> · </Text>
        <Link src={contact.linkedin} style={s.contactLink}>
          linkedin.com/in/pawhelan
        </Link>
      </View>
    </View>
  )
}

function ProjectBlock({ projectId }: { projectId: string }) {
  const project = projectDeepDives.find((p) => p.id === projectId)
  if (!project) return null
  const label = nodeById.get(project.id)?.label ?? project.id

  return (
    <View style={s.projectCard} wrap={false}>
      <Text style={s.projectName}>{label}</Text>
      <Text style={s.deliveryLine}>
        {project.delivery.label} — {project.delivery.summary}
      </Text>
      <Text style={[s.label, s.labelProblem]}>Problem</Text>
      <Text style={s.blockText}>{project.problem}</Text>
      <Text style={[s.label, s.labelIntelligence]}>Intelligence</Text>
      <Text style={s.blockText}>{project.intelligence}</Text>
      <Text style={[s.label, s.labelOutcome]}>Outcome</Text>
      <Text style={s.outcomeText}>{project.outcome}</Text>
      <Text style={s.techLine}>{project.technologies.slice(0, 10).join(' · ')}</Text>
    </View>
  )
}

export function CvPdfDocument() {
  const flagshipIds = PLATFORM_DEEP_DIVE_IDS.filter((id) =>
    projectDeepDives.some((p) => p.id === id),
  )

  return (
    <Document
      title={`${site.brandLabel} — CV`}
      author={hero.name}
      subject="AI Systems Architect — Portfolio CV"
    >
      <Page size="A4" style={s.page}>
        <PdfHeader />

        <Text style={s.summary}>{hero.tagline}</Text>
        {hero.proofLine ? <Text style={s.proof}>{hero.proofLine}</Text> : null}

        <View style={s.section}>
          <Text style={s.sectionTitle}>Current platforms</Text>
          {hero.platforms.map((p) => (
            <View key={p.name} style={s.platformRow}>
              <Text style={s.platformBullet}>•</Text>
              <Text style={s.platformText}>
                <Text style={s.platformName}>{p.name}</Text>
                {p.subtitle ? ` (${p.subtitle})` : ''}: {p.outcome}
              </Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Intelligence platforms</Text>
          {flagshipIds.slice(0, 2).map((id) => (
            <ProjectBlock key={id} projectId={id} />
          ))}
        </View>

        <PdfFooter page={1} />
      </Page>

      <Page size="A4" style={s.page}>
        <Text style={[s.name, { fontSize: 14, marginBottom: 12 }]}>{site.brandLabel}</Text>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Intelligence platforms (continued)</Text>
          {flagshipIds.slice(2).map((id) => (
            <ProjectBlock key={id} projectId={id} />
          ))}
        </View>

        <View style={s.section} wrap={false}>
          <Text style={s.sectionTitle}>{aiNativeStatement.heading}</Text>
          {aiNativeStatement.paragraphs.map((p) => (
            <Text key={p.slice(0, 40)} style={s.blockText}>
              {p}
            </Text>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Skills</Text>
          <View style={s.skillsGrid}>
            {skillClusters.map((cluster) => (
              <View key={cluster.title} style={s.skillColumn}>
                <Text style={s.skillTitle}>{cluster.title}</Text>
                <Text style={s.skillItems}>{cluster.items.join(' · ')}</Text>
              </View>
            ))}
          </View>
        </View>

        <PdfFooter page={2} />
      </Page>
    </Document>
  )
}
