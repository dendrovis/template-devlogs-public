import React from 'react';
import { DrawerSubItemProps } from './types';
import Classes from './styles.module.scss';

const DrawerSubItems = ({ prefix = '', subItem, onClickSubItem }: DrawerSubItemProps) => {
  const onClickSubItemHandler = (version: string) => {
    if (onClickSubItem) onClickSubItem(version);
  };

  return (
    <div className={Classes['sub-item']} onClick={() => onClickSubItemHandler(subItem)}>
      {prefix}
      {subItem}
    </div>
  );
};

export default DrawerSubItems;
