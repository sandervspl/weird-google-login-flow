import type * as i from 'types';
import * as React from 'react';
import { signIn, SignInResponse } from 'next-auth/react';
import { toast } from 'react-toastify';

import { useRouter } from 'hooks';


const Login: i.NextPageComponent = () => {
  const router = useRouter<Queries>();

  async function authenticate(token: string) {
    console.info('authenticating...');

    try {
      const result = await signIn('credentials', {
        token,
        callbackUrl: router.query.callbackUrl ?? '/dashboard',
        redirect: false,
      }) as SignInResponse;

      if (result?.ok) {
        toast.success('logged in yay!');
        router.push(router.query.callbackUrl ?? '/dashboard');
      }
    } catch (err: any) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    if (router.query.token) {
      authenticate(router.query.token);
    } else {
      toast.error('No token found in query!');
    }
  }, [router.query.token]);

  return null;
};

type Queries = {
  callbackUrl?: string;
  token?: string;
};

export default Login;
