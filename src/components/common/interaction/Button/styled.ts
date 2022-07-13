
import styled, { css, keyframes } from 'styled-components';
import { media } from 'styles/utils';

import { ButtonProps } from './types';

export const buttonLoaderAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`;

export const StyledButtonLoader = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 6px;
    height: 6px;
    margin-right: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    animation: ${buttonLoaderAnimation} 1.4s infinite ease-in-out both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }

    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }
`;

export const ButtonIcon = styled.div`
  margin: 0 8px 0 0;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.button<ButtonProps>`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.notoSans};
  font-size: 16px;
  font-weight: 600;
  width: auto;
  height: 48px;
  padding: 12px 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  border: 0;

  svg {
    fill: ${({ theme }) => theme.colors.white};
    max-width: 24px;
    max-height: 24px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black.light};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.black.light};
  }

  ${media.desktop`
    transition: background-color .2s, border-color .2s;

    + button {
      margin: 0 0 0 8px;
    }
  `}

  ${({ iconOnly }) => iconOnly && css`
    width: 48px;

    ${ButtonIcon} {
      margin: 0;
    }
  `}

  ${({ iconOnlyOnMobile }) => iconOnlyOnMobile && css`
    width: 48px;

    ${ButtonIcon} {
      margin: 0;
    }

    > span {
      display: none;
    }

    ${media.tablet`
      width: auto;

      > span {
        display: block;
      }
    `}
  `}

  ${({ iconPosition }) => iconPosition === 'right' && css<ButtonProps>`
    flex-direction: row-reverse;

    ${ButtonIcon} {
      margin: 0 0 0 8px;

      ${({ iconOnlyOnMobile }) => iconOnlyOnMobile && css`
        margin: 0;

        ${media.tablet`
          margin: 0 0 0 8px;
        `}
      `}
    }
  `}

  ${({ variant }) => variant === 'secondary' && css`
    background-color: ${({ theme }) => theme.colors.black};
  `}

  ${({ variant }) => variant === 'warning' && css`
    background-color: ${({ theme }) => theme.colors.red};
  `}

  ${({ size }) => size === 'auto' && css`
    width: auto;
  `}

  ${({ isLoading }) => isLoading && css`
    cursor: not-allowed;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.black.light};
    }
  `}

  ${({ disabled }) => disabled && css`
    color: ${({ theme }) => theme.colors.white}};
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;

    &:focus {
      background-color: ${({ theme }) => theme.colors.gray};
    }

    ${media.desktop`
      transition: none;

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray};;
      }
    `}
  `};
`;
