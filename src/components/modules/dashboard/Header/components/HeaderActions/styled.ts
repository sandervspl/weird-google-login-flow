import styled from 'styled-components';

import Dots from 'vectors/dots.svg';
import { Button } from 'common/interaction';
import { hexToRgba } from 'styles/utils';

export const HeaderActionsContainer = styled.div`
  position: relative;
  z-index: 1;
`;

export const HeaderActionsButton = styled(Button)`
  margin: 0;
`;

export const HeaderActionsDropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  padding: 8px;
  width: 216px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.black, '0.15')};
  box-shadow: ${({ theme }) => theme.shadows.overlay};
`;

export const HeaderActionsDropdownButton = styled.button`
  appearance: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.notoSans};
  border: 0;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  text-align: left;
`;

export const DotsIcon = styled(Dots)`
  width: 20px;
  height: 20px;
`;
