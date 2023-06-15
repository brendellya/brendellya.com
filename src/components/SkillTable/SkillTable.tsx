import { useMemo } from 'react';

import { SORT_OPTIONS } from 'components/Qualifications';
import { ISkillTableProps, useSkillTable, setSkillGroupColor, SkillItem, EmptySkillItem } from './index';

import './SkillTable.scss';

const SkillTable = ({ skills, sortName = SORT_OPTIONS.Alpha, sortAsc = true }: ISkillTableProps) => {
  const { sortedData } = useSkillTable(skills, sortName, sortAsc);
  const skillColors = useMemo(() => setSkillGroupColor(), []);

  let skillIndex = 0;
  let groupIndex = 0;
  let groupName = '';

  return (
    <ul className='skill-table'>
      {sortedData.map((skill, index) => {
        groupName = `group-${groupIndex + 1}`;

        if (skill.name !== 'placeholder') {
          skillIndex++;
        } else {
          groupIndex++;
        }

        return (
          <li className='d-inline-block' key={index}>
            {skill?.name !== 'placeholder' ? (
              <SkillItem skill={skill} index={skillIndex} color={skillColors[groupName]} group={groupName} />
            ) : (
              <EmptySkillItem />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillTable;
