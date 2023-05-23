import { useState } from 'react';
import Timeline from 'components/Timeline';

const WorkHistory = () => {
  return (
    <>
      <div className='row justify-content-center'>
        <section className='col-8 py-5'>
          <h3>Work History</h3>
          <Timeline />
        </section>
      </div>
    </>
  );
};

export default WorkHistory;
