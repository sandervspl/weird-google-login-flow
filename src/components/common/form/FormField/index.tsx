import * as i from 'types';
import * as React from 'react';

import { Label } from '../Label';
import { FormFieldsWrapper, FormFieldDescription } from './styled';

export const FormField: React.FC<i.FormFieldProps> = ({
  children, label, name, error, direction = 'vertical', description,
}) => {
  return (
    <FormFieldsWrapper direction={direction}>
      {label && (
        <Label htmlFor={name}>
          {label}
        </Label>
      )}
      {children}
      {(error || description) && (
        <FormFieldDescription isError={!!error}>
          {error?.message || description || 'Dit veld is verplicht'}
        </FormFieldDescription>
      )}
    </FormFieldsWrapper>
  );
};
