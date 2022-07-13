import * as i from 'types';
import { useQuery } from 'react-query';

import api from 'services/api';
import { getPaginationQuery } from 'services';

export const getUserGroups = async (payload: i.PaginationPayload) => {
  const { result } = await api.get<i.PaginationResponse<i.UsersGroup>>({
    path: '/dashboard/users/groups',
    query: {
      ...getPaginationQuery(payload.page, payload.limit),
    },
  });

  return result;
};

//
// Possible other way to do simple selectors
// Makes it easier to type the return, but comes with some other overhead type wise, which is more complex
//
export const useQueryUsersGroups = <FormattedData = i.UsersGroup[]>(
  payload: i.PaginationPayload,
  select?: (data: i.UsersGroup[]) => FormattedData,
) => {
  return useQuery<i.UsersGroup[], Error, FormattedData>(
    'usersGroups',
    () => getUserGroups(payload),
    {
      select,
    },
  );
};

export const useSelectUsersGroups = (payload: i.PaginationPayload) => {
  return useQueryUsersGroups(
    payload,
    (usersGroups) => usersGroups.map((group) => ({
      label: group.name,
      value: group.id,
    })),
  );
};

