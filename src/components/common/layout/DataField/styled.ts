import styled, { css } from 'styled-components';

import { Label } from 'common/form';

export const DataFieldWrapper = styled.div<DataFieldWrapperProps>`
  flex-basis: 100%;
  max-width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;

  &:last-child {
    margin-bottom: 0;
  }

  ${Label} {
    flex-basis: 100%;
  }

  ${({ direction }) => direction === 'horizontal' && css`
    align-items: center;

    ${Label} {
      margin-bottom: 0;
      width: 100px;
      flex-basis: auto;
    }
  `};
`;

type DataFieldWrapperProps = {
  direction?: 'horizontal' | 'vertical';
};

