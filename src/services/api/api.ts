import flowRight from 'lodash/flowRight';

import generateOptions from './generateOptions';
import request from './request';
import { FetchCall, Options, Middleware, RequestOptions } from './types';

class ApiHelper {
  public applyMiddleware = (middlewareList: Middleware[] | Record<string, Middleware>) => {
    this.middlewares = Array.isArray(middlewareList)
      ? middlewareList
      : Object.values(middlewareList);
  };

  public get: FetchCall = (args) => this.generateRequest({ method: 'GET', ...args });
  public del: FetchCall = (args) => this.generateRequest({ method: 'DELETE', ...args });
  public post: FetchCall = (args) => this.generateRequest({ method: 'POST', ...args });
  public put: FetchCall = (args) => this.generateRequest({ method: 'PUT', ...args });
  public patch: FetchCall = (args) => this.generateRequest({ method: 'PATCH', ...args });
  public options: FetchCall = (args) => this.generateRequest({ method: 'OPTIONS', ...args });


  private middlewares: Middleware[] = [];

  private runMiddleware = async (options: RequestOptions, middlewares: Middleware[]): Promise<RequestOptions> => {
    // Make mutable copy of options
    let newOptions = { ...options };

    // Update request options
    // This is executed by the last middleware
    const updateOptions = (updatedOptions: RequestOptions) => {
      newOptions = updatedOptions;
    };

    // Chain all middleware together
    // Pass updateOptions to last middleware in chain
    const chain = flowRight(...middlewares)(updateOptions) as Function;

    // Start running the middleware chain
    await chain(newOptions);

    return newOptions;
  };

  private generateRequest = async (options: Options): Promise<any> => (
    request(
      await this.runMiddleware(generateOptions(options), this.middlewares),
    )
  );
};

export default ApiHelper;
