import React from 'react';
import { ImageProps } from './types';

const Image = ({
  src,
  alt,
  className,
  loading = 'lazy',
  draggable = false,
  onClick,
  ...props
}: ImageProps) => {
  const altInternal = alt ?? src.split('/').pop();
  return (
    <img
      loading={loading}
      src={src}
      alt={altInternal}
      className={className}
      referrerPolicy={'no-referrer'}
      draggable={draggable}
      onClick={onClick}
      {...props}
    />
  );
};

export default Image;
