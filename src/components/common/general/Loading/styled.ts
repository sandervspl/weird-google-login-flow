import styled, { css } from 'styled-components';

export const LoadingContainer = styled.div<LoadingProps>`
  position: static;
  width: 100%;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};

  svg {
    width: 100px;
    fill: ${({ theme }) => theme.colors.gray};
  }

  ${({ variant, theme }) => variant === 'black' && css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  `}

  ${({ size }) => size === 'small' && css`
    svg {
      width: 60px;
    }
  `}

  ${({ size }) => size === 'big' && css`
    height: 400px;
  `}

  ${({ position }) => position === 'absolute' && css`
    position: absolute;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  `}
`;

export type LoadingProps = {
  variant?: 'black' | 'white';
  size?: 'small' | 'big';
  position?: 'static' | 'absolute';
};
