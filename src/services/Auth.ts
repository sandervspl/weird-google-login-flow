import * as i from 'types';

import config from 'config/authentication';

import { AuthRequest, AuthRequestOptions } from './types';

export const getAuthenticationConfig = () => config;

export const getCurrentTimestamp = () => Math.floor(Date.now() / 1000);

const formatAuthApiOptions = (options: i.FetchOptions, method: string): AuthRequestOptions => {
  const { path, query, body } = options;
  const { AUTH_URLS } = getAuthenticationConfig();
  const authBaseUrl: string = AUTH_URLS[process.env.APP_ENV || 'development'];
  const queries = `?${new URLSearchParams(query as i.StringKeyObject)}`;
  const authPath = `${authBaseUrl}${path}${queries}`;

  return {
    path: authPath,
    options: {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(body && {
        body: JSON.stringify(body),
      }),
    },
  };
};

export const authRequest: AuthRequest = ({
  path, options,
}) => new Promise(async (resolve, reject) => {
  fetch(path, options)
    .then(async (response) => {
      if (response.ok) {
        return response.status !== 204
          ? response.json()
          : response.text();
      } else {
        console.info(`[${response.status}]: ${response.statusText}`);
      }

      return Promise.reject(response.json());
    })
    .then((json) => { resolve(json); })
    .catch((json) => {
      try {
        json.then((err: i.ApiError) => {
          reject(err);
        }).catch((err: i.ApiError) => {
          reject(err);
        });
      } catch (err) {
        reject(json);
      }
    });
});

export const Auth = {
  get: <T>(options: i.FetchOptions) => authRequest<T>(formatAuthApiOptions(options, 'GET')),
  del: <T>(options: i.FetchOptions) => authRequest<T>(formatAuthApiOptions(options, 'DELETE')),
  post: <T>(options: i.FetchOptions) => authRequest<T>(formatAuthApiOptions(options, 'POST')),
  put: <T>(options: i.FetchOptions) => authRequest<T>(formatAuthApiOptions(options, 'PUT')),
  patch: <T>(options: i.FetchOptions) => authRequest<T>(formatAuthApiOptions(options, 'PATCH')),
};
