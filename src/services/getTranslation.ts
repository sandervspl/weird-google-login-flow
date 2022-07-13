import * as i from 'types';

export const translateAccountStatus = {
  FORCE_CHANGE_PASSWORD: 'Password change required',
  UNCONFIRMED: 'Unverified',
  CONFIRMED: 'Verified',
};

export const translateUserIsActive = (isActive?: boolean): i.StatusLabel => isActive
  ? { label: 'Active', variant: 'green' }
  : { label: 'Inactive', variant: 'red' };
