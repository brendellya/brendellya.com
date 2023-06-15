import { IExperience } from './Timeline.types';

export const TIMEZONE = 'America/New_York';

export const TODAY = new Date();
export const STARTDATE = new Date(1994, 6, 1);

export const DEFAULT_INTERVAL = 'month';
export const DEFAULT_SEGMENT = 5;

export const SCROLL_DIRECTION = {
  Forward: 'forward',
  Back: 'back',
  First: 'first',
  Last: 'last',
};

export const experienceData: IExperience[] = [
  {
    startDate: '01/01/1995',
    endDate: '03/01/2003',
    position: 'YN3',
    employer: 'USCG',
    location: 'Various Units',
    description: 'Supported service members as human resource specialist.',
    tags: [],
    size: 'sm',
  },
  {
    startDate: '05/01/1999',
    endDate: '11/01/1999',
    position: 'HTML Coder (Intern)',
    employer: 'Digicast New Media',
    location: 'Ft Lauderdale, FL',
    description: 'Hand-coded websites using HTML and performed website maintenance.',
    tags: [],
    size: 'md',
  },
  {
    startDate: '12/01/1999',
    endDate: '01/01/2002',
    position: 'Web Designer',
    employer: 'Festive Travel',
    location: 'Ft Lauderdale, FL',
    description:
      'Designed, built, and maintained three travel websites.  Built a custom booking and rental engine with a backend CMS using PHP and MySql.',
    tags: [],
    size: 'md',
  },
  {
    startDate: '11/01/2002',
    endDate: '01/01/2004',
    position: 'Multimedia Technician',
    employer: 'Hazard Control Technologies',
    location: 'Fayetteville, Ga',
    description:
      'Created and published interactive shockwave CD with dynamic presentations, edited video, motion graphics. Design visuals for product packaging, tradeshows, and signage.',
    tags: [],
    size: 'md',
  },
  {
    startDate: '02/01/2004',
    endDate: '10/01/2007',
    position: 'Webmaster',
    employer: 'Speed Factory',
    location: 'Marietta, GA',
    description: `Rebuild company's website using PHP, MySQL with customer signup and onboarding workflow.  Maintained existing backend system build on ASP/SQL, and integration with vendor services.  Consulted and maintain hosting clients sites.`,
    tags: [],
    size: 'lg',
  },
  {
    startDate: '11/01/2007',
    endDate: '11/01/2013',
    position: 'Senior Web Developer',
    employer: 'Cartoon Network',
    location: 'Atlanta, GA',
    description:
      'Lead developer for FusionFall, an Unity based MMOG which support member accounts and subscriptions, custom CMS for posting news & special in-game events.  Work on CN Digital porfolio brands such as Scooby Doo,Total Drama, Generator Rex, etc. Lead development on SSO, CN accounts, CN Forums, and more.',
    tags: [],
    size: 'xl',
  },
  {
    startDate: '05/01/2014',
    endDate: '11/01/2015',
    position: 'Software Engineer',
    employer: 'Pure Cars',
    location: 'Atlanta, GA',
    description:
      'Build the landmark analytics library that provided deep user insight on dealer websites including specific vehicle engagement, attributed views, and pageview assertions all build by hand with pure javascript.  Build new features and maintain customer facing dashboards build with Angularjs.',
    tags: [],
    size: 'lg',
  },
  {
    startDate: '02/01/2016',
    endDate: '02/01/2017',
    position: 'Software Engineer (Startup)',
    employer: 'Transitiv.io / ACN Ad Tech',
    location: 'Atlanta, GA',
    description:
      'Joined a three person startup as the sole frontend developer.  Build, deployed, and maintain a Saas application that provided analytic data via custom directive that dynamically plotted event data in a visually intuitive diagram. Designed the UX, interactive HMTL media, and delived close-beta MVP.',
    tags: [],
    size: 'lg',
  },
  {
    startDate: '04/01/2017',
    endDate: '01/01/2019',
    position: 'Front-end Consultant / Developer',
    employer: 'BackBase',
    location: 'Atlanta, GA',
    description: `Build web applications for banking clients using BackBase proprietary toolkit build on a custom Angular schematic. As front-end lead, built new features, performed code reviews, architecting front-end solutions, removing obstacles for team members, and sprint triage. Created personal training initiatives.`,
    tags: [],
    size: 'xl',
  },
  {
    startDate: '09/01/2019',
    endDate: '07/01/2021',
    position: 'Principal Software Engineer',
    employer: 'Operative',
    location: 'Atlanta, GA',
    description:
      'Lead UI/UX initiatives for a digital advertising platform including Common Component adoption reviews and UI Committee. Crafted Azul theme project in parity with UX design patterns, and co-owned common component feature development and maintenance.  Established best practices and code quality implementations.  Actively reviewed code and mentored distrubted developers.',
    tags: [],
    size: 'xl',
  },
  {
    startDate: '03/01/2022',
    endDate: '03/01/2023',
    position: 'Principal UI Developer',
    employer: 'PCI Energy Solutions',
    location: 'Norman, OK',
    description:
      'Joined a principal developer for new UI team.  Architected the PCI UI toolkit, project creation, development, documentation, and npm publication, and code quality integrations.  Delivered the beta release PCI Kube UI library using React, and continually expanding components, branded theme, and utilities.  Developed energy trading application with complex grid structures and reactive chart visuals.',
    tags: [],
    size: 'xl',
  },
];
