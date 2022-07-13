import styled, { css } from 'styled-components';

import { media } from 'styles/utils';

export const TableCell = styled.div<TableCellProps>`
  display: flex;
  align-items: center;
  flex: ${({ flex }) => flex || 1};
  margin: 0;
  overflow: hidden;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;

  &:last-of-type:not(:first-of-type) {
    margin: 0;
  }

  ${media.tablet`
    padding: 8px 12px;
    margin: 0;
    min-height: 48px;

    &:first-of-type {
      padding-left: 24px;
    }

    &:last-of-type {
      padding-right: 24px;
    }
  `}

  ${({ fixedWidth }) => fixedWidth && css`
    width: ${fixedWidth}px;
    max-width: ${fixedWidth}px;
    min-width: ${fixedWidth}px;
  `}

  ${({ isActionColumn }) => isActionColumn && css`
    max-width: 60px;
    padding: 0;

    ${media.tablet`
      padding: 0;

      &:last-of-type {
        padding: 0;
      }
    `}
  `}
`;

type TableCellProps = {
  flex?: number;
  fixedWidth?: number;
  isActionColumn?: boolean;
};
