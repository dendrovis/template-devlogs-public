import React, { useState } from 'react';
import Navigation from '../Navigation';
import { HeaderNavigationProps } from './types';
import Classes from './styles.module.scss';

const HeaderNavigation = ({ items, onClick, defaultTab }: HeaderNavigationProps) => {
  const [currentTab, setTab] = useState(defaultTab ?? 0);

  const onClickHandler = (index: number) => {
    setTab(index);
  };

  if (onClick) onClick(currentTab);

  return (
    <div className={Classes['navigation-container']}>
      <Navigation>
        {items.map((props, index) => {
          const isClicked = currentTab === index;
          return (
            <Navigation.Tab
              isClicked={isClicked}
              index={index}
              key={index}
              onClick={onClickHandler}
              {...props}
            />
          );
        })}
      </Navigation>
    </div>
  );
};

export default HeaderNavigation;
