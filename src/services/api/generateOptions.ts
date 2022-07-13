import { GenerateOptions } from './types';
import config from './config';

const generateOptions: GenerateOptions = ({
  method, path, file = false, json = true, upload = false,
  error, type = config.defaultApi, withAuth = config.defaultWithAuth, ...options
}) => {
  const apiUrl = config.apiUrls[type];
  const headers = options.headers || {};

  const query: URLSearchParamsInit = options.query
    ? { ...options.query as Record<string, string> }
    : {};

  const queries = `?${new URLSearchParams(query)}`;
  let body = method !== 'GET'
    ? (options.body || {}) as BodyInit
    : undefined;

  const isNotFileUpload = !file || !upload;
  if (isNotFileUpload) {
    headers['Content-Type'] = 'application/json';

    if (body) {
      body = JSON.stringify(body);
    }
  }

  return {
    path: `${apiUrl}${path}${queries}`,
    options: {
      method,
      headers,
      body,
    },
    file,
    json,
    errorConfig: error,
    withAuth,
  };
};

export default generateOptions;

type URLSearchParamsInit = ConstructorParameters<typeof URLSearchParams>[0];
