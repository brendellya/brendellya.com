import './Bio.scss';

const Bio = () => {
  return (
    <section className='row section-bio bg-gray-200 p-7'>
      <div className='col-12'>
        <h3 className='text-heading'>About Me</h3>

        <h3 className='text-subheading py-4'>Hey There!</h3>
        <p className='mb-4'>
          Welcome to my personal space on the web. My name is{' '}
          <strong className='color-gray-600 font-weight-bolder'>Brendellya Thomas</strong> and I’m a seasoned UI
          Developer with over 20 years of web technology and development. I’ve delivered web experiences from ideation
          to launch, for early-stage startups and corporations with distributed teams.
        </p>

        <div className='expertise'>
          <h4 className='py-4 text-subheading color-gray-500'>Things I Do...</h4>
          <ul>
            <li>UI/UX Expertise</li>
            <li>Modern Javascript Web Stacks</li>
            <li>Microservice Architecture Experience</li>
            <li>Component Library Development & Publication</li>
            <li>Design Systems & Standardizations</li>
            <li>Responsive & Accessibility</li>
          </ul>
        </div>

        <div className='d-none'>
          <h3 className='py-4 text-heading'>Fun Facts</h3>
          <ul className='facts'>
            <li>
              <i className='fa fa-heart'></i>My love for video games originally inspired me to become a web developer
              more than 20 years ago.
            </li>
            <li>
              <i className='fa fa-plane'></i> I am an avid traveler, having travelled to six continents. My favorite
              destination is the Australian Outback.
            </li>
            <li>
              <i className='fa fa-gamepad'></i> I'm a proud geek that loves fantasy/sci-fi, reading, animation, and
              gaming.
            </li>
            <li>
              <i className='fa fa-coffee'></i> I drink loads of tea, and I've become newly addicted to fountain pens.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Bio;
