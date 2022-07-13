import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export const TableRow = styled.div<TableRowProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 48px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  padding: 16px 16px 0;

  &:last-of-type {
    border-bottom: 0;
  }

  ${media.tablet`
    flex-direction: row;
    border-bottom: 0;
    padding: 0;
  `}

  ${({ isHeaderRow }) => isHeaderRow && css`
    display: none;

    ${media.tablet`
      display: flex;
    `}
  `}

  ${({ isHeaderRow, isClickable }) => !isHeaderRow && isClickable && css`
    ${media.desktop`
      transition: background-color .2s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.white.dark};
      }
    `}
  `}
`;

export type TableRowProps = {
  isClickable?: boolean;
  isHeaderRow?: boolean;
};
