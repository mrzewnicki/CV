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
    linkedin: 'https://www.linkedin.com/in/mateusz-rzewnicki-16487616b',
    linkedinHandle: '/mateusz-rzewnicki',
    github: 'https://github.com/mrzewnicki',
    githubHandle: '/mrzewnicki',
    address: 'Poland, Żyrardów 96-300',
    dob: '16.05.1996',
  },
  workExperience: [
    {
      company: 'Fenergo',
      roles: [
        {
          titleKey: 'job.fenergo.dev',
          period: '01.2026 – 06.2026',
          bullets: [
            'job.fenergo.dev.bullet1',
            'job.fenergo.dev.bullet2',
            'job.fenergo.dev.bullet3',
            'job.fenergo.dev.bullet4',
            'job.fenergo.dev.bullet5',
            'job.fenergo.dev.bullet6',
          ],
        },
      ],
    },
    {
      company: 'KPMG',
      roles: [
        {
          titleKey: 'job.kpmg.lead',
          period: '11.2023 – 08.2025',
          bullets: [
            'job.kpmg.lead.bullet1',
            'job.kpmg.lead.bullet2',
            'job.kpmg.lead.bullet3',
          ],
        },
        {
          titleKey: 'job.kpmg.dev',
          period: '03.2023 – 11.2023',
          bullets: [
            'job.kpmg.dev.bullet1',
            'job.kpmg.dev.bullet2',
            'job.kpmg.dev.bullet3',
            'job.kpmg.dev.bullet4',
            'job.kpmg.dev.bullet5',
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
          ],
        },
        {
          titleKey: 'job.sbe.junior',
          period: '02.2019 – 11.2020',
          bullets: [
            'job.sbe.junior.bullet1',
            'job.sbe.junior.bullet2',
            'job.sbe.junior.bullet3',
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
      items: ['Blazor', 'Hangfire', 'SignalR', 'DevExpress', 'EntityFramework', 'LINQ', 'REST', 'SOAP', 'Selenium WebDriver', 'Playwright', 'Cypress', 'Docker'],
    },
    {
      titleKey: 'skills.databases',
      items: ['SQL', 'T-SQL', 'PostgreSQL', 'MySQL', 'MsSQL'],
    },
    {
      titleKey: 'skills.cloud',
      items: ['AWS', 'Lambda', 'S3', 'State Machine', 'Azure App Services', 'Azure Functions', 'Azure SQL Database', 'Entra ID', 'API Management', 'Azure Monitor', 'App Gateway', 'Azure DNS', 'Private Link', 'Storage Account', 'Pulumi'],
    },
    {
      titleKey: 'skills.methods',
      items: ['SCRUM', 'Agile', 'GitFlow', 'CI/CD', 'Azure DevOps', 'Trunk Based Development', 'DRY', 'SOLID'],
    },
    {
      titleKey: 'skills.patterns',
      items: ['Clean Architecture', 'DDD', 'Microservices', 'MVC', 'CQRS', 'Structural', 'Behavioral', 'Creative'],
    },
    {
      titleKey: 'skills.ide',
      items: ['Visual Studio', 'VS Code', 'JetBrains Rider', 'JetBrains WebStorm', 'Sublime', 'Atom'],
    },
    {
      titleKey: 'skills.ai',
      items: ['ChatGPT', 'Claude', 'Junie', 'GitHub Copilot', 'Cursor'],
    },
  ] as SkillGroup[],

  languages: [
    { langKey: 'lang.polish', level: 'Native' },
    { langKey: 'lang.english', level: 'B2' },
  ],

  hobby: [
    { key: 'hobby.film', detail: 'OBS, DaVinci Resolve' },
    { key: 'hobby.rpg', detail: 'Pen & Paper' },
    { key: 'hobby.yt', detail: '/DrakaPelnaGeba' },
    { key: 'hobby.books', detail: 'Stephen King, Dan Abnett' },
  ],

  gdprKey: 'gdpr',
};
