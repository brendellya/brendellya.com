import { ISkillsModel } from '../Skills/Skills.types';

import './SKillTable.scss';

interface ISkillTableProps {
  skills: ISkillsModel[];
}

// Todo: review prop/data relation ( pass skills from container? or reference in component?)
const SkillTable = ({ skills }: ISkillTableProps) => {
  return (
    <ul className='skill-table my-4'>
      {skills.map((skill, index) => {
        return (
          <li key={index}>
            <div className='skill p-1'>
              <div className='d-flex justify-content-between'>
                <small>{index + 1}</small>
                <i className='fa fa-smile-o' title='I love it!'></i>
              </div>
              <div className='name'>
                <h5>{skill.symbol}</h5>
                <small>
                  {skill.name} <span>({skill.version})</span>
                </small>
              </div>
              <div className='details d-flex'>
                <div className='lastUsed'>{skill.lastUsed}</div>
                <div className='experience'>{skill.yearsExp}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillTable;
