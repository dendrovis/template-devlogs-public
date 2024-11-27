import React, { type RefObject, useRef, useState } from 'react';
import { Header, Section } from './components';
import Classes from './App.module.scss';
import { PRODUCT, VERSION_LIST } from './constants';
import Drawer from './components/Drawer';

const App = () => {
  const [contentIndex, setContentIndex] = useState(PRODUCT.defaultTab);
  const tabName = PRODUCT.tabs[contentIndex].name as keyof typeof PRODUCT.content;
  const prefix = 'v';

  const sectionRefs = useRef(new Map());
  const scrollToElement = (
    refs: RefObject<Map<string, HTMLDivElement>>,
    targetVersion: string
  ): void => {
    if (!refs.current) return;
    const element = refs.current.get(targetVersion);

    if (!element) return;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const onClickDrawerHandler = (version: string) => {
    scrollToElement(sectionRefs, version);
  };

  return (
    <div className={Classes.container}>
      <Drawer items={VERSION_LIST[contentIndex]} onClick={onClickDrawerHandler} prefix={prefix} />
      <Header productName={PRODUCT.name} logoSrc={PRODUCT.logo} logoWidth={60}>
        <Header.Navigation
          items={PRODUCT.tabs}
          onClick={(index) => setContentIndex(index)}
          defaultTab={PRODUCT.defaultTab}
        />
      </Header>
      <main className={Classes.content}>
        {PRODUCT.content[tabName].map((sectionContent, index) => {
          return (
            <Section key={index} content={sectionContent} headerPrefix={prefix} ref={sectionRefs} />
          );
        })}
      </main>
    </div>
  );
};

export default App;
