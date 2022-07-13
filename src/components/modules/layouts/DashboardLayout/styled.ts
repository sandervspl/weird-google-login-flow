import styled from 'styled-components';

import { media } from 'styles/utils';

export const ChildrenWrapper = styled.div<ChildrenWrapperProps>`
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadows.overlay};
  position: relative;
  z-index: 1;
  min-height: ${({ headerHasTabs }) => headerHasTabs
    ? 'calc(100% - 184px)'
    : 'calc(100% - 152px)'};

  ${media.desktop`
    margin: 0 0 0 88px;
    padding: 24px;
    min-height: calc(100% - 96px);
  `}

  ${media.large`
    margin-left: 280px;
  `}
`;

type ChildrenWrapperProps = {
  headerHasTabs?: boolean;
};
