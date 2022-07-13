import * as React from 'react';

import { Label } from 'common/form';

import { DataFieldWrapper } from './styled';

export const DataField: React.FC<DataFieldProps> = ({
  children, label, direction = 'vertical',
}) => {
  return (
    <DataFieldWrapper direction={direction}>
      {label && (
        <Label as="span">
          {label}
        </Label>
      )}
      {children}
    </DataFieldWrapper>
  );
};

export type DataFieldProps = {
  children?: React.ReactNode;
  label?: string;
  direction?: 'horizontal' | 'vertical';
};
