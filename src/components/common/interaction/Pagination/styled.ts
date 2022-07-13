import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 24px;
  width: 100%;
`;

export const PaginationButton = styled.div<PaginationButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  padding: 0 4px;
  min-width: 32px;
  height: 32px;
  margin: 0 4px;
  color: ${({ theme }) => theme.colors.black.light};

  svg {
    width: 24px;
    height: 24px;
    margin-right: 0;
    fill: ${({ theme }) => theme.colors.black};
  }

  ${media.desktop`
    transition: border-color .2s, color .2s, background-color .2s;

    &:hover {
      color: ${({ theme }) => theme.colors.black};

      & svg {
        fill: ${({ theme }) => theme.colors.black};
      }
    }
  `}

  ${({ isCurrentPage, theme }) => isCurrentPage && css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
    border-radius: 100%;
    cursor: default;

    ${media.desktop`
      &:hover {
        color: ${theme.colors.white};
      }
    `}
  `};

  ${({ hideOnMobile }) => hideOnMobile && css`
    display: none;

    ${media.tablet`
      display: flex;
    `}
  `}
`;

type PaginationButtonProps = {
  hideOnMobile?: boolean;
  isDot?: boolean;
  isCurrentPage?: boolean;
};
