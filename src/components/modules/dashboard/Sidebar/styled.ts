import styled, { css } from 'styled-components';

import LogoIcon from 'vectors/logo.svg';
import LogoSmallIcon from 'vectors/logo-small.svg';
import { media } from 'styles/utils';

export const SidebarContainer = styled.div<SidebarContainerProps>`
  width: 100%;
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 40px 16px 24px 16px;
  background-color: ${({ theme }) => theme.colors.white.dark};
  z-index: 1;
  display: flex;
  flex-direction: column;
  display: none;

  ${({ isOpen }) => isOpen && css`
    display: flex;
    z-index: 3;
  `}

  ${media.desktop`
    width: 88px;
    right: auto;
    top: 0;
    display: flex;
  `}

  ${media.large`
    width: 280px;
  `}
`;

type SidebarContainerProps = {
  isOpen: boolean;
};

export const Logo = styled(LogoIcon)`
  display: none;
  width: 193px;
  margin: 0 auto;

  ${media.large`
    display: block;
  `}
`;

export const LogoSmall = styled(LogoSmallIcon)`
  display: none;
  width: 100%;
  margin: 0 auto;

  ${media.desktop`
    display: block;
  `}

  ${media.large`
    display: none;
  `}
`;
