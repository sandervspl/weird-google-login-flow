import * as i from 'types';
import * as React from 'react';

import { FormField } from '../FormField';
import { StyledTextarea } from './styled';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  autoFocus, disabled, name, label, icon, error, readOnly, direction = 'vertical',
  description, ...props
}, ref) => {
  return (
    <FormField {...{ name, label, error, direction, description }}>
      <StyledTextarea
        as="textarea"
        {...{
          ...{ autoFocus, disabled, name, readOnly },
          ...(ref && { ref }),
        }}
        id={name}
        error={!!error}
        {...props}
      />
    </FormField>
  );
});

export type TextareaProps =
  & i.DefaultInputProps
  & i.FormFieldProps;
