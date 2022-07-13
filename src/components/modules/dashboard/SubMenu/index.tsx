import * as React from 'react';
import { signOut } from 'next-auth/react';

import { MenuItem } from 'modules/dashboard';
import LogoutIcon from 'vectors/logout.svg';

import { SubMenuContainer } from './styled';

export const SubMenu: React.FC = () => {
  return (
    <SubMenuContainer>
      <MenuItem
        as="button"
        onClick={() => signOut()}
        title="Log out"
        icon={<LogoutIcon />}
      />
    </SubMenuContainer>
  );
};
