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

export const jobExperiences: IExperience[] = [
  {
    startDate: '01/01/1995',
    endDate: '03/01/2003',
    position: 'YN3',
    employer: 'USCG',
    location: 'Various Units',
    description: '',
    tags: [],
    size: 'sm',
  },
  {
    startDate: '05/01/1999',
    endDate: '11/01/1999',
    position: 'HTML Coder (Intern)',
    employer: 'Digicast New Media',
    location: 'Ft Lauderdale, FL',
    description: 'Hand-coded websites using HTML',
    tags: [],
    size: 'md',
  },
  {
    startDate: '12/01/1999',
    endDate: '01/01/2002',
    position: 'Web Designer',
    employer: 'Festive Travel',
    location: 'Ft Lauderdale, FL',
    description: 'Various Units',
    tags: [],
    size: 'md',
  },
  {
    startDate: '11/01/2002',
    endDate: '01/01/2004',
    position: 'Multimedia Technician',
    employer: 'Hazard Control Technologies',
    location: 'Fayetteville, Ga',
    description: 'Various Units',
    tags: [],
    size: 'md',
  },
  {
    startDate: '02/01/2004',
    endDate: '10/01/2007',
    position: 'Webmaster',
    employer: 'Speed Factory',
    location: 'Marietta, GA',
    description: 'Various Units',
    tags: [],
    size: 'lg',
  },
  {
    startDate: '11/01/2007',
    endDate: '11/01/2013',
    position: 'Senior Web Developer',
    employer: 'Cartoon Network',
    location: 'Atlanta, GA',
    description: 'Various Units',
    tags: [],
    size: 'xl',
  },
  {
    startDate: '05/01/2014',
    endDate: '11/01/2015',
    position: 'Software Engineer',
    employer: 'Pure Cars',
    location: 'Atlanta, GA',
    description: 'Various Units',
    tags: [],
    size: 'lg',
  },
  {
    startDate: '02/01/2016',
    endDate: '02/01/2017',
    position: 'Software Engineer (Startup)',
    employer: 'Transitiv.io / ACN Ad Tech',
    location: 'Atlanta, GA',
    description: 'Various Units',
    tags: [],
    size: 'lg',
  },
  {
    startDate: '04/01/2017',
    endDate: '01/01/2019',
    position: 'Front-end Consultant / Developer',
    employer: 'BackBase',
    location: 'Atlanta, GA',
    description: 'Various Units',
    tags: [],
    size: 'xl',
  },
  {
    startDate: '09/01/2019',
    endDate: '07/01/2021',
    position: 'Principal Software Engineer',
    employer: 'Operative',
    location: 'Atlanta, GA',
    description: 'Various Units',
    tags: [],
    size: 'xl',
  },
  {
    startDate: '03/01/2022',
    endDate: '03/01/2023',
    position: 'Principal UI Developer',
    employer: 'PCI Energy Solutions',
    location: 'Norman, OK',
    description: 'Various Units',
    tags: [],
    size: 'xl',
  },
];
