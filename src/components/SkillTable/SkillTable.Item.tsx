import { JSX } from 'react';
import { ISkillItemProps } from './SkillTable.types';

export const EmptySkillItem = (): JSX.Element => {
  return (
    <div className='element'>
      <div className='skill placeholder'>
        <i className='fa fa-star font-lg'></i>
      </div>
    </div>
  );
};

export const SkillItem = ({ skill, index, color = '' }: ISkillItemProps): JSX.Element => {
  return (
    <div className='element'>
      <div className='skill p-1 d-grid align-content-between' data-color={color}>
        <div className='d-flex justify-content-between font-sm'>
          <small>{index}</small>
          <i className='fa fa-smile-o' title='I love it!'></i>
        </div>
        <div className='name'>
          <div className='font-lg font-weight-bold'>{skill.symbol}</div>
          <small className='font-xs'>
            {skill.name} <span>{skill.version ? `(${skill.version})` : ''}</span>
          </small>
        </div>
        <div className='details d-flex justify-content-between font-sm'>
          <div className='lastUsed'>{skill?.lastUsed}</div>
          <div className='experience'>{skill.yearsExp}</div>
        </div>
      </div>
    </div>
  );
};
