import { Document, Page, Text, View, Link } from '@react-pdf/renderer'
import { hero, site, contact, aiNativeStatement, skillClusters, resumeExperience } from '../data/cvContent'
import { pdfStyles as s } from './cvPdfStyles'

function Bullet({ children }: { children: string }) {
  return (
    <View style={s.bulletRow}>
      <Text style={s.bulletMark}>•</Text>
      <Text style={s.bulletText}>{children}</Text>
    </View>
  )
}

export function CvPdfDocument() {
  const summaryText = [hero.tagline, hero.proofLine, aiNativeStatement.paragraphs[0]]
    .filter(Boolean)
    .join(' ')

  return (
    <Document
      title={`${hero.name} — Résumé`}
      author={hero.name}
      subject="Solutions architect — AI & cloud platforms"
    >
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <Text style={s.name}>{hero.name}</Text>
          <Text style={s.title}>{hero.title}</Text>
        </View>

        <Text style={s.sectionTitle}>PROFESSIONAL SUMMARY</Text>
        <Text style={s.summary}>{summaryText}</Text>

        <Text style={s.sectionTitle}>TECHNICAL SKILLS</Text>
        {skillClusters.map((cluster) => (
          <Text key={cluster.title} style={s.skillsLine}>
            <Text style={s.skillsLabel}>{cluster.title}: </Text>
            {cluster.items.join(', ')}
          </Text>
        ))}

        <Text style={s.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
        {resumeExperience.map((role) => (
          <View key={role.id} style={s.roleBlock}>
            <Text style={s.roleHeadline}>{role.headline}</Text>
            <Text style={s.roleContext}>{role.context}</Text>
            {role.bullets.map((bullet) => (
              <Bullet key={bullet.slice(0, 48)}>{bullet}</Bullet>
            ))}
          </View>
        ))}

        <View style={s.footer} fixed>
          <Text>
            <Link src={`mailto:${contact.email}`} style={s.footerLink}>
              {contact.email}
            </Link>
            {' · '}
            <Link src={contact.linkedin} style={s.footerLink}>
              linkedin.com/in/pawhelan
            </Link>
            {' · '}
            {site.brandLabel}
          </Text>
        </View>
      </Page>
    </Document>
  )
}
