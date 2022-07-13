import { Accessor, CellProps, HeaderProps } from 'react-table';

type HeaderFuncType = ({
  getToggleAllRowsExpandedProps, isAllRowsExpanded,
}: HeaderProps<object>) => React.ReactElement;

export type TableHeaderType = {
  id?: string;
  Header?: HeaderFuncType | string;
  accessor?: Accessor<object> | string | number;
  sort?: string;
  Cell?: ({ value, row, cell, column }: CellProps<any, any>) => React.ReactElement | null;
  flex?: number;
  fixedWidth?: number;
};
