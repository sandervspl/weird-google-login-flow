import * as i from 'types';
import styled, { css } from 'styled-components';

export const StatusLabel = styled.div<StatusLabelProps>`
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;

  ${({ variant }) => variant === 'red' && css`
    background-color: ${({ theme }) => theme.colors.red};
  `}
`;

type StatusLabelProps = Pick<i.StatusLabel, 'variant'>;
