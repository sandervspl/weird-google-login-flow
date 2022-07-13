import styled from 'styled-components';

export const Label = styled.label<LabelProps>`
  font-size: 14px;
  font-weight: 600;
  font-family: sans-serif;
  margin-bottom: 8px;
  display: inline-block;
  cursor: default;
`;

export type LabelProps = {
  htmlFor?: string;
};
