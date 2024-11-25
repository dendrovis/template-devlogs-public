export type LinkExternalProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
  children?: React.ReactNode;
  rel?: string;
  target?: string;
};
