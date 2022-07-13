import styled from 'styled-components';

import { media } from 'styles/utils';
import { TableCell, TableHeadCell, TableRow } from 'common/table';

export const PaginationTableRow = styled(TableRow)<PaginationTableRowProps>`
  ${TableCell} {
    ${media.tablet`
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
    `}
  }

  ${TableHeadCell},
  &:last-child ${TableCell} {
    border-bottom: 0;
  }
`;

type PaginationTableRowProps = {
  isClickable?: boolean;
};

export const PaginationTableBody = styled.div`
  position: relative;
  width: 100%;
  min-height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  box-shadow: ${({ theme }) => theme.shadows.overlay};
  border-radius: 4px;
`;
