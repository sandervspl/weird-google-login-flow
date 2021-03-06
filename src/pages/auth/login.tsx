import type * as i from 'types';
import * as React from 'react';
import Link from 'next/link';

import { SimplePage, Card } from 'common/layout';
import { FormContainer } from 'common/form';
import { Button } from 'common/interaction';
import { Heading } from 'common/typography';

import { ActionsContainer } from 'modules/pages/login/styled';
import api from 'services/api';

type LoginResponse = { ok: true, redirectUrl: string };

const Login: i.NextPageComponent = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      // Request redirect url from backend
      const response = await api.get<LoginResponse>({ path: '/api/mockAuth', withAuth: false });

      // If we got it, redirect to it
      if (response.redirectUrl) {
        window.location.href = response.redirectUrl;
      }
    } catch (err: any) {
      setIsLoading(false);
      setIsSuccess(false);
      console.error(err);
    }
  };

  return (
    <SimplePage.Container>
      <SimplePage.Wrapper>
        <Card>
          <Heading as="h1" margin="0 0 24px">
            Log in
          </Heading>
          <FormContainer onSubmit={onSubmit}>
            {({ register, formState: { errors } }) => (
              <>
                <ActionsContainer>
                  <Link href="/reset-password">
                    Forgot password?
                  </Link>
                  <Button type="submit" disabled={isLoading || isSuccess} isLoading={isLoading}>
                    Sign in with Google
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

export default Login;
