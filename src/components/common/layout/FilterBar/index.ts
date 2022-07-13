import styled from 'styled-components';

import { media } from 'styles/utils';

export const FilterBar = styled.div`
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;

  ${media.desktop`
    column-gap: 24px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    > button {
      margin-top: 24px;
      height: 46px;
      justify-self: start;
    }
  `}
`;
