import React from 'react';
import { HeaderProps } from './types';
import Classes from './styles.module.scss';
import HeaderNavigation from './Navigation';
import Image from '../Image';

const Header = ({ children, productName, logoSrc, logoAlt, logoWidth }: HeaderProps) => {
  return (
    <header className={Classes.container}>
      <div className={Classes.content}>
        <div className={Classes.header}>
          <div className={Classes['logo-container']}>
            <Image
              className={Classes.logo}
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoWidth}
            />
          </div>
          <div className={Classes['product-name']}>
            <h1>{productName}</h1>
          </div>
          <div className={Classes['logo-container']}>
            <Image
              className={Classes.logo}
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoWidth}
            />
          </div>
        </div>
        {children}
      </div>
    </header>
  );
};

Header.Navigation = HeaderNavigation;

export default Header;
