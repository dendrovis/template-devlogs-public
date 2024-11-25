import React, { forwardRef, type RefObject, type ForwardedRef } from 'react';
import Classes from './styles.module.scss';
import { SectionHeaderProps } from './types';

const HeaderSection = (
  { prefix, value }: SectionHeaderProps,
  ref: ForwardedRef<Map<string, HTMLDivElement>>
) => {
  const refHandler = (element: HTMLDivElement, ref: RefObject<Map<string, HTMLDivElement>>) =>
    element ? ref.current?.set(value, element) : ref.current?.delete(value);

  return (
    <div
      className={Classes['header-container']}
      ref={(element) => {
        if (element && typeof ref !== 'function' && ref !== null) refHandler(element, ref);
      }}
    >
      <div className={Classes['text-container']}>
        <div className={Classes.prefix}>{prefix}</div>
        <div className={Classes.header}>{value}</div>
      </div>
      <div className={Classes['header-circle']} />
    </div>
  );
};

export default forwardRef(HeaderSection);
