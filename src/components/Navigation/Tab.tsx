import React from 'react';
import { NavigationTabProps } from './types';
import Classes from './styles.module.scss';
import classNames from 'classnames';

const NavigationTab = ({
  isClicked = false,
  index,
  name,
  SVG,
  onClick,
  ...props
}: NavigationTabProps) => {
  const ClassesTab = classNames(Classes.tab, { [Classes['tab-clicked']]: isClicked });
  const ClassesText = classNames(Classes.text, { [Classes['text-clicked']]: isClicked });
  const ClassesImage = classNames(Classes.image, { [Classes['image-clicked']]: isClicked });

  const onClickHandler = () => onClick && index !== undefined && onClick(index);

  return (
    <div className={ClassesTab} onClick={onClickHandler} {...props}>
      <div className={ClassesImage}>
        <SVG />
      </div>
      <div className={ClassesText}>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default NavigationTab;
