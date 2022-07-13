import type * as i from 'types';
import * as React from 'react';
import Link from 'next/link';
import { signIn, SignInResponse } from 'next-auth/react';
import { toast } from 'react-toastify';

import { validation } from 'services/validation';
import { AUTH_ERROR } from 'services/constants';
import { useRouter } from 'hooks';
import { SimplePage, Card } from 'common/layout';
import { FormContainer, Input, InputPassword } from 'common/form';
import { Button } from 'common/interaction';
import { Heading } from 'common/typography';

import { ActionsContainer } from 'modules/pages/login/styled';

const Login: i.NextPageComponent = () => {
  const router = useRouter<Queries>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  React.useEffect(() => {
    switch (router.query.error) {
      case 'SessionExpired': toast.warn(AUTH_ERROR.SessionExpired); break;
      case 'CredentialsSignin': toast.warn(AUTH_ERROR.CredentialsSignin); break;
    }
  }, []);

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: router.query.callbackUrl ?? '/dashboard',
        redirect: false,
      }) as unknown as SignInResponse;

      if (result.ok) {
        setIsLoading(false);
        setIsSuccess(true);
        toast.success('Successfully logged in!');
        router.push(router.query.callbackUrl ?? '/dashboard');
      } else {
        throw Error(result.error);
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      toast.error('Invalid email or password.');
    }
  };

  return (
    <SimplePage.Container>
      <SimplePage.Wrapper>
        <Card>
          <Heading as="h1" margin="0 0 24px">
            Log in
          </Heading>
          <FormContainer<LoginFormValues> onSubmit={onSubmit}>
            {({ register, formState: { errors } }) => (
              <>
                <Input
                  label="Email address"
                  error={errors?.email}
                  {...register('email', { ...validation.required, ...validation.email })}
                />
                <InputPassword
                  name="password"
                  label="Password"
                  error={errors?.password}
                />
                <ActionsContainer>
                  <Link href="/reset-password">
                    Forgot password?
                  </Link>
                  <Button type="submit" disabled={isLoading || isSuccess} isLoading={isLoading}>
                    Log in
                  </Button>
                </ActionsContainer>
              </>
            )}
          </FormContainer>
        </Card>
      </SimplePage.Wrapper>
    </SimplePage.Container>
  );
};

type Queries = {
  callbackUrl?: string;
  error?: keyof typeof AUTH_ERROR;
};

type LoginFormValues = {
  email: string;
  password: string;
};

export default Login;
