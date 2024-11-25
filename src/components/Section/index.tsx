import React, { type ForwardedRef, forwardRef } from 'react';
import { SectionProps } from './types';
import Classes from './styles.module.scss';
import HeaderSection from './Header';
import SectionDetails from './Details';

const Section = (
  { headerPrefix = '', content }: SectionProps,
  ref?: ForwardedRef<Map<string, HTMLDivElement>>
) => {
  return (
    <section className={Classes.container}>
      <HeaderSection prefix={headerPrefix} value={content.version} ref={ref} />
      <div className={Classes['features-container']}>
        {content.details.map((details, index) => {
          return <SectionDetails key={index} details={details} />;
        })}
      </div>
    </section>
  );
};

export default forwardRef(Section);
