import React from 'react';
import { LinkExternalProps } from './types';

const LinkExternal = ({
  rel = 'noreferrer',
  target = '_blank',
  href = '',
  children,
  ...props
}: LinkExternalProps) => (
  <a href={href} target={target} rel={rel} {...props}>
    {children ?? href}
  </a>
);

export default LinkExternal;
