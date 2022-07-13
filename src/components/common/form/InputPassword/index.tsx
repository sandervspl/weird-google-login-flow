import * as i from 'types';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

import { validation } from 'services/validation';

import { Input } from '../Input';
import { EyeClosedIconStyled, EyeOpenIconStyled } from './styled';

export const InputPassword: React.FC<InputPasswordProps> = ({ name, ...props }) => {
  const { register } = useFormContext();
  const [inputType, setInputType] = React.useState<i.InputTypes>('password');

  return (
    <Input
      type={inputType}
      iconPosition="right"
      icon={inputType === 'password' ? <EyeClosedIconStyled /> : <EyeOpenIconStyled />}
      handleIconClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
      {...register(name, { ...validation.required })}
      {...props}
    />
  );
};

type InputPasswordProps = i.InputProps;
