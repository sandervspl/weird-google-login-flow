import styled from 'styled-components';

import { media } from 'styles/utils';

export const TableActions = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.black};
  }

  ${media.tablet`
    display: flex;
    position: static;
    transform: none;
    width: 100%;
  `}
`;
