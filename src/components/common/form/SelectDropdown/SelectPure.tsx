import * as i from 'types';
import * as React from 'react';
import Select, { StylesConfig, Props as SelectProps, GroupBase } from 'react-select';

import { FormField } from '../FormField';
import customStyles from './customStyles';

export const SelectPure = React.forwardRef(<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: SelectPureProps<Option, IsMulti, Group>, ref) => {
  const {
    additionalStyles, name, label, error, direction = 'vertical', description, ...otherProps
  } = props;
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
      <Select
        name={name}
        ref={ref}
        {...selectProps}
        {...stylingProps}
      />
    </FormField>
  );
});

type SelectPureProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> =
  & SelectProps<Option, IsMulti, Group>
  & i.FormFieldProps
  & {
    additionalStyles?: StylesConfig<Option, IsMulti, Group>;
  };
