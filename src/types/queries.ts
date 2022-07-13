import * as i from 'types';

export type Pagination = {
  limit: number;
  offset: number;
  total: number;
};

export type PaginationQuery = {
  limit: number;
  offset: number;
};

export type PaginationPayload = {
  page?: number;
  limit?: number;
  offset?: number;
};

export type Search = {
  search?: string;
};

export type SearchPaginationPayload = i.PaginationPayload & Search;
export type SearchPaginationQuery = i.PaginationQuery & Search;

export type PaginationResponse<T = any> = {
  result: T[];
  pagination: i.Pagination;
};
