export type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
  alt?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  draggable?: boolean;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
};
