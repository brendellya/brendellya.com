import React from 'react';
import Header from 'components/Header';
import Bio from 'components/Bio';
import WorkHistory from 'components/WorkHistory';
import Skills from 'components/Skills';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Bio />
      <WorkHistory />
      <Skills />
      {/*<footer className={`row`}>*/}
      {/*  <div className='col'>Copyright &copy; 2023. All rights reserved.</div>*/}
      {/*</footer>*/}
    </div>
  );
}

export default App;
