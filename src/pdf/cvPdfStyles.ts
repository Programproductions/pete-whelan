import { StyleSheet } from '@react-pdf/renderer'

export const colors = {
  ink: '#111827',
  body: '#374151',
  muted: '#6b7280',
  accent: '#0f766e',
  rule: '#d1d5db',
}

export const pdfStyles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 44,
    paddingHorizontal: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.45,
    color: colors.body,
  },
  header: {
    marginBottom: 14,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: colors.ink,
    marginBottom: 2,
  },
  title: {
    fontSize: 11,
    color: colors.accent,
    marginBottom: 6,
  },
  contact: {
    fontSize: 9.5,
    color: colors.muted,
    marginBottom: 2,
  },
  contactLink: {
    color: colors.accent,
    textDecoration: 'none',
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.ink,
    marginTop: 14,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
    letterSpacing: 0.5,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    color: colors.body,
    marginBottom: 4,
  },
  skillsLine: {
    fontSize: 9,
    lineHeight: 1.4,
    color: colors.body,
    marginBottom: 4,
  },
  skillsLabel: {
    fontFamily: 'Helvetica-Bold',
    color: colors.ink,
  },
  roleBlock: {
    marginTop: 10,
    marginBottom: 2,
  },
  roleHeadline: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.ink,
  },
  roleContext: {
    fontSize: 9,
    color: colors.muted,
    marginTop: 2,
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingRight: 8,
  },
  bulletMark: {
    width: 12,
    fontSize: 10,
    color: colors.accent,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    lineHeight: 1.4,
    color: colors.body,
  },
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: colors.rule,
    paddingTop: 6,
    fontSize: 8,
    color: colors.muted,
    textAlign: 'center',
  },
})
