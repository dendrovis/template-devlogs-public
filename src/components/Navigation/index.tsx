import React from 'react';
import Classes from './styles.module.scss';
import NavigationTab from './Tab';
import { NavigationProps } from './types';

const Navigation = ({ children }: NavigationProps) => {
  return <nav className={Classes.container}>{children}</nav>;
};

Navigation.Tab = NavigationTab;

export default Navigation;
