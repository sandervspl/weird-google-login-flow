import styled, { css } from 'styled-components';
import * as i from 'types';

export const InputFieldCss = css<InputProps>`
  color: #000000;
  width: 100%;
  height: 46px;
  padding: 0 8px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #CCCCCC;
  background-color: #FAFAFA;
  -webkit-appearance: none;
  line-height: normal;
  overflow: hidden;

  &::placeholder {
    color: #CCCCCC;
  }

  &:active,
  &:focus {
    caret-color: #80BC00;
    border-color: #80BC00;
    outline: none;
  }

  &[readonly],
  &[disabled] {
    border-color: #E6E6E6;
    color: #CCCCCC;
    background-color: #F2F2F2;
  }

  ${({ error }) => error && css`
    border-color: #DC3545;

    &:active,
    &:focus {
      caret-color: #DC3545;
      border-color: #DC3545;
      outline: none;
    }
  `};

  ${({ as }) => as === 'textarea' && css`
    max-width: 100%;
    min-height: 150px;
    padding: 8px;
    resize: vertical;
    overflow-y: scroll;
  `};

  ${({ hasIcon }) => hasIcon && css`
    padding-left: 60px;
  `}
`;

export type InputProps = Pick<i.DefaultInputProps, 'autoFocus'> & {
  error?: boolean;
  hasIcon?: boolean;
  as?: 'textarea';
};

export const StyledInput = styled.input`
  ${InputFieldCss};
`;

export const InputIcon = styled.div<IconWrapperProps>`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 30px;
    max-height: 100%;
    fill: #000000;
  }

  ${({ readOnly }) => readOnly && css`
    opacity: .4;
  `};

  ${({ onClick }) => onClick && css`
    cursor: pointer;
  `}
`;

type IconWrapperProps = Pick<i.DefaultInputProps, 'readOnly'>;

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  width: 100%;

  ${({ iconPosition }) => iconPosition === 'right' && css`
    ${StyledInput} {
      padding: 0 60px 0 8px;
    }

    ${InputIcon} {
      left: auto;
      right: 16px;
    }
  `}
`;

type InputWrapperProps = Pick<i.DefaultInputProps, 'iconPosition'>;
