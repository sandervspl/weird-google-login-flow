import * as i from 'types';
import * as React from 'react';

import { useQueryParams } from 'hooks';
import ArrowLeftIcon from 'vectors/arrow-left.svg';
import ArrowRightIcon from 'vectors/arrow-right.svg';

import { PaginationContainer, PaginationButton } from './styled';

export const Pagination: React.FC<PaginationProps> = ({ pagination }) => {
  const { queryParams, setQueryParams } = useQueryParams();
  const pageTotal = Math.ceil(pagination.total / pagination.limit);

  if (pageTotal <= 1) return null;

  const pageIndex = pagination.offset / (pagination.limit || 25);
  const currentPage = pageIndex + 1;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const onPageChange = (page: number) => {
    if (page > 1) {
      setQueryParams({ ...queryParams, page: String(page) });
    } else {
      delete queryParams.page;
      setQueryParams({ ...queryParams });
    }
  };

  return (
    <PaginationContainer>
      {pageIndex > 0 && (
        <>
          <PaginationButton onClick={() => onPageChange(previousPage)}>
            <ArrowLeftIcon />
          </PaginationButton>
          {currentPage > 2 && (
            <>
              <PaginationButton hideOnMobile onClick={() => onPageChange(1)}>
                1
              </PaginationButton>
              {currentPage > 3 && (
                <PaginationButton hideOnMobile>...</PaginationButton>
              )}
            </>
          )}
          <PaginationButton onClick={() => onPageChange(previousPage)}>
            {previousPage}
          </PaginationButton>
        </>
      )}

      <PaginationButton isCurrentPage>
        {currentPage}
      </PaginationButton>

      {currentPage < pageTotal && (
        <>
          <PaginationButton onClick={() => onPageChange(nextPage)}>
            {nextPage}
          </PaginationButton>
          {currentPage + 2 <= pageTotal && (
            <>
              {currentPage + 3 <= pageTotal && (
                <PaginationButton hideOnMobile>...</PaginationButton>
              )}
              <PaginationButton hideOnMobile onClick={() => onPageChange(pageTotal)}>
                {pageTotal}
              </PaginationButton>
            </>
          )}
          <PaginationButton onClick={() => onPageChange(nextPage)}>
            <ArrowRightIcon />
          </PaginationButton>
        </>
      )}
    </PaginationContainer>
  );
};

type PaginationProps = {
  pagination: i.Pagination;
};
