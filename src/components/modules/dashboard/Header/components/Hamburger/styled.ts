import styled, { css } from 'styled-components';

import { media } from 'styles/utils';

export const HamburgerContainer = styled.button<HamburgerContainerProps>`
  -webkit-appearance: none;
  border: 0;
  background: transparent;
  box-shadow: none;
  width: 16px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  cursor: pointer;
  position: relative;
  margin-right: 20px;

  & > div {
    background-color: ${({ theme }) => theme.colors.black};
    height: 2px;
    width: 14px;
    border-radius: 4px;
    flex-shrink: 0;

    &:nth-of-type(2) {
      width: 9px;
    }
  }

  ${({ isActive }) => isActive && css`
    height: 12px;

    & > div {
      position: absolute;
      top: 0;
      margin-top: 5px;
      width: 15px;

      &:first-of-type {
        transform: rotate(45deg);
      }

      &:nth-of-type(2) {
        transform: rotate(-45deg);
        width: 15px;
      }

      &:last-of-type {
        display: none;
      }
    }
  `}

  ${media.desktop`
    display: none;
  `}
`;

type HamburgerContainerProps = {
  isActive: boolean;
};
