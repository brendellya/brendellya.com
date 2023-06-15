export type TTimeLineSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IExperience {
  startDate: string;
  endDate: string;
  position: string;
  employer: string;
  location: string;
  description: string;
  tags?: string[];
  size?: TTimeLineSize;
}

export interface IExperiencesModel {
  [id: string]: IExperience;
}

// Todo: delete?
export interface ITimelineProps {
  startDate?: any;
  endDate?: any;
  interval?: string;
  segment?: number;
}

export interface ITimelineCardProps {
  slot: string;
  cardIndex: number;
  cardDetails: IExperience | null;
}
