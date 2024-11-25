import type { ReactNode } from 'react';
import { NavigationTabProps } from '../Navigation/types';

export type HeaderProps = {
  productName: string;
  children?: ReactNode;
  logoSrc: string;
  logoAlt?: string;
  logoWidth: number;
};

export type HeaderNavigationProps = {
  items: NavigationTabProps[];
  onClick?: (index: number) => void;
  defaultTab?: number;
};
