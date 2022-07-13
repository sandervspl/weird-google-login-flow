import * as i from 'types';

export const getPaginationQuery = (page = 1, limit = 25) => {
  const query: i.PaginationQuery = {
    limit,
    offset: (page - 1) * limit,
  };

  return query;
};
