import * as React from 'react';
import Link from 'next/link';

import { useRouter } from 'hooks';

import { MenuItemContainer, MenuItemIcon } from './styled';

export const MenuItem: React.FC<MenuItemProps> = ({ as, onClick, icon, to = '', title }) => {
  const router = useRouter();
  const IconComponent = icon as React.ElementType;

  return (
    <Link href={to} passHref={to !== ''}>
      <MenuItemContainer
        as={as}
        onClick={onClick}
        isActive={to === '/dashboard' ? router.asPath === to : router.asPath.includes(to)}
      >
        <MenuItemIcon>{IconComponent || 'X'}</MenuItemIcon>
        <span>{title}</span>
      </MenuItemContainer>
    </Link>
  );
};

type MenuItemProps = {
  as?: any;
  icon?: React.ReactNode;
  to?: string;
  title: string;
  onClick?: () => void;
};
