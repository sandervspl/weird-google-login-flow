import styled from 'styled-components';

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 32px;

  & > svg {
    height: 48px;
    width: 48px;
    fill: ${({ theme }) => theme.colors.green};
    margin-bottom: 16px;
  }
`;
