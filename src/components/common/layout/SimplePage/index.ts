import styled from 'styled-components';

import { media } from 'styles/utils';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: calc(100% - 32px);
  margin: 0 16px;

  ${media.tablet`
    width: 448px;
    margin: 0;
  `}
`;

export const SimplePage = {
  Container,
  Wrapper,
};
