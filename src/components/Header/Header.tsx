import React, { JSX } from 'react';

import './Header.scss';

const Header = (): JSX.Element => {
  return (
    <header>
      <div className='container'>
        <div className='row'>
          {/*<div className='logo col-auto'> &lt;B/&gt;</div>*/}
          <h1 className='brand col'>Brendellya.com</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
