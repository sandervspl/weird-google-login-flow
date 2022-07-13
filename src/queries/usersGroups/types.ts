import * as i from 'types';

export type SimpleUsersGroup = {
  id: string;
  name: string;
};

export type UsersGroup = i.SimpleUsersGroup & {
  users_count: number;
};
