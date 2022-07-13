import * as i from 'types';

export type UserAccountStatus = 'FORCE_CHANGE_PASSWORD' | 'CONFIRMED' | 'UNCONFIRMED';

export type User = {
  account_status: i.UserAccountStatus;
  created: string;
  date_joined: string;
  email: string;
  first_name: string;
  groups: i.UsersGroup[];
  id: string;
  is_active: boolean;
  last_login?: string;
  last_name: string;
  last_updated: string;
  url: string;
};

export type FormUser = Omit<i.User, 'groups'> & {
  groups: i.SelectOption[];
};

export type UpsertUserEditFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  groups: i.SelectOption[];
};

export type MutateUser = {
  userId?: string;
  values: i.UpsertUserEditFormValues;
};

export type MutateUserActivation = {
  userId: string;
  action: 'activate' | 'deactivate';
};
