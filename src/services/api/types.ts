import { errorMessages } from './errorMessages';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type ErrorConfig = {
  hide?: boolean;
  message?: string;
};

type Body =
  | Blob
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array
  | DataView
  | ArrayBuffer
  | FormData
  | string
  | null;

type ApiTypes = 'default';

export type RequestOptions = {
  path: string;
  options: RequestInit;
  file: any;
  json: boolean;
  errorConfig: ErrorConfig;
  withAuth?: boolean;
};

export type Options = {
  method: string;
  path: string;
  query?: Record<string, string | number> | URLSearchParams | undefined;
  body?: any;
  type?: ApiTypes;
  withAuth?: boolean;
  file?: any;
  json?: boolean;
  upload?: boolean;
  error?: any;
  headers?: HeadersInit;
};

export type FetchOptions = Omit<Options, 'method'>;

export type GenerateOptions = (options: Options) => RequestOptions;

export type Request = <T = any>(options: RequestOptions) => Promise<T>;

export type FetchCall = <T = any>(args: FetchOptions) => Promise<T>;

export type ApiErrorProps = {
  message: string;
  reason: keyof typeof errorMessages;
};

export type ApiError = ApiErrorProps & {
  errors?: ApiErrorProps[];
};

export type TriggerErrorMessage = (errorConfig: ErrorConfig, apiError: ApiError) => void;

export type HandleStatusCodes = (code: number) => Promise<boolean>;

export type RequestApi = {
  get: FetchCall;
  del: FetchCall;
  post: FetchCall;
  put: FetchCall;
  patch: FetchCall;
};

export type RunMiddleware = (options: RequestOptions, middlewares: Middleware[]) => Promise<RequestOptions>;

export type SetupRequest = (middlewares: Middleware[], options: Options) => Promise<any>;

export type Middleware = (next: NextMiddleware) => (options: RequestOptions, ...args: any) => void;
export type NextMiddleware = (options: RequestOptions, ...args: any) => void;

export type ApiConfigType = {
  apiUrls: {
    [type in ApiTypes]: string;
  };
  loginPath: string;
  notFoundPath: string;
  defaultWithAuth: boolean;
  defaultApi: ApiTypes;
  errorMessageFunction: (message: string) => void;
};
