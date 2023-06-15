import './Bio.scss';

const Bio = () => {
  return (
    <section className='row section-bio bg-gray-200 p-7'>
      <div className='col-12'>
        <h3 className='text-heading'>About Me</h3>

        <h3 className='text-subheading py-4'>Hey There!</h3>
        <p className='mb-4'>
          Welcome to my personal space on the web. My name is{' '}
          <strong className='font-weight-bolder'>Brendellya Thomas</strong> and I’m a seasoned UI Developer with over 20
          years of web technology and development. I’ve delivered web experiences from ideation to launch, for
          early-stage startups and corporations with distributed teams.
        </p>

        <div className='expertise'>
          <p className='py-4 font-size-xl color-gray-700'>Things I Do...</p>
          <ul className='text-secondary text-lg'>
            <li>UI/UX Expertise</li>
            <li>Modern Javascript Web Stacks</li>
            <li>Microservice Architecture Experience</li>
            <li>Component Library Development & Publication</li>
            <li>Design Systems & Standardizations</li>
            <li>Responsive & Accessibility</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Bio;
