export interface ISkillModel {
  name: string;
  symbol: string;
  version: string | null;
  yearsExp: number;
  lastUsed: number;
  mood: string;
  category: 'languages' | 'frameworks' | 'software' | 'tools' | 'architecture' | 'testing' | 'design' | 'process';
}
