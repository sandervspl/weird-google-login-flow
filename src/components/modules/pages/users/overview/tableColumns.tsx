import * as i from 'types';
import * as React from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { StatusLabel } from 'common/general';
import { TableActions, TableTextCell } from 'common/table';
import { translateAccountStatus, translateUserIsActive } from 'services';
import ArrowRightIcon from 'vectors/arrow-right.svg';

export const tableColumns = (): ColumnDef<i.User>[] => [
  {
    header: 'Full name',
    footer: (props) => props.column.id,
    cell: ({ row }) => (
      <TableTextCell label="Full name">
        {row.original?.first_name} {row.original?.last_name}
      </TableTextCell>
    ),
  },
  {
    header: 'E-mail',
    accessorKey: 'email',
    cell: ({ getValue }) => (
      <TableTextCell label="E-mail">
        {getValue()}
      </TableTextCell>
    ),
  },
  {
    header: 'Account status',
    accessorKey: 'account_status',
    cell: ({ getValue }) => (
      <TableTextCell label="Account status">
        {translateAccountStatus[getValue()]}
      </TableTextCell>
    ),
  },
  {
    header: 'Is active',
    accessorKey: 'is_active',
    cell: ({ getValue }) => {
      const status = translateUserIsActive(getValue());

      return (
        <TableTextCell label="Is active">
          <StatusLabel variant={status?.variant}>
            {status?.label}
          </StatusLabel>
        </TableTextCell>
      );
    },
  },
  {
    header: '',
    id: 'actions',
    cell: () => (
      <TableActions>
        <ArrowRightIcon />
      </TableActions>
    ),
  },
];
