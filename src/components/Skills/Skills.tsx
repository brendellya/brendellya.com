import { JSX, useState } from 'react';

import { skills, SORT_OPTIONS } from './index';
import SkillTable from 'components/SkillTable';
import SortButton from 'components/SortButton';

const Skills = (): JSX.Element => {
  const [sortKey, setSortKey] = useState(SORT_OPTIONS.Alpha);
  const [isAsc, setIsAsc] = useState(true);

  const handleSort = (sort: string) => {
    const order = sortKey === sort ? !isAsc : true;
    setSortKey(sort);
    setIsAsc(order);
  };

  return (
    <section className='row justify-content-center section-skills p-7 bg-gray-100'>
      <div className='col-12'>
        <h2 className='text-heading text-center'>Skills</h2>

        <h3 className='text-subheading font-xl py-4'>Main Skills</h3>
        <p>
          Below are some of my of my most relevant skills, in addition to the skills listed below there are skills that
          I've explored as personal learnings.
        </p>

        <div className='pt-4 pb-2 d-flex align-items-center gap-2'>
          <span className='font-sm'>Sort:</span>
          <SortButton label='Name' sort={sortKey} sortOption={SORT_OPTIONS.Alpha} asc={isAsc} onSort={handleSort} />
          <SortButton label='Recent' sort={sortKey} sortOption={SORT_OPTIONS.Recent} asc={isAsc} onSort={handleSort} />
          <SortButton
            label='Experience'
            sort={sortKey}
            sortOption={SORT_OPTIONS.Experience}
            asc={isAsc}
            onSort={handleSort}
          />
          <SortButton
            label='Category'
            sort={sortKey}
            sortOption={SORT_OPTIONS.Category}
            asc={isAsc}
            onSort={handleSort}
          />
        </div>

        <SkillTable skills={skills} sortName={sortKey} sortAsc={isAsc} />
      </div>
    </section>
  );
};

export default Skills;
