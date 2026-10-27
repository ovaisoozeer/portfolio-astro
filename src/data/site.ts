// Everything personal about the site lives here. Edit this file to make the portfolio yours.

export const site = {
  name: 'Ovais',
  role: 'Generalist Solution Architect',
  email: 'ovais@expertlypragmatic.com',
  phone: { display: '07739 400855', href: 'tel:+447739400855' },
  calendarUrl: 'https://calendar.app.google/PteCMAz5AeiBRbrp9',
  tagline: 'Choose the theme that best describes the reason for your visit...',
  description:
    'Portfolio of Ovais Oozeer, a software developer building web applications, APIs and developer tooling.',
  resumeUrl: '/cv.pdf', // leave empty to hide the button
  socials: [
    { label: 'Email', href: 'mailto:ovais@expertlypragmatic.com' },
    { label: 'Phone', href: 'tel:+447739400855' },
    { label: 'Book a meeting', href: 'https://calendar.app.google/PteCMAz5AeiBRbrp9' },
    { label: 'GitHub', href: 'https://github.com/ovaisoozeer' },
  ],
};

export const about = {
  services: [
    {
      types: 'Solution Architecture, Facilitation, Servant Leadership',
      title: 'Fractional lead',
      description:
        'I apply my experience to deeply understand and steer teams. By working fractionally (one day or more per week), I am able to split the rest of my time between other clients and personal development - which you benefit from. I focus my insights and contributions on helping your organisation achieve its long term vision.',
    },
    {
      types: 'Full time implementation for a scoped project',
      title: 'Application build',
      description:
        'I am a competent tech lead and can coach your team as a contributor. However, as this is highly demanding I do not commit to prolonged engagements.',
    },
  ],
  pricing: [
    'This depends on whether the work is fractional vs full-time, leadership vs contributing, or outcome- vs output-based.',
    'I operate through Expertly Pragmatic Ltd (VAT-registered).',
  ],
};

// Shorter engagements listed under "Selected other clients" on the projects page.
export const otherClients: { client: string; project: string; role: string; href?: string }[] = [
  {
    client: 'Civil Aviation Authority',
    project: 'Obstruction Management website',
    role: 'Developer',
    href: 'https://www.caa.co.uk/commercial-industry/airspace/event-and-obstacle-notification/obstacle-notification/',
  },
  {
    client: 'Rail Delivery Group',
    project: 'National Rail Enquiries, Common Services',
    role: 'Architect',
    href: 'https://www.nationalrail.co.uk/',
  },
  {
    client: 'Schroders Personal Wealth',
    project: 'Lead capture website',
    role: 'Tech Lead',
    href: 'https://www.spw.com/',
  },
  {
    client: 'Euromonitor International',
    project: 'ETL Platform',
    role: 'Developer',
    href: 'https://www.euromonitor.com/',
  },
  {
    client: 'BUPA',
    project: 'Test automation framework',
    role: 'Developer',
    href: 'https://www.bupaglobal.com/en',
  },
  { client: 'Rolls Royce Marine', project: 'Ship-to-shore data platform', role: 'Tech Lead' },
  {
    client: 'Toyota Financial Services',
    project: 'B2C private leasing platform',
    role: 'Tech Lead',
    href: 'https://www.toyota.no/',
  },
  { client: 'NHS Business Services Authority', project: 'Patient preferences service', role: 'Developer (internal)' },
  {
    client: 'Department for Education',
    project: 'National Apprenticeship programme',
    role: 'Developer',
    href: 'https://www.gov.uk/apply-apprenticeship',
  },
  { client: 'DeVere', project: 'Venues Website', role: 'Developer', href: 'https://www.devere.co.uk/' },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'] },
  { group: 'Front end', items: ['Astro', 'React', 'HTML & CSS', 'Accessibility', 'Vite'] },
  { group: 'Back end', items: ['Node.js', 'REST & GraphQL', 'PostgreSQL', 'Redis', 'Message queues'] },
  { group: 'Tooling & cloud', items: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Observability'] },
];

export const experience: {
  role: string;
  company: string;
  start: string;
  end: string;
  summary: string;
  highlights?: string[];
}[] = [
  {
    role: 'Director',
    company: 'Expertly Pragmatic Ltd',
    start: '2024',
    end: 'Present',
    summary: 'Fractional tech leadership, facilitation and coaching.',
  },
  {
    role: 'Senior Consultant',
    company: 'Valtech UK Ltd',
    start: '2015',
    end: '2024',
    summary:
      'Several years of architecture assessment, greenfield development, and leading teams. Completed over 20 projects. Led the development and architecture communities through acquisition and capability mapping.',
  },
  {
    role: 'Senior Developer in Digital Marketing',
    company: 'Creator Digital',
    start: '2014',
    end: '2015',
    summary:
      'A year of coaching the dotnet development team at Creator Digital. Set up ways of working between capability silos, and managed tasks in a matrix-managed organisation. Also developed several web apps, data pipelines and POCs for new clients.',
  },
  {
    role: 'Developer in Music/Media',
    company: 'Release Consulting Ltd',
    start: '2008',
    end: '2014',
    summary:
      'My first graduate job was working under the mentorship of the technical director at Release Consulting Ltd. In my six years here I developed and ran several desktop and web application projects, database migrations, and native mobile apps.',
  },
  {
    role: 'Student Developer in Petrochemical automation',
    company: 'Oilband Ltd',
    start: '2006',
    end: '2007',
    summary:
      'During my sandwich degree, I completed a year as an onsite developer for Oilband Ltd based in Buxton. There, I developed features for their flagship desktop application, as well as testing hardware, and writing device drivers.',
  },
];
