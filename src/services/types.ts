import * as i from 'types';

export type AuthRequestOptions = Pick<i.RequestOptions, 'path'> & {
  options: Pick<i.RequestOptions['options'], 'method' | 'body' | 'headers'>
};

export type AuthRequest = <T = any>(options: AuthRequestOptions) => Promise<T>;

export type EnvironmentTypes = 'production' | 'acceptance' | 'test' | 'development';

export type JWTCreateResponse = {
  refresh: string;
  access?: string;
};

export type JWTRefreshResponse = {
  access: string;
};
