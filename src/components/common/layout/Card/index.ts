import styled from 'styled-components';

import { media } from 'styles/utils';

export const Card = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.overlay};
  padding: 24px;
  background-color: ${(props) => props.theme.colors.white};

  ${media.desktop`
    padding: 24px 30px;
  `}
`;
