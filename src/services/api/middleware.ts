import type * as i from 'types';
import { getSession } from 'next-auth/react';

import redirectToLogin from './redirectToLogin';

export const authMiddleware: i.Middleware = (next) => async (requestOptions) => {
  if (requestOptions.withAuth) {
    const session = await getSession();

    if (session == null) {
      return await redirectToLogin();
    }

    requestOptions.options.headers = {
      ...requestOptions.options.headers,
      'Authorization': `Bearer ${session.accessToken}`,
    };
  }

  next(requestOptions);
};
