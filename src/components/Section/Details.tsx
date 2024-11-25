import React from 'react';
import Classes from './styles.module.scss';
import { SectionDetailsProps } from './types';
import SectionDetailsHeader from './DetailsHeader';
import SectionDescription from './Description';

const SectionDetails = ({ details }: SectionDetailsProps) => {
  return (
    <div className={Classes.feature}>
      <SectionDetailsHeader title={details.title} />
      <div className={Classes['description-list-container']}>
        <div className={Classes['description-list']}>
          {details.description.map((description, index) => {
            return <SectionDescription description={description} key={index} />;
          })}
        </div>
        <div className={Classes['feature-bottom-half-line']} />
      </div>
    </div>
  );
};

export default SectionDetails;
