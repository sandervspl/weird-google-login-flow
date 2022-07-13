import * as i from 'types';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import api from 'services/api';
import { useDebounceHover, useRouter } from 'hooks';

import { useQueryUsersGroups } from '../usersGroups/list';

export const getUser = (userId?: string) => {
  return api.get<i.User>({
    path: `/dashboard/users/users/${userId}`,
  });
};

export const upsertUser = ({
  userId, values,
}: i.MutateUser) => {
  const fetch = {
    method: userId ? api.patch : api.post,
    path: userId
      ? `/dashboard/users/users/${userId}`
      : '/dashboard/users/users',
  };

  const body = {
    ...values,
    groups: values.groups?.map((group) => String(group.value)) || [],
  };

  return fetch.method<i.User>({
    path: fetch.path,
    body,
  });
};

export const activateUser = ({
  userId, action,
}: i.MutateUserActivation) => {
  return api.post<i.User>({
    path: `/dashboard/users/users/${userId}/${action}`,
  });
};

export const useQueryUser = () => {
  const { query } = useRouter<{ userId: string }>();

  return useQuery<i.User>(
    ['user', query.userId],
    () => getUser(query.userId),
    {
      enabled: Boolean(query.userId),
    },
  );
};

//
// Overwrite the detail data and invalidate the list, so the data is fetched properly afterwards
//
export const useMutateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(
    upsertUser,
    {
      onSuccess: (newUser) => {
        queryClient.setQueryData(['user', newUser.id], newUser);
        queryClient.invalidateQueries('users');
      },
    },
  );
};

//
// Update the paginated list with the updated data
//
export const useMutateUserActivation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    activateUser,
    {
      onSuccess: (newUser) => {
        queryClient.setQueryData(['user', newUser.id], newUser);

        // Update an item in a paginated list by looping over all paginated queries,
        // and replacing the updater item with the new one
        // This is only possible if the detail and list data are equal.
        // If not, we would have to reformat it ourselves.
        // In that case you can just invalidate the list query
        queryClient.getQueryCache().findAll('users').forEach(({ queryKey }) => {
          const users = queryClient.getQueryData<i.PaginationResponse<i.User>>(queryKey);

          if (users) {
            queryClient.setQueryData(queryKey, {
              ...users,
              result: users.result.map((user) => {
                return newUser.id === user.id
                  ? newUser
                  : user;
              }),
            });
          }
        });
      },
    },
  );
};

//
// If you need to combine multiple data sets, you can use this trick.
// Query the data sets you need, and combine them with useMemo.
// This is the same thing we do with reselect, also with memoization.
//
const formatGroup = (group: i.UsersGroup) => ({
  label: group.name,
  value: group.id,
});

export const useSelectUserForm = () => {
  const { data: user } = useQueryUser();
  const { data: usersGroups } = useQueryUsersGroups({
    page: 1,
    limit: 999,
  });

  if (!user && !usersGroups) return undefined;

  if (!user) {
    return {
      groupOptions: usersGroups?.map(formatGroup) || [],
    };
  }

  return {
    userId: user?.id,
    defaultValues: {
      first_name: user?.first_name || '',
      last_name: user?.last_name || '',
      email: user?.email || '',
      groups: user?.groups?.map(formatGroup) || [],
    },
    groupOptions: usersGroups?.map(formatGroup) || [],
  };
};

//
// Build in debounced version of prefetching, so we can choose if we want to prefetch
// on hover, or just on click or programmatically.
//
export const usePrefetchUser = () => {
  const queryClient = useQueryClient();

  const onPrefetchUser = (userId: string) => {
    queryClient.prefetchQuery(
      ['user', userId],
      () => getUser(userId),
    );
  };

  const onHover = useDebounceHover<string>(
    (userId) => onPrefetchUser(userId),
  );

  return {
    onPrefetch: onPrefetchUser,
    onPrefetchHover: onHover,
  };
};
