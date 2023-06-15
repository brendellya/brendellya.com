import { JSX } from 'react';
import { ISkillItemProps } from './index';
import classNames from 'classnames';

export const EmptySkillItem = (): JSX.Element => {
  return (
    <div className='element'>
      <div className='skill placeholder'>
        <i className='fa fa-star font-lg'></i>
      </div>
    </div>
  );
};

export const SkillItem = ({ skill, index, color, group }: ISkillItemProps): JSX.Element => {
  return (
    <div className='element'>
      {/* Todo: add randomize skill group colors */}
      <div className={classNames('skill p-1 d-grid align-content-between text-secondary primary')} data-group={group}>
        <div className='d-flex justify-content-between font-size-sm'>
          <small>{index}</small>
        </div>
        <div className='name'>
          <div className='font-size-lg font-weight-bold'>{skill.symbol}</div>
          <small className='font-size-xs'>
            {skill.name} <span>{skill.version ? `(${skill.version})` : ''}</span>
          </small>
        </div>
        <div className='details d-flex justify-content-between font-size-sm'>
          <div className='lastUsed' title='last used'>
            {skill?.lastUsed}
          </div>
          <div className='experience' title='years experience'>
            {skill.yearsExp}
          </div>
        </div>
      </div>
    </div>
  );
};
