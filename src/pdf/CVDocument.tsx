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

Font.register({
  family: 'Helvetica',
  fonts: [],
});

const colors = {
  sidebar: '#1a1a2e',
  accent: '#e94560',
  accentLight: '#ff6b81',
  mainBg: '#16213e',
  white: '#ffffff',
  lightGray: '#c8c8d0',
  mutedGray: '#8888a0',
  darkBlue: '#0f3460',
  purple: '#533483',
};

const SIDEBAR_WIDTH = '25%';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#16213e',
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
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    borderBottom: `0.5px solid ${colors.accent}`,
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
    backgroundColor: colors.accent,
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
    color: colors.accentLight,
    textDecoration: 'underline',
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
    color: colors.accent,
    backgroundColor: `${colors.accent}22`,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },
  hobbyItem: { marginBottom: 5 },
  hobbyTitle: { fontSize: 8, color: colors.lightGray, fontFamily: 'Helvetica-Bold' },
  hobbyDetail: { fontSize: 7, color: colors.mutedGray },
  sidebarEduItem: { marginBottom: 6 },
  sidebarEduSchool: { fontSize: 7, color: colors.lightGray, fontFamily: 'Helvetica-Bold', lineHeight: 1.35 },
  sidebarEduPeriod: { fontSize: 7, color: colors.accent, marginTop: 2 },

  // Main section elements
  headerBlock: {
    backgroundColor: colors.darkBlue,
    padding: 16,
    marginBottom: 4,
    borderRadius: 4,
  },
  nameFirst: {
    fontSize: 14,
    color: colors.lightGray,
    letterSpacing: 2,
    fontFamily: 'Helvetica',
    textTransform: 'uppercase',
  },
  nameLast: {
    fontSize: 28,
    color: colors.accent,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -0.5,
  },
  tagRow: { flexDirection: 'row', gap: 6, marginTop: 6, flexWrap: 'wrap' },
  tag: {
    fontSize: 7,
    color: colors.accent,
    borderWidth: 0.5,
    borderColor: colors.accent,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },

  mainSectionLabel: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    borderBottom: `0.5px solid ${colors.accent}`,
    paddingBottom: 3,
    marginBottom: 8,
  },
  companyName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.white,
    marginBottom: 4,
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
    color: colors.accent,
    backgroundColor: `${colors.accent}22`,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
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
    backgroundColor: `${colors.accent}99`,
    marginTop: 2.5,
    flexShrink: 0,
  },
  bulletText: {
    fontSize: 8,
    color: colors.mutedGray,
    flexShrink: 1,
  },

  projectCard: {
    borderWidth: 0.5,
    borderColor: `${colors.accent}44`,
    borderRadius: 6,
    padding: 10,
    marginBottom: 6,
    backgroundColor: `${colors.darkBlue}66`,
  },
  projectName: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.lightGray,
    marginBottom: 3,
  },
  projectDesc: { fontSize: 8, color: colors.mutedGray, marginBottom: 5 },
  techRow: { flexDirection: 'row', gap: 4, flexWrap: 'wrap', marginBottom: 5 },
  techTag: {
    fontSize: 7,
    color: '#c4b5fd',
    backgroundColor: `${colors.purple}66`,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },
  projectLink: {
    fontSize: 7,
    color: colors.accentLight,
    textDecoration: 'underline',
  },

  eduRow: { flexDirection: 'row', gap: 8, marginBottom: 8, alignItems: 'flex-start' },
  eduDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: `${colors.accent}44`,
    marginTop: 1,
    flexShrink: 0,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  eduSchool: { fontSize: 9, color: colors.lightGray, fontFamily: 'Helvetica-Bold' },
  eduPeriod: { fontSize: 7, color: colors.accent, marginTop: 2 },

  skillGroupTitle: {
    fontSize: 7,
    color: colors.mutedGray,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 3,
    fontFamily: 'Helvetica-Bold',
  },
  skillTagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 3, marginBottom: 6 },
  skillTag: {
    fontSize: 7,
    color: colors.lightGray,
    backgroundColor: `${colors.darkBlue}99`,
    borderWidth: 0.5,
    borderColor: `${colors.accent}33`,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  gdprText: {
    fontSize: 6.5,
    color: colors.mutedGray,
    marginTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: `${colors.accent}33`,
    paddingTop: 6,
  },
  divider: {
    height: 0.5,
    backgroundColor: `${colors.accent}22`,
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
          <Link src={`tel:${cvData.contact.phone}`} style={styles.contactLink}>
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

function PdfMainContent({ t }: { t: (key: string) => string }) {
  return (
    <>
      <View style={styles.headerBlock}>
            <Text style={styles.nameFirst}>{cvData.name.first}</Text>
            <Text style={styles.nameLast}>{cvData.name.last.toUpperCase()}</Text>
            <View style={styles.tagRow}>
              {['Full-Stack Developer', 'Lead Developer', '.NET · React · Azure'].map((tag) => (
                <Text key={tag} style={styles.tag}>{tag}</Text>
              ))}
            </View>
          </View>

          {/* Work Experience */}
          <View>
            <Text style={styles.mainSectionLabel}>{t('section.work')}</Text>
            {cvData.workExperience.map((exp) => (
              <View key={exp.company} style={{ marginBottom: 10 }}>
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
                <View style={styles.techRow}>
                  {p.techStack.map((tech) => (
                    <Text key={tech} style={styles.techTag}>{tech}</Text>
                  ))}
                </View>
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
