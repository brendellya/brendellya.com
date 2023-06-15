import { ISkillColor } from './SkillTable.types';

const DEFAULT_COLORS = [
  'blue-1',
  'blue-2',
  'purple-1',
  'purple-2',
  'red-1',
  'red-2',
  'pink-1',
  'pink-2',
  'teal-1',
  'teal-2',
  'yellow-1',
  'yellow-2',
  'green-1',
  'green-2',
  'orange-1',
  'orange-2',
];

export const setSkillGroupColor = () => {
  let index = 1;
  const groups: ISkillColor = {};
  const colors = [...DEFAULT_COLORS];

  do {
    const num = Math.floor(Math.random() * colors.length);
    const groupKey = `group-${index}`;
    const foundColor = colors.splice(num, 1);

    groups[groupKey as keyof ISkillColor] = foundColor[0];
    index++;
  } while (colors.length);

  return groups;
};
