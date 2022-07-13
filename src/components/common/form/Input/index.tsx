import * as i from 'types';
import * as React from 'react';

import { FormField } from '../FormField';
import { StyledInput, InputWrapper, InputIcon } from './styled';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  autoFocus, disabled, name, label, icon, iconPosition = 'left', error, readOnly,
  direction, description, handleIconClick, ...props
}, ref) => {
  const IconComponent = icon as React.ElementType;

  return (
    <FormField {...{ name, label, error, direction, description }}>
      <InputWrapper iconPosition={iconPosition}>
        <StyledInput
          {...{
            ...{ autoFocus, disabled, name, readOnly },
            ...(ref && { ref }),
          }}
          id={name}
          error={!!error}
          hasIcon={!!icon}
          {...props}
        />
        {icon && (
          <InputIcon readOnly={readOnly} onClick={handleIconClick}>
            {IconComponent}
          </InputIcon>
        )}
      </InputWrapper>
    </FormField>
  );
});

export type InputProps =
  i.DefaultInputProps
  & i.FormFieldProps;
