import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer'
import {
  hero,
  site,
  contact,
  aiNativeStatement,
  skillClusters,
  projectDeepDives,
} from '../data/cvContent'
import { nodeById } from '../data/portfolioGraph'

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.45,
    color: '#18181b',
  },
  name: { fontSize: 22, fontFamily: 'Helvetica-Bold', marginBottom: 4 },
  title: { fontSize: 11, color: '#0e7490', marginBottom: 12 },
  tagline: { fontSize: 10, color: '#52525b', marginBottom: 20 },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#18181b',
  },
  paragraph: { marginBottom: 8, color: '#3f3f46' },
  projectTitle: { fontFamily: 'Helvetica-Bold', marginBottom: 4 },
  bullet: { marginLeft: 8, marginBottom: 3, color: '#52525b' },
  clusterTitle: { fontFamily: 'Helvetica-Bold', marginTop: 8, marginBottom: 4, fontSize: 9 },
  footer: { marginTop: 24, fontSize: 9, color: '#71717a' },
})

export function CvPdfDocument() {
  return (
    <Document title={site.pageTitle} author={hero.name}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{site.brandLabel}</Text>
        <Text style={styles.title}>{hero.title}</Text>
        <Text style={styles.tagline}>{hero.tagline}</Text>

        <Text style={styles.sectionTitle}>{aiNativeStatement.heading}</Text>
        {aiNativeStatement.paragraphs.map((p) => (
          <Text key={p.slice(0, 40)} style={styles.paragraph}>
            {p}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Key projects</Text>
        {projectDeepDives.map((project) => (
          <View key={project.id} wrap={false}>
            <Text style={styles.projectTitle}>
              {nodeById.get(project.id)?.label ?? project.id}
            </Text>
            <Text style={styles.paragraph}>{project.problem}</Text>
            <Text style={styles.paragraph}>{project.outcome}</Text>
            <Text style={styles.bullet}>
              Technologies: {project.technologies.join(', ')}
            </Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Skills</Text>
        {skillClusters.map((cluster) => (
          <View key={cluster.title}>
            <Text style={styles.clusterTitle}>{cluster.title}</Text>
            <Text style={styles.paragraph}>{cluster.items.join(' · ')}</Text>
          </View>
        ))}

        <View style={styles.footer}>
          <Link src={`mailto:${contact.email}`}>{contact.email}</Link>
          <Text> · </Text>
          <Link src={contact.linkedin}>LinkedIn</Link>
        </View>
      </Page>
    </Document>
  )
}
