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
    paddingTop: 28,
    paddingBottom: 52,
    paddingHorizontal: 36,
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    lineHeight: 1.38,
    color: colors.body,
  },
  header: {
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: colors.ink,
    marginBottom: 2,
  },
  title: {
    fontSize: 10,
    color: colors.accent,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.ink,
    marginTop: 9,
    marginBottom: 4,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
    letterSpacing: 0.4,
  },
  summary: {
    fontSize: 9.5,
    lineHeight: 1.38,
    color: colors.body,
    marginBottom: 3,
  },
  skillsLine: {
    fontSize: 8.5,
    lineHeight: 1.32,
    color: colors.body,
    marginBottom: 2,
  },
  skillsLabel: {
    fontFamily: 'Helvetica-Bold',
    color: colors.ink,
  },
  roleBlock: {
    marginTop: 7,
    marginBottom: 1,
  },
  roleHeadline: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.ink,
  },
  roleContext: {
    fontSize: 8.5,
    color: colors.muted,
    marginTop: 1,
    marginBottom: 2,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingRight: 6,
  },
  bulletMark: {
    width: 10,
    fontSize: 9,
    color: colors.accent,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.32,
    color: colors.body,
  },
  footer: {
    position: 'absolute',
    bottom: 22,
    left: 36,
    right: 36,
    borderTopWidth: 1,
    borderTopColor: colors.rule,
    paddingTop: 5,
    fontSize: 7.5,
    color: colors.muted,
    textAlign: 'center',
  },
  footerLink: {
    color: colors.accent,
    textDecoration: 'none',
  },
})
