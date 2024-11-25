import type { ReactNode } from 'react';

export type NavigationProps = { children: ReactNode };

export type NavigationTabProps = {
  name: string;
  SVG: string;
  onClick?: (index: number) => void;
  isClicked?: boolean;
  index?: number;
};
