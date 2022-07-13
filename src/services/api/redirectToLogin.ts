import { signOut } from 'next-auth/react';

import apiConfig from 'services/api/config';
import { AUTH_ERROR } from 'services/constants';

const redirectToLogin = async (reason?: keyof typeof AUTH_ERROR) => {
  let callbackUrl = apiConfig.loginPath;

  const search: Record<string, string> = {
    callbackUrl: window.location.href,
  };

  if (reason) {
    search.error = reason;
  }

  callbackUrl += new URLSearchParams(search);

  await signOut({ callbackUrl });
};

export default redirectToLogin;
