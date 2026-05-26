export interface WorkRole {
  title: string;
  titleKey: string;
  period: string;
  bullets: string[];
}

export interface WorkExperience {
  company: string;
  roles: WorkRole[];
}

export interface Project {
  nameKey: string;
  period: string;
  techStack: string[];
  link?: string;
  descriptionKey: string;
}

export interface Education {
  schoolKey: string;
  period: string;
}

export interface SkillGroup {
  titleKey: string;
  items: string[];
}

export const cvData = {
  name: {
    first: 'Mateusz',
    last: 'Rzewnicki',
  },
  contact: {
    phone: '509 891 358',
    email: 'mateusz.rzewnicki@wp.pl',
    linkedin: 'https://linkedin.com/in/mateusz-rzewnicki',
    linkedinHandle: '/mateusz-rzewnicki',
    github: 'https://github.com/mrzewnicki',
    githubHandle: '/mrzewnicki',
    address: 'Poland, Żyrardów 96-300',
    street: 'st. Ks. Skargi 29B',
    dob: '16.05.1996',
  },
  workExperience: [
    {
      company: 'KPMG',
      roles: [
        {
          titleKey: 'job.kpmg.lead',
          period: '11.2023 – 08.2025',
          bullets: [],
        },
        {
          titleKey: 'job.kpmg.dev',
          period: '03.2023 – 11.2023',
          bullets: [
            'job.kpmg.bullet1',
            'job.kpmg.bullet2',
            'job.kpmg.bullet3',
            'job.kpmg.bullet4',
            'job.kpmg.bullet5',
          ],
        },
      ],
    },
    {
      company: 'S.B.E Polska',
      roles: [
        {
          titleKey: 'job.sbe.mid',
          period: '11.2020 – 03.2023',
          bullets: [
            'job.sbe.mid.bullet1',
            'job.sbe.mid.bullet2',
            'job.sbe.mid.bullet3',
            'job.sbe.mid.bullet4',
            'job.sbe.mid.bullet5',
            'job.sbe.mid.bullet6',
            'job.sbe.mid.bullet7',
            'job.sbe.mid.bullet8',
          ],
        },
        {
          titleKey: 'job.sbe.junior',
          period: '02.2019 – 11.2020',
          bullets: [
            'job.sbe.junior.bullet1',
            'job.sbe.junior.bullet2',
            'job.sbe.junior.bullet3',
            'job.sbe.junior.bullet4',
            'job.sbe.junior.bullet5',
            'job.sbe.junior.bullet6',
            'job.sbe.junior.bullet7',
          ],
        },
      ],
    },
  ] as WorkExperience[],

  projects: [
    {
      nameKey: 'project.motorola.name',
      period: '03.2024 – 08.2025',
      techStack: ['Blazor', 'OracleDB', 'Linux'],
      link: 'https://forms.sbe-online.pl/',
      descriptionKey: 'project.motorola.desc',
    },
  ] as Project[],

  education: [
    {
      schoolKey: 'edu.wsisiz',
      period: '2017 – 2021',
    },
    {
      schoolKey: 'edu.secondary',
      period: '2012 – 2016',
    },
  ] as Education[],

  skillGroups: [
    {
      titleKey: 'skills.languages',
      items: ['JS', 'jQuery', 'TypeScript', 'React JS/TS', 'Styled Components', 'MUI', 'C#', '.NET Framework', '.NET Core', 'ASP.NET', 'WebAPI', 'CSS', 'SCSS'],
    },
    {
      titleKey: 'skills.frameworks',
      items: ['Blazor', 'Hangfire', 'SignalR', 'DevExpress', 'EntityFramework', 'LINQ', 'REST', 'SOAP', 'Selenium WebDriver', 'Playwright', 'Docker'],
    },
    {
      titleKey: 'skills.databases',
      items: ['SQL', 'T-SQL', 'PostgreSQL', 'MySQL', 'MsSQL'],
    },
    {
      titleKey: 'skills.cloud',
      items: ['Azure App Services', 'Azure Functions', 'Azure SQL Database', 'Entra ID', 'API Management', 'Azure Monitor', 'App Gateway', 'Azure DNS', 'Private Link', 'Storage Account'],
    },
    {
      titleKey: 'skills.systems',
      items: ['Ubuntu LTS 18.04+', 'Debian 7+', 'Docker'],
    },
    {
      titleKey: 'skills.methods',
      items: ['SCRUM', 'Agile', 'GitFlow', 'CI/CD', 'Azure DevOps', 'Trunk Based Development', 'DRY', 'SOLID'],
    },
    {
      titleKey: 'skills.patterns',
      items: ['Clean Architecture', 'DDD', 'MVC', 'CQRS', 'Structural', 'Behavioral', 'Creative'],
    },
    {
      titleKey: 'skills.ide',
      items: ['Visual Studio', 'VS Code', 'JetBrains Rider', 'JetBrains WebStorm', 'Sublime', 'Atom'],
    },
    {
      titleKey: 'skills.ai',
      items: ['ChatGPT', 'Junie', 'GitHub Copilot'],
    },
  ] as SkillGroup[],

  languages: [
    { langKey: 'lang.polish', level: 'Native' },
    { langKey: 'lang.english', level: 'B2' },
  ],

  hobby: [
    { key: 'hobby.film', detail: 'OBS, Adobe Premiere, After Effects, DaVinci Resolve' },
    { key: 'hobby.rpg', detail: 'Pen & Paper' },
    { key: 'hobby.yt', detail: '/DrakaPelnaGeba' },
    { key: 'hobby.books', detail: 'Stephen King, Dan Abnett' },
  ],

  gdprKey: 'gdpr',
};
