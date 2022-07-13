import * as i from 'types';
import * as React from 'react';
import { StylesConfig, GroupBase } from 'react-select';
import AsyncSelect, { AsyncProps } from 'react-select/async';

import { FormField } from '../FormField';
import customStyles from './customStyles';

export const SelectAsync = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  additionalStyles, name, label, error, direction = 'vertical', description,
  ...otherProps
}: SelectAsyncProps<Option, IsMulti, Group>) => {

  const formFieldProps = { name, label, error, direction, description };
  const selectProps = { ...otherProps };
  const stylingProps = {
    styles: {
      ...customStyles<Option, IsMulti, Group>(),
      ...additionalStyles,
    },
  };

  return (
    <FormField {...formFieldProps}>
      <AsyncSelect
        name={name}
        {...selectProps}
        {...stylingProps}
      />
    </FormField>
  );
};

type SelectAsyncProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> =
  AsyncProps<Option, IsMulti, Group> &
  i.FormFieldProps & {
    additionalStyles?: StylesConfig<Option, IsMulti, Group>;
  };
