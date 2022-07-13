import * as React from 'react';

import { HamburgerContainer } from './styled';

export const Hamburger: React.FC<HamburgerProps> = ({ onClick, isActive }) => {
  return (
    <HamburgerContainer {...{ onClick, isActive }}>
      <div /><div /><div />
    </HamburgerContainer>
  );
};

type HamburgerProps = {
  onClick: () => void;
  isActive: boolean;
};
