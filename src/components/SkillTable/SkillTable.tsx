import { SORT_OPTIONS } from 'components/Skills';
import { setRandomColor } from './Skilltable.helpers';
import { ISkillTableProps, ISkillItemProps, useSkillTable, SkillItem, EmptySkillItem } from './index';

import './SkillTable.scss';

const SkillTable = ({ skills, sortName = SORT_OPTIONS.Alpha, sortAsc = true }: ISkillTableProps) => {
  const { sortedData } = useSkillTable(skills, sortName, sortAsc);
  let skillIndex = 0;
  let currentColor = setRandomColor();

  return (
    <ul className='skill-table'>
      {sortedData.map((skill, index) => {
        if (skill.name !== 'placeholder') {
          skillIndex++;
        } else {
          currentColor = setRandomColor();
        }

        return (
          <li className='d-inline-block' key={index}>
            {skill?.name !== 'placeholder' ? (
              <SkillItem skill={skill} index={index} color={currentColor} />
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
