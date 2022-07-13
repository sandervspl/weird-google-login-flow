import * as React from 'react';

import ArrowDownIcon from 'vectors/arrow-down.svg';

import { TableHeadIconContainer } from './styled';

export const TableHeadIcon: React.FC<TableHeadIconProps> = ({ pointUp }) => (
  <TableHeadIconContainer pointUp={pointUp}>
    <ArrowDownIcon />
  </TableHeadIconContainer>
);

type TableHeadIconProps = {
  pointUp?: boolean
};
