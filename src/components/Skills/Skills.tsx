import { skills } from './Skills.constants';

/*
    Category: ( UI, UX, Design System, Fullstack)
    Mood: (Love It, Like It, Excited, Interested, Still Learning, Tried It)
 */
import SkillTable from 'components/SkillTable';

const Skills = () => {
  return (
    <div className='row justify-content-center'>
      <section className='col-8 py-5'>
        <h2>Skills</h2>
        Sort: Category | Experience | Latest | Mood
        <SkillTable skills={skills} />
      </section>
    </div>
  );
};

export default Skills;
