import React from 'react';
import Header from 'components/Header';
import Bio from 'components/Bio';
import Experience from 'components/Experience';
import Qualification from 'components/Qualifications';
import Banner from './components/Banner';
import SiteDetail from './components/SiteDetail';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='container bg-white'>
        <Banner />
        <Bio />
        <Experience />
        <Qualification />
        <SiteDetail />
      </main>
      <Footer />
    </>
  );
}

export default App;
