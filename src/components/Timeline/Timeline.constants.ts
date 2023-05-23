import { IExperiencesModel } from './Timeline.types';

export const TODAY = new Date();
export const STARTDATE = new Date(1995, 0, 1);

export const experiences: IExperiencesModel = {
  '1995-03-01': {
    startDate: '01/05/1995',
    endDate: '03/03/1995',
    position: 'YN3',
    employer: 'USCG',
    description: 'Yo I did some things here.',
    size: 'md',
  },
  '2001-01-01': {
    startDate: '03/05/2001',
    endDate: '08/20/2003',
    position: 'SN3',
    employer: 'Digicast',
    description: 'Yo I did some things here.',
    size: 'md',
  },
  '2005-05-01': {
    startDate: '05/05/2005',
    endDate: '10/31/2008',
    position: 'TC1',
    employer: 'USCG',
    description: 'Yo I did some things here.',
    size: 'lg',
  },
  // {
  //   startDate: new Date('09/19/2013'),
  //     endDate: new Date('02/10/2022'),
  //   position: 'FS2',
  //   employer: 'USCG',
  //   description: 'Yo I did some things here.',
  //   pic: '',
  // },
};
