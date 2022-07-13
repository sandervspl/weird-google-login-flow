import styled, { css } from 'styled-components';

export const TableHeadIconContainer = styled.div<TableHeadIconContainerProps>`
  position: relative;
  left: 8px;
  bottom: 1px;
  display: inline-block;
  width: 10px;
  height: 8px;

  & svg {
    transform-origin: center;
    fill: ${({ theme }) => theme.colors.black};

    ${({ pointUp }) => pointUp && css`
      transform: rotate(180deg);
    `}
  }
`;

type TableHeadIconContainerProps = {
  pointUp?: boolean;
};
