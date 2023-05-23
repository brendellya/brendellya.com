import React, { JSX } from 'react';

import * as S from './Header.styles';

const Header = (): JSX.Element => {
  return (
    <S.Header className={`row p-2`}>
      <div className={`brand col`}>
        <div className={`row align-items-center`}>
          <div className={`logo col-auto`}></div>
          <h1 className='col'>Brendellya/com</h1>
        </div>
      </div>
      <nav className={`col-auto p-4`}>
        <a href='/'>Resume</a>
      </nav>
    </S.Header>
  );
};

export default Header;
