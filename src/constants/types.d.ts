export type PRODUCT_TYPE = {
  name: string;
  defaultTab: number;
  tabs: { name: string; SVG: FunctionComponent<SVGProps<SVGSVGElement>>; alt?: string }[];
  content: {
    [tabName: string]: CONTENT_TYPE;
  };
};

export type CONTENT_TYPE = SECTION_TYPE[];

export type SECTION_TYPE = {
  version: string;
  details: DETAILS_TYPE[];
};

export type DETAILS_TYPE = {
  title: string;
  description: DESCRIPTION_TYPE[];
};

export type DESCRIPTION_TYPE = {
  type: 'text' | 'image' | 'link';
  value: string;
  options?: {
    alias?: string;
  };
};

export type VERSION_LIST_TYPE = string[][];
