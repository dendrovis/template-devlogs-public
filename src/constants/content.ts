import { LOGO, TAB_CONCEPTS, TAB_DESIGNS, TAB_DEVELOPMENT } from '../assets/images';
import { PRODUCT_TYPE } from './types';
import { DESIGNS, DEVELOPMENT, CONCEPTS } from '../assets/contents/index';

export const PRODUCT: PRODUCT_TYPE = {
  name: 'product name',
  logo: LOGO,
  defaultTab: 0,
  tabs: [
    { name: 'development', SVG: TAB_DEVELOPMENT },
    { name: 'designs', SVG: TAB_DESIGNS },
    { name: 'concepts', SVG: TAB_CONCEPTS },
  ],
  content: {
    development: [
      {
        version: '1.0.0',
        details: [
          {
            title: 'Feature: Scroll To Section',
            description: [
              {
                type: 'image',
                value: DEVELOPMENT.SHOWCASE_SCROLL_TO_SECTION,
              },
              {
                type: 'text',
                value:
                  'The user are able to navigate to different section base on the version selected on the drawer component',
              },
            ],
          },
          {
            title: 'Feature: Tabs',
            description: [
              {
                type: 'image',
                value: DEVELOPMENT.SHOWCASE_TAB,
              },
              {
                type: 'text',
                value: 'The user are able choose different tabs',
              },
            ],
          },
          {
            title: 'Feature: Drawer',
            description: [
              {
                type: 'image',
                value: DEVELOPMENT.SHOWCASE_DRAWER,
              },
              {
                type: 'text',
                value: 'The user are able to use the drawer components to navigate the page',
              },
            ],
          },
        ],
      },
    ],
    designs: [
      {
        version: '1.0.0',
        details: [
          {
            title: 'UIUX',
            description: [
              {
                type: 'image',
                value: DESIGNS.UIUX,
              },
              {
                type: 'link',
                value:
                  'https://www.figma.com/design/A6FuuGi2uwyLy3dGwEqfnt/template-devlogs-uiux-v1?node-id=1-14&t=xiMazoHul5pn7fd4-1',
                options: {
                  alias: 'detail view',
                },
              },
              {
                type: 'text',
                value: 'The user interface that support mobile and desktop view',
              },
            ],
          },
        ],
      },
    ],
    concepts: [
      {
        version: '1.0.0',
        details: [
          {
            title: 'Relation & Entity diagrams',
            description: [
              {
                type: 'image',
                value: CONCEPTS.CONCEPTS,
              },
              {
                type: 'link',
                value:
                  'https://www.figma.com/board/upbTRPDUcEH3ZPHlSPL9GM/template-devlogs-concepts-v1?node-id=0-1&t=6tDwbFfwtZz4l8UR-1',
                options: {
                  alias: 'detail view',
                },
              },
              {
                type: 'text',
                value: 'A basic ui template for devlogs.',
              },
            ],
          },
        ],
      },
    ],
  },
};

const CONTENT_TAB_NAMES = Object.keys(PRODUCT.content);

const RAW_VERSION_LIST = CONTENT_TAB_NAMES.map((tabName) =>
  PRODUCT.content[tabName as keyof typeof PRODUCT.content].map((content) => content.version)
);

export const VERSION_LIST = RAW_VERSION_LIST.map((versions) => {
  const sortByMajorList: string[][] = [];
  let previousMajorVersion: number = -1;
  let currentMajorVersionIndex = 0;

  const getMajorVersion = (value: string) => Number(value.split('.')[0]);

  versions.forEach((version) => {
    //1st major version
    if (previousMajorVersion === -1) {
      previousMajorVersion = getMajorVersion(version);
      sortByMajorList.push([version]);
    }
    //1st and subsequence major version
    else if (previousMajorVersion > getMajorVersion(version)) {
      previousMajorVersion = getMajorVersion(version);

      sortByMajorList.push([version]);
      currentMajorVersionIndex += 1;
    }
    //minor or patch version
    else {
      sortByMajorList[currentMajorVersionIndex].push(version);
    }
  });
  return sortByMajorList;
});
