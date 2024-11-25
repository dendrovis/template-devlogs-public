import React from 'react';
import Classes from './styles.module.scss';
import { DrawerItemProps } from './types';
import classNames from 'classnames';
import DrawerSubItems from './SubItem';

const DrawerItems = ({
  prefix = '',
  id,
  onClickItem,
  onClickSubItem,
  item,
  isSelected = false,
}: DrawerItemProps) => {
  const itemStyles = classNames(Classes.item, {
    [Classes['item-selected']]: isSelected,
  });
  const subItemContainerStyle = classNames(Classes['sub-item-container'], {
    [Classes['sub-item-container-selected']]: isSelected,
  });

  const onClickItemHandler = (index: number) => {
    if (onClickItem) onClickItem(index);
  };

  const onClickSubItemHandler = (subItem: string) => {
    if (onClickSubItem) onClickSubItem(subItem);
  };

  return (
    <div className={Classes['item-container']}>
      <div
        className={itemStyles}
        onClick={() => {
          onClickItemHandler(Number(id));
        }}
      >
        {prefix}
        {item[0]}
      </div>
      <div className={subItemContainerStyle}>
        {item.map((subItem, index) => {
          return (
            <DrawerSubItems
              prefix={prefix}
              subItem={subItem}
              key={index}
              onClickSubItem={onClickSubItemHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DrawerItems;
