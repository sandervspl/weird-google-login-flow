import styled, { css } from 'styled-components';

import { media } from 'styles/utils';

const rowWidths = {
  third: '33.33%',
  full: '100%',
};

export const Row = styled.div<RowProps>`
  width: 100%;
  margin-bottom: 16px;

  & > *:not(last-child) {
    ${media.tablet`
      padding-right: 24px;
    `}
  }

  ${media.tablet`
    display: flex;
    width: 66.66%;
  `}

  ${({ rowWidth }) => rowWidth && css`
    ${media.tablet`
      width: ${rowWidths[rowWidth]};
    `}
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`;

type RowProps = {
  margin?: string;
  rowWidth?: 'third' | 'full';
};
