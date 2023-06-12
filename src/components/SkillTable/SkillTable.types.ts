import { ISkillsModel } from 'components/Skills';

export interface ISkillTableProps {
  skills: ISkillsModel[];
  sortName: string;
  sortAsc: boolean;
}

export interface ISkillItemProps {
  skill: Partial<ISkillsModel>;
  index: number;
  color?: string;
}
