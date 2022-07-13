import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { isEqual } from 'lodash';

import { validation } from 'services';
import { useSelectUserForm } from 'queries/users/detail';
import { Row } from 'common/layout';
import { Heading } from 'common/typography';
import { Input, SelectPure } from 'common/form';

export const EditForm: React.FC = () => {
  const userForm = useSelectUserForm();
  const { control, register, reset, getValues, formState: { errors, isDirty } } = useFormContext();

  React.useEffect(() => {
    const values = getValues();
    if (userForm?.defaultValues && !isEqual(userForm.defaultValues, values) && !isDirty) {
      reset(userForm.defaultValues);
    }
  }, [userForm]);

  return (
    <>
      <Heading as="h1" margin="0 0 24px">
        Personal information
      </Heading>
      <Row>
        <Input
          label="First name"
          error={errors?.first_name}
          {...register('first_name', { ...validation.required })}
        />
        <Input
          label="Last name"
          error={errors?.last_name}
          {...register('last_name', { ...validation.required })}
        />
      </Row>
      <Row rowWidth="third">
        <Input
          label="E-mail"
          error={errors?.email}
          {...register('email', { ...validation.required, ...validation.email })}
        />
      </Row>
      <Heading as="h1" margin="16px 0 24px">Groups</Heading>
      <Row>
        <Controller
          control={control}
          name="groups"
          render={({ field }) => (
            <SelectPure
              {...field}
              options={userForm?.groupOptions}
              placeholder="Select"
              label="Group name"
              description="Optional"
              isMulti
              error={errors?.groups}
            />
          )}
        />
      </Row>
    </>
  );
};
