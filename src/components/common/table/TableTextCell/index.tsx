import * as React from 'react';

import { TableTextCellContainer, TableTextCellLabel } from './styled';

export const TableTextCell: React.FC<TableTextCellProps> = ({ label, children }) => {
  return (
    <TableTextCellContainer>
      <TableTextCellLabel as="div">{label}</TableTextCellLabel>
      <span>{children}</span>
    </TableTextCellContainer>
  );
};

type TableTextCellProps = {
  label: string;
  children: React.ReactNode;
};
