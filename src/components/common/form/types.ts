import * as i from 'types';
import { FieldError } from 'react-hook-form';

export type FormFieldProps = {
  name: string;
  children?: React.ReactNode;
  label?: string;
  description?: string;
  direction?: 'horizontal' | 'vertical';
  error?: FieldError | any;
  margin?: string;
};

export type InputTypes = 'password' | 'text' | 'textarea' | 'input';

export type DefaultInputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  defaultValue?: string;
  name: string;
  readOnly?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  autoFocus?: boolean;
  placeholder?: string;
  iconPosition?: 'left' | 'right';
  handleIconClick?: () => void;
  type?: InputTypes;
  width?: string;
  value?: string;
};

export type InputProps =
  & i.DefaultInputProps
  & i.FormFieldProps;

export type SelectOption = {
  value: string;
  label: string | number;
};
