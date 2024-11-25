import React from 'react';
import Classes from './styles.module.scss';
import { SectionDetailsHeaderProps } from './types';

const SectionDetailsHeader = ({ title }: SectionDetailsHeaderProps) => {
  return (
    <div className={Classes['feature-header']}>
      <div className={Classes['feature-circle']} />
      <div className={Classes['feature-half-line']} />
      <div className={Classes.title}>{title}</div>
    </div>
  );
};

export default SectionDetailsHeader;
