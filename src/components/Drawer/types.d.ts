import type { HTMLAttributes } from 'react';
import { VERSION_LIST_TYPE } from '../../constants/types';

export type DrawerProps = {
  items: VERSION_LIST_TYPE;
  isOpen?: boolean;
  onClick?: (version: string) => void;
  prefix?: string;
};

export type DrawerItemProps = {
  prefix?: string;
  onClickItem?: (index: number) => void;
  onClickSubItem?: (subItem: string) => void;
  item: string[];
  isSelected?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export type DrawerSubItemProps = {
  prefix?: string;
  subItem: string;
  onClickSubItem?: (subItem: string) => void;
} & HTMLAttributes<HTMLDivElement>;
