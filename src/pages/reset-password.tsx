import type * as i from 'types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { SimplePage, Card } from 'common/layout';
import { Heading } from 'common/typography';
import { FormContainer, Input } from 'common/form';
import { Button } from 'common/interaction';
import { validation } from 'services/validation';
import { Auth } from 'services/Auth';

const ResetPassword: i.NextPageComponent = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = (data: ResetPasswordFormValues) => {
    setIsLoading(true);

    Auth.post({
      path: '/users/reset_password/',
      body: {
        email: data.email,
      },
    })
      .then(() => {
        toast.success('Click the link in the email to set a new password.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <SimplePage.Container>
      <SimplePage.Wrapper>
        <Card>
          <Heading as="h1" margin="0 0 24px">Reset your password</Heading>
          <FormContainer<ResetPasswordFormValues> onSubmit={onSubmit}>
            {({ register, formState: { errors } }) => (
              <>
                <Input
                  label="Email address"
                  error={errors?.email}
                  {...register('email', { ...validation.required, ...validation.email })}
                />
                <Button type="submit" disabled={isLoading} isLoading={isLoading}>
                  Reset
                </Button>
              </>
            )}
          </FormContainer>
        </Card>
      </SimplePage.Wrapper>
    </SimplePage.Container>
  );
};

type ResetPasswordFormValues = {
  email: string;
};

export default ResetPassword;
