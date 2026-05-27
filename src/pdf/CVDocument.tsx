import {
  Document,
  Page,
  Text,
  View,
  Link,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { cvData } from '../data/cv';
import avatarImg from '../assets/avatar.png';
import { paletteToPdfColors } from '../theme/pdfColors';
import { yearsOfExperience } from '../utils/experienceYears';

Font.register({
  family: 'Helvetica',
  fonts: [],
});

const colors = paletteToPdfColors();

const SIDEBAR_WIDTH = '25%';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: colors.mainBg,
    fontFamily: 'Helvetica',
    fontSize: 9,
    position: 'relative',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: colors.sidebar,
    padding: 20,
    flexDirection: 'column',
    gap: 16,
  },
  main: {
    width: '100%',
    padding: 24,
    flexDirection: 'column',
    gap: 20,
  },

  // Sidebar elements
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
    marginBottom: 4,
    objectFit: 'cover',
  },
  sectionLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: colors.lightGray,
    letterSpacing: 0.2,
    borderBottom: `0.5px solid ${colors.border}`,
    paddingBottom: 3,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  contactBullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.mutedGray,
    marginTop: 2.5,
    flexShrink: 0,
  },
  contactText: {
    fontSize: 8,
    color: colors.lightGray,
    flexShrink: 1,
  },
  contactLink: {
    fontSize: 8,
    color: colors.secondaryGray,
    textDecoration: 'none',
  },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  langName: { fontSize: 8, color: colors.lightGray },
  langBadge: {
    fontSize: 7,
    color: colors.secondaryGray,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 8,
  },
  hobbyItem: { marginBottom: 5 },
  hobbyTitle: { fontSize: 8, color: colors.lightGray, fontFamily: 'Helvetica-Bold' },
  hobbyDetail: { fontSize: 7, color: colors.mutedGray },
  sidebarEduItem: { marginBottom: 6 },
  sidebarEduSchool: { fontSize: 7, color: colors.lightGray, fontFamily: 'Helvetica-Bold', lineHeight: 1.35 },
  sidebarEduPeriod: { fontSize: 7, color: colors.mutedGray, marginTop: 2 },

  // Main section elements
  headerBlock: {
    backgroundColor: colors.mainBg,
    paddingBottom: 10,
    marginBottom: 8,
    borderBottom: `0.5px solid ${colors.border}`,
  },
  nameFirst: {
    fontSize: 11,
    color: colors.secondaryGray,
    fontFamily: 'Helvetica',
  },
  nameLast: {
    fontSize: 24,
    color: colors.lightGray,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -0.5,
    marginTop: 2,
  },
  heroRole: {
    fontSize: 10,
    color: colors.secondaryGray,
    marginTop: 4,
    fontFamily: 'Helvetica-Bold',
  },
  heroMeta: {
    fontSize: 8,
    color: colors.mutedGray,
    marginTop: 3,
  },

  mainSectionLabel: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: colors.lightGray,
    letterSpacing: -0.2,
    borderBottom: `0.5px solid ${colors.border}`,
    paddingBottom: 3,
    marginBottom: 8,
  },
  companyName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.lightGray,
    marginBottom: 3,
  },
  roleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  roleTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.lightGray,
    flexShrink: 1,
  },
  rolePeriod: {
    fontSize: 7,
    color: colors.secondaryGray,
    backgroundColor: 'rgba(59, 130, 246, 0.12)',
    borderWidth: 0.5,
    borderColor: 'rgba(59, 130, 246, 0.18)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    flexShrink: 0,
  },
  bullet: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 2,
    paddingLeft: 8,
  },
  bulletDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors.mutedGray,
    marginTop: 2.5,
    flexShrink: 0,
  },
  bulletText: {
    fontSize: 8,
    color: colors.secondaryGray,
    lineHeight: 1.5,
    flexShrink: 1,
  },

  projectCard: {
    borderWidth: 0.5,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 8,
    marginBottom: 6,
    backgroundColor: colors.cardBg,
  },
  projectName: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.lightGray,
    marginBottom: 3,
  },
  projectDesc: { fontSize: 8, color: colors.secondaryGray, marginBottom: 3, lineHeight: 1.5 },
  projectTech: { fontSize: 7, color: colors.mutedGray, marginBottom: 4 },
  projectLink: {
    fontSize: 7,
    color: colors.accent,
    textDecoration: 'none',
  },

  eduRow: { flexDirection: 'row', gap: 8, marginBottom: 8, alignItems: 'flex-start' },
  eduDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.04)',
    marginTop: 1,
    flexShrink: 0,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  eduSchool: { fontSize: 9, color: colors.lightGray, fontFamily: 'Helvetica-Bold' },
  eduPeriod: { fontSize: 7, color: colors.mutedGray, marginTop: 2 },

  skillGroupTitle: {
    fontSize: 8,
    color: colors.mutedGray,
    marginBottom: 3,
    fontFamily: 'Helvetica-Bold',
  },
  skillTagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 3, marginBottom: 6 },
  skillTag: {
    fontSize: 7,
    color: colors.secondaryGray,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 8,
  },
  gdprText: {
    fontSize: 6.5,
    color: colors.mutedGray,
    marginTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: colors.border,
    paddingTop: 6,
  },
  divider: {
    height: 0.5,
    backgroundColor: colors.border,
    marginVertical: 4,
  },
});

