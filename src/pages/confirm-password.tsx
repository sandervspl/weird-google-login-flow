import type * as i from 'types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { useRouter } from 'hooks';
import { SimplePage, Card } from 'common/layout';
import { Heading } from 'common/typography';
import { FormContainer, InputPassword } from 'common/form';
import { Button } from 'common/interaction';
import { validation } from 'services/validation';
import { Auth } from 'services/Auth';
import apiConfig from 'services/api/config';

import { PasswordRequirements } from 'modules/pages/confirm-password/styled';

const ConfirmPassword: i.NextPageComponent = () => {
  const router = useRouter<Queries>();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: ConfirmPasswordFormValues) => {
    const { uid, token } = router.query;

    setIsLoading(true);

    await Auth.post({
      path: '/users/reset_password_confirm/',
      body: {
        uid,
        token,
        new_password: data.password.trim(),
      },
    })
      .then(() => {
        toast.success('Your account is activated. You can reset your password now.');
        router.replace('/reset-password');
      })
      .catch(() => {
        router.replace(apiConfig.loginPath);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <SimplePage.Container>
      <SimplePage.Wrapper>
        <Card>
          <Heading as="h1" margin="0 0 24px">Set a new password</Heading>
          <FormContainer<ConfirmPasswordFormValues> onSubmit={onSubmit}>
            {({ register, formState: { errors } }) => (
              <>
                <InputPassword
                  label="Password"
                  error={errors?.password}
                  {...register('password', { ...validation.required, ...validation.password })}
                />
                <PasswordRequirements>
                  <span>—&nbsp;&nbsp;At least 8 characters</span>
                  <span>—&nbsp;&nbsp;At least 1 lowercase letter</span>
                  <span>—&nbsp;&nbsp;At least 1 capital</span>
                  <span>—&nbsp;&nbsp;At least 1 number</span>
                  <span>—&nbsp;&nbsp;At least 1 special character</span>
                </PasswordRequirements>
                <Button type="submit" disabled={isLoading} isLoading={isLoading}>
                  Save
                </Button>
              </>
            )}
          </FormContainer>
        </Card>
      </SimplePage.Wrapper>
    </SimplePage.Container>
  );
};

type Queries = {
  uid: string;
  token: string;
};

type ConfirmPasswordFormValues = {
  password: string;
};

export default ConfirmPassword;
