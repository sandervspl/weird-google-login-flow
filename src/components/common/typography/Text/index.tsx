import * as i from 'types';
import styled from 'styled-components';

export const Text = styled.p<i.TextDefaultProps>`
  font-weight: ${({ weight }) => weight || 400};
  line-height: 22px;
  font-size: ${({ size }) => size || 15}px;
  color: ${({ theme, color }) => theme.colors[color || 'black']};
  margin: 0;
`;
