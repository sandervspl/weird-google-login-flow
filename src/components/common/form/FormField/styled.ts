import * as i from 'types';
import styled, { css } from 'styled-components';

import { Label } from '../Label';
import { InputWrapper } from '../Input/styled';
import { StyledTextarea } from '../Textarea/styled';

export const FormFieldsWrapper = styled.div<FormFieldsWrapperProps>`
  flex-basis: 100%;
  max-width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;

  &:last-child {
    margin-bottom: 0;
  }

  ${Label} {
    flex-basis: 100%;
  }

  ${({ direction }) => direction === 'horizontal' && css`
    align-items: center;

    ${Label} {
      margin-bottom: 0;
      width: 100px;
      flex-basis: auto;
    }

    ${InputWrapper} {
      width: auto;
      flex: 2;
    }

    ${FormFieldDescription} {
      margin-left: 100px;
    }

    ${StyledTextarea} {
      width: auto;
      flex: 2;
    }
  `};
`;

type FormFieldsWrapperProps = Pick<i.FormFieldProps, 'direction'>;

export const FormFieldDescription = styled.span<FormFieldDescriptionProps>`
  width: 100%;
  margin-top: 8px;
  font-size: 14px;
  font-family: sans-serif;
  display: inline-block;

  ${({ isError }) => isError && css`
    color: #DC3545;
  `}
`;

type FormFieldDescriptionProps = {
  isError?: boolean;
};
