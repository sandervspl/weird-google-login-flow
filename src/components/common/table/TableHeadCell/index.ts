import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

import { TableCell } from '../TableCell';

export const TableHeadCell = styled(TableCell)<TableHeadCellProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex: ${({ flex }) => flex || 1};
  text-align: left;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 1.6px;
  text-transform: uppercase;

  ${({ isClickable }) => isClickable && css`
    cursor: pointer;
    user-select: none;

    ${media.desktop`
      transition: color .2s;

      &:hover {
        color: ${({ theme }) => theme.colors.gray};
      }
    `}
  `}

  ${({ fixedWidth }) => fixedWidth && css`
    width: ${fixedWidth}px;
    max-width: ${fixedWidth}px;
    min-width: ${fixedWidth}px;
  `}
`;

type TableHeadCellProps = {
  isClickable?: boolean;
  flex?: number;
  fixedWidth?: number;
};
