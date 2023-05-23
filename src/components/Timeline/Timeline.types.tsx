export type TTimeLineSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IExperience {
  startDate: string;
  endDate: string;
  position: string;
  employer: string;
  description: string;
  size?: TTimeLineSize;
}

export interface IExperiencesModel {
  [id: string]: IExperience;
}

export interface ITimelineProps {
  slot: string;
  cardIndex: number;
  cardDetails: IExperience | null;
}
