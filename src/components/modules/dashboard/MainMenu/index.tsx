import * as React from 'react';

import { MenuContainer, MenuItem } from 'modules/dashboard';
import UserIcon from 'vectors/user.svg';
import BrowsersIcon from 'vectors/browsers-outline.svg';

export const MainMenu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuItem to="/dashboard" title="Dashboard" icon={<BrowsersIcon />} />
      <MenuItem to="/dashboard/users" title="Users" icon={<UserIcon />} />
    </MenuContainer>
  );
};