interface Props {
  lang: 'en' | 'pl';
  t: (key: string) => string;
}

function PdfSidebar({ t }: { t: (key: string) => string }) {
  return (
    <>
      {/* Initials */}
      <View style={{ alignItems: 'center', marginBottom: 8 }}>
        <Image src={avatarImg} style={styles.avatar} />
        <Text style={{ fontSize: 7, color: colors.mutedGray, marginTop: 4 }}>
          {t('nav.dob')}: {cvData.contact.dob}
        </Text>
      </View>

      {/* Contact */}
      <View>
        <Text style={styles.sectionLabel}>{t('section.contact')}</Text>
        <View style={styles.contactRow}>
          <View style={styles.contactBullet} />
          <Link src={`tel:${cvData.contact.phone.replace(/\s/g, '')}`} style={styles.contactLink}>
            {cvData.contact.phone}
          </Link>
        </View>
        <View style={styles.contactRow}>
          <View style={styles.contactBullet} />
          <Link src={`mailto:${cvData.contact.email}`} style={styles.contactLink}>
            {cvData.contact.email}
          </Link>
        </View>
        <View style={styles.contactRow}>
          <View style={styles.contactBullet} />
          <Link src={cvData.contact.linkedin} style={styles.contactLink}>
            {cvData.contact.linkedinHandle}
          </Link>
        </View>
        <View style={styles.contactRow}>
          <View style={styles.contactBullet} />
          <Link src={cvData.contact.github} style={styles.contactLink}>
            {cvData.contact.githubHandle}
          </Link>
        </View>
        <View style={styles.contactRow}>
          <View style={styles.contactBullet} />
          <Text style={styles.contactText}>
            {cvData.contact.address}
            {'\n'}
            {t('contact.street')}
          </Text>
        </View>
      </View>

      {/* Languages */}
      <View>
        <Text style={styles.sectionLabel}>{t('section.languages')}</Text>
        {cvData.languages.map((lang) => (
          <View key={lang.langKey} style={styles.langRow}>
            <Text style={styles.langName}>{t(lang.langKey)}</Text>
            <Text style={styles.langBadge}>{lang.level}</Text>
          </View>
        ))}
      </View>

      {/* Education */}
      <View>
        <Text style={styles.sectionLabel}>{t('section.education')}</Text>
        {cvData.education.map((edu) => (
          <View key={edu.schoolKey} style={styles.sidebarEduItem}>
            <Text style={styles.sidebarEduSchool}>{t(edu.schoolKey)}</Text>
            <Text style={styles.sidebarEduPeriod}>{edu.period}</Text>
          </View>
        ))}
      </View>

      {/* Hobby */}
      <View>
        <Text style={styles.sectionLabel}>{t('section.hobby')}</Text>
        {cvData.hobby.map((h) => (
          <View key={h.key} style={styles.hobbyItem}>
            <Text style={styles.hobbyTitle}>{t(h.key)}</Text>
            <Text style={styles.hobbyDetail}>{h.detail}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

function PdfMainContent({ t }: { t: (key: string, options?: Record<string, unknown>) => string }) {
  const experienceYears = yearsOfExperience(
    cvData.workExperience.flatMap((exp) => exp.roles),
  );

  return (
    <>
      <View style={styles.headerBlock}>
            <Text style={styles.nameFirst}>{cvData.name.first}</Text>
            <Text style={styles.nameLast}>{cvData.name.last}</Text>
            <Text style={styles.heroRole}>{t('header.role')}</Text>
            <Text style={styles.heroMeta}>{t('header.meta', { years: experienceYears })}</Text>
          </View>

          {/* Work Experience */}
          <View>
            <Text style={styles.mainSectionLabel}>{t('section.work')}</Text>
            {cvData.workExperience.map((exp) => (
              <View key={exp.company} style={{ marginBottom: 6 }}>
                <Text style={styles.companyName}>{exp.company}</Text>
                {exp.roles.map((role) => (
                  <View key={role.titleKey} style={{ marginBottom: 6 }}>
                    <View style={styles.roleRow}>
                      <Text style={styles.roleTitle}>{t(role.titleKey)}</Text>
                      <Text style={styles.rolePeriod}>{role.period}</Text>
                    </View>
                    {role.bullets.map((b) => (
                      <View key={b} style={styles.bullet}>
                        <View style={styles.bulletDot} />
                        <Text style={styles.bulletText}>{t(b)}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            ))}
          </View>

          {/* Projects */}
          <View>
            <Text style={styles.mainSectionLabel}>{t('section.projects')}</Text>
            {cvData.projects.map((p) => (
              <View key={p.nameKey} style={styles.projectCard}>
                <View style={styles.roleRow}>
                  <Text style={styles.projectName}>{t(p.nameKey)}</Text>
                  <Text style={styles.rolePeriod}>{p.period}</Text>
                </View>
                <Text style={styles.projectDesc}>{t(p.descriptionKey)}</Text>
                <Text style={styles.projectTech}>{p.techStack.join(' · ')}</Text>
                {p.link && (
                  <Link src={p.link} style={styles.projectLink}>{p.link}</Link>
                )}
              </View>
            ))}
          </View>

          {/* Skills */}
          <View>
            <Text style={styles.mainSectionLabel}>{t('section.skills')}</Text>
            {cvData.skillGroups.map((group) => (
              <View key={group.titleKey} style={{ marginBottom: 5 }}>
                <Text style={styles.skillGroupTitle}>{t(group.titleKey)}</Text>
                <View style={styles.skillTagsRow}>
                  {group.items.map((item) => (
                    <Text key={item} style={styles.skillTag}>{item}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

      <Text style={styles.gdprText}>{t('gdpr')}</Text>
    </>
  );
}

export default function CVDocument({ t, lang: _lang }: Props) {
  return (
    <Document title={`Mateusz Rzewnicki — CV`} author="Mateusz Rzewnicki">
      <Page size="A4" style={styles.page}>
        {/* Sidebar: first page only (personal data) */}
        <View
          fixed
          style={styles.sidebar}
          render={({ pageNumber }) => (pageNumber === 1 ? <PdfSidebar t={t} /> : null)}
        />

        {/* Main: offset on page 1, full width on following pages */}
        <View
          render={({ pageNumber }) => (
            <View
              style={[
                styles.main,
                { paddingLeft: pageNumber === 1 ? SIDEBAR_WIDTH : 24 },
              ]}
            >
              <PdfMainContent t={t} />
            </View>
          )}
        />
      </Page>
    </Document>
  );
}
