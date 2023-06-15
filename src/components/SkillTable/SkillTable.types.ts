import { ISkillModel } from 'components/Qualifications';

export interface ISkillTableProps {
  skills: ISkillModel[];
  sortName: string;
  sortAsc: boolean;
}

export interface ISkillItemProps {
  skill: Partial<ISkillModel>;
  index: number;
  color?: string;
  group?: string;
}

export interface ISkillColor {
  [id: string]: string;
}
