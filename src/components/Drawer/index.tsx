import React, { useState } from 'react';
import Classes from './styles.module.scss';
import { DrawerProps } from './types';
import classNames from 'classnames';
import { DRAWER_KNOT } from '../../assets/images';
import DrawerItems from './Item';

const Drawer = ({ items, isOpen = false, onClick, prefix = '' }: DrawerProps) => {
  const [isDrawerOpen, setDrawerOpen] = useState(isOpen);
  const [currentPanel, setPanel] = useState(-1);
  const containerStyles = classNames(Classes.container, { [Classes.hide]: !isDrawerOpen });
  const drawerKnotContainerStyles = classNames(Classes['drawer-knot-container'], {
    [Classes['drawer-knot-open']]: isDrawerOpen,
  });

  const drawerOpenHandler = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const onClickItemHandler = (index: number) => {
    if (currentPanel === index) setPanel(-1);
    else setPanel(index);
  };

  const onClickSubItemHandler = (item: string) => {
    if (onClick) onClick(item);
  };

  return (
    <div className={containerStyles}>
      <div className={Classes['container-anchor']}>
        {items.map((item, index) => {
          const isSelected = currentPanel === index && isDrawerOpen;
          return (
            <DrawerItems
              key={index}
              prefix={prefix}
              id={index.toString()}
              onClickItem={onClickItemHandler}
              onClickSubItem={onClickSubItemHandler}
              isSelected={isSelected}
              item={item}
            />
          );
        })}
        <div className={drawerKnotContainerStyles} onClick={drawerOpenHandler}>
          <DRAWER_KNOT />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
