import styled, { css } from 'styled-components';

export const Tab = styled.a<TabProps>`
  height: 48px;
  margin: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 600;
  text-decoration: none;
  position: relative;

  ${({ isActive }) => isActive && css`
    color: ${({ theme }) => theme.colors.green};

    &:after {
      content: '';
      height: 2px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.green};
    }
  `}
`;

type TabProps = {
  isActive?: boolean;
};
