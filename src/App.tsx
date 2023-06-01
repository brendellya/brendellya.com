import React from 'react';
import Header from 'components/Header';
import Bio from 'components/Bio';
import WorkHistory from 'components/WorkHistory';
import Skills from 'components/Skills';

function App() {
  return (
    <>
      <Header />
      <div className='container bg-white'>
        <Bio />
        <WorkHistory />
        <Skills />
      </div>
    </>
  );
}

export default App;
