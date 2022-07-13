import styled from 'styled-components';

import CloseIcon from 'vectors/close.svg';
import { media, hexToRgba } from 'styles/utils';

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => hexToRgba(theme.colors.black, '0.50')};
`;

export const ModalWrapper = styled.div`
  z-index: 2;
  width: calc(100% - 32px);
  height: auto;
  max-height: 95%;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    width: 480px;
    max-width: 100%;
  `}
`;

export const ModalContent = styled.div`
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-overflow-scrolling: touch;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.overlay};
`;

export const ModalContentWrapper = styled.div`
  width: 100%;
  margin: 24px 0 0;
  padding: 0 24px;
`;

export const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 24px 24px 0;
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;

  & > button {
    + button {
      margin: 0 0 0 8px;
    }
  }
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 30px;
  right: 24px;
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
`;
