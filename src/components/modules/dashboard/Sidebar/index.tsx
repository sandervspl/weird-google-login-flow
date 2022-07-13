import * as React from 'react';
import Link from 'next/link';

import { MainMenu, SubMenu } from 'modules/dashboard';

import { SidebarContainer, Logo, LogoSmall } from './styled';

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Link href="/">
        <a>
          <Logo />
          <LogoSmall />
        </a>
      </Link>
      <MainMenu />
      <SubMenu />
    </SidebarContainer>
  );
};

type SidebarProps = {
  isOpen: boolean;
};
