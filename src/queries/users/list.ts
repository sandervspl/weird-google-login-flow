import * as i from 'types';
import { useQuery, useQueryClient } from 'react-query';

import api from 'services/api';
import { getPaginationQuery } from 'services';

const getUsers = (payload: i.SearchPaginationPayload) => {
  const query: i.SearchPaginationQuery = {
    ...getPaginationQuery(payload.page, payload.limit),
  };
  if (payload.search) query.search = payload.search;

  return api.get<i.PaginationResponse<i.User>>({
    path: '/dashboard/users/users',
    query,
  });
};

//
// Prefetching the previous and next pages when they are available
// Also don't show a loading state when switching pages, but just show the previous data
//
export const useQueryUsers = (payload: i.SearchPaginationPayload) => {
  const queryClient = useQueryClient();

  if (payload?.page && !payload.search) {
    if (payload.page > 1) {
      const previousPayload = { ...payload, page: payload.page - 1 };
      queryClient.prefetchQuery(['users', previousPayload], () => getUsers(previousPayload));
    }

    const nextPayload = { ...payload, page: payload.page + 1 };
    queryClient.prefetchQuery(['users', nextPayload], () => getUsers(nextPayload));
  }

  return useQuery<i.PaginationResponse<i.User>>(
    ['users', payload],
    () => getUsers(payload),
    {
      keepPreviousData: true,
    },
  );
};
