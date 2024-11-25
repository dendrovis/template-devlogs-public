import { ReactNode } from 'react';
import type { DETAILS_TYPE, SECTION_TYPE } from '../../constants/types';

export type SectionProps = {
  content: SECTION_TYPE;
  headerPrefix?: string;
};
export type SectionHeaderProps = {
  prefix?: string;
  value: string;
};
export type SectionDetailsProps = { details: DETAILS_TYPE };
export type SectionDetailsHeaderProps = { title: string };
export type SectionDescriptionProps = { description: DESCRIPTION_TYPE };
export type SectionDescriptionWrapperProps = { children: ReactNode };
export type SectionDescriptionTypeProps = { description: DESCRIPTION_TYPE };
