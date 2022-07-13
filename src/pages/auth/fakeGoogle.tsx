import type * as i from 'types';
import * as React from 'react';
import Link from 'next/link';

import { AUTH_ERROR } from 'services/constants';
import { useRouter } from 'hooks';
import { SimplePage, Card } from 'common/layout';
import { FormContainer } from 'common/form';
import { Button } from 'common/interaction';
import { Heading } from 'common/typography';

import { ActionsContainer } from 'modules/pages/login/styled';

const Login: i.NextPageComponent = () => {
  const router = useRouter<Queries>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess] = React.useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/auth/success?token=foo123bar456baz789');
    }, 1000);
  };

  return (
    <SimplePage.Container>
      <SimplePage.Wrapper>
        <Card>
          <Heading as="h1" margin="0 0 24px" css={'color: red '}>
            Hello I Am Google
          </Heading>
          <FormContainer onSubmit={onSubmit}>
            {({ register, formState: { errors } }) => (
              <>
                <ActionsContainer>
                  <Link href="/reset-password">
                    Forgot password?
                  </Link>
                  <Button type="submit" disabled={isLoading || isSuccess} isLoading={isLoading} css={'background-color: red '}>
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

type Queries = {
  callbackUrl?: string;
  error?: keyof typeof AUTH_ERROR;
};

export default Login;
