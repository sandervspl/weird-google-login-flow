import * as i from 'types';

export type PaginationTableProps<RowData extends object> = {
  columns: i.TableHeaderType[];
  data?: RowData[];
  isExpandable?: boolean;
  isSelectable?: boolean;
  isLoading?: boolean;
  onRowClick?: (row: RowData) => void;
  onRowMouseDown?: (row: RowData) => void;
  onRowHover?: (row: RowData) => void;
  pagination?: i.Pagination;
  sortableColumns?: string[];
};

export type FetchPaginationData = (query: {
  [key: string]: string | number;
}) => void;
