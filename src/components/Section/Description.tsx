import React from 'react';
import Classes from './styles.module.scss';
import Image from '../Image';
import {
  SectionDescriptionProps,
  SectionDescriptionTypeProps,
  SectionDescriptionWrapperProps,
} from './types';
import LinkExternal from '../LinkExternal';

const SectionDescription = ({ description }: SectionDescriptionProps) => (
  <SectionDescriptionWrapper>
    <SectionDescriptionType description={description} />
  </SectionDescriptionWrapper>
);

const SectionDescriptionType = ({ description }: SectionDescriptionTypeProps) => {
  const { type, value, options } = description;
  switch (type) {
    case 'text':
      return <div className={Classes['description-text']}>{value}</div>;
    case 'image':
      return <Image src={value} className={Classes['description-image']} />;
    case 'link':
      return (
        <LinkExternal className={Classes['description-link']} href={value}>
          {options?.alias}
        </LinkExternal>
      );
    default:
      throw new Error('undefined description type');
  }
};

const SectionDescriptionWrapper = ({ children }: SectionDescriptionWrapperProps) => {
  return (
    <div className={Classes.description}>
      <div className={Classes['description-circle']} />
      {children}
    </div>
  );
};

export default SectionDescription;
