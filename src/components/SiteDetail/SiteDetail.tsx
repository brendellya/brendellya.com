import './SiteDetail.scss';

const SiteDetail = () => {
  return (
    <section className='row section-site-details p-7 bg-gray-800 color-white'>
      <div className='col-12'>
        <h2 className='text-heading-dark text-center'>Site Detail</h2>

        <h3 className='text-subheading font-xl py-4'>Thanks, for stopping by...</h3>
        <p>
          This personal website has just been relaunched and is a work in progress with future updates and optimizations
          planned. All code and design are original, and source code can be found at{' '}
          <a className='dark' href='https://github.com/brendellya/brendellya.com/'>
            github.com
          </a>{' '}
          if you are interested in looking under the hood.
        </p>
      </div>

      <div className='col-8'>
        <p className='pt-4 font-lg'>This site uses:</p>
        <ul className='tools'>
          <li>React 18</li>
          <li>Typescript 4</li>
          <li>Bootstrap 5</li>
          <li>FontAwesome Free 6</li>
          <li>...and other awesome things</li>
        </ul>
      </div>
      <div className='col-4'>
        <p className='pt-4 font-lg'>Let's work together</p>
        <ul className='social font-lg'>
          <li>
            <a href='/docs/BT_Resume_online.pdf' className='dark' rel='nofollow' target='_blank'>
              <i className='fa-regular fa-file-pdf'></i> Resume
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/brendellya/' className='dark' target='_blank' rel='noreferrer'>
              <i className='fa-brands fa-linkedin'></i> LinkedIn
            </a>
          </li>
          <li>
            <a href='https://github.com/brendellya/' className='dark' target='_blank' rel='noreferrer'>
              <i className='fa-brands fa-square-github'></i> Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SiteDetail;
