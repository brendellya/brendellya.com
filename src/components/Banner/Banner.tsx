import './Banner.scss';

const Banner = () => {
  return (
    <section className='row section-banner'>
      <div className='col-8 p-4 mb-2'>
        <h2>
          UI Developer
          <br />
          <span>Code Wrangler</span> <span>CSS Mystic</span>
        </h2>
      </div>
      <div className='col-4 collage'></div>
    </section>
  );
};

export default Banner;
