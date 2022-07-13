import styled from 'styled-components';

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    font-size: 14px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
