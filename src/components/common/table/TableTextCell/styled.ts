import styled from 'styled-components';

import { Label } from 'common/form';

import { media } from 'styles/utils';

export const TableTextCellContainer = styled.div`
  display: flex;
  width: 100%;
  word-break: break-word;
  display: flex;
  align-items: center;

  ${media.tablet`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: initial;
  `}
`;

export const TableTextCellLabel = styled(Label)`
  width: 104px;
  margin: 0 16px 0 0;
  flex-shrink: 0;
  font-weight: 600;

  ${media.tablet`
    display: none;
  `}
`;
