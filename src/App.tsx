import React from 'react';
import Header from 'components/Header';
import Bio from 'components/Bio';
import WorkHistory from 'components/WorkHistory';
import Skills from 'components/Skills';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Header />
      <main className='container bg-white'>
        <Banner />
        <Bio />
        <WorkHistory />
        <Skills />
      </main>
    </>
  );
}

export default App;
