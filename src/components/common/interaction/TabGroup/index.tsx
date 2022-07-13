import * as i from 'types';
import * as React from 'react';
import Link from 'next/link';

import { useRouter } from 'hooks';

import { Tab } from '../Tab';
import { TabGroupContainer } from './styled';

export const TabGroup: React.FC<TabGroupProps> = ({ tabs }) => {
  const router = useRouter();

  return (
    <TabGroupContainer>
      {tabs.map((tab) => (
        <Link href={tab.to} key={tab.to} passHref>
          <Tab isActive={router.asPath === tab.to}>
            {tab.label}
          </Tab>
        </Link>
      ))}
    </TabGroupContainer>
  );
};

export type TabGroupProps = {
  tabs: i.Tab[];
};
