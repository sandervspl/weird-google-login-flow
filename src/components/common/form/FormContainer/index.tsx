import * as React from 'react';
import {
  useForm, UseFormReturn, SubmitHandler, UnpackNestedValue, DeepPartial, FormProvider,
} from 'react-hook-form';

import { StyledFormContainer } from './styled';

export const FormContainer = <TFormValues extends Record<string, any> = Record<string, any>>({
  children, onSubmit, defaultValues, id,
}: FormContainerProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    mode: 'onChange',
    defaultValues,
  });

  return (
    <StyledFormContainer onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      <FormProvider {...methods}>
        {children(methods)}
      </FormProvider>
    </StyledFormContainer>
  );
};

export type FormContainerProps<TFormValues extends object> = {
  id?: string;
  defaultValues?: UnpackNestedValue<DeepPartial<TFormValues>>;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};
