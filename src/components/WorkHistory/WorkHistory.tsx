import Timeline from 'components/Timeline';

import './WorkHistory.scss';

const WorkHistory = () => {
  return (
    <section className='row justify-content-center section-work-history'>
      <div className='col-12 p-7'>
        <h3 className='text-heading'>Experience</h3>

        <div className=''>
          <h3 className='text-subheading py-4'>Timeline: At a Glance!</h3>

          <p>
            Take a quick glance of my journey from my earliest days of taming code, to my most recent adventures in
            building highly reactive applications and elevating UIs. Check the <a href=''>Resume</a> deets.
          </p>
          <Timeline />
        </div>
      </div>
      <div className='divider'></div>
    </section>
  );
};

export default WorkHistory;
