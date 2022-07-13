import * as React from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { Heading } from 'common/typography';

import {
  ModalBackground, ModalOverlay, ModalFooter, ModalContent,
  ModalWrapper, CloseButton, ModalHeader, ModalContentWrapper,
} from './styled';

const ModalContainer: React.FC<ModalProps> = ({
  children, onClose, title, withoutCloseButton,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const closeModal = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    if (modalRef.current) {
      disableBodyScroll(modalRef.current);
    }

    window.addEventListener('keyup', closeModal);

    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('keyup', closeModal);
    };
  }, [modalRef, onClose]);

  return createPortal(
    <ModalOverlay>
      <ModalBackground onClick={onClose} />
      <ModalWrapper>
        <ModalContent ref={modalRef}>
          {title && (
            <ModalHeader>
              <Heading as="h2" margin="0">
                {title}
              </Heading>
              {!withoutCloseButton && <CloseButton onClick={onClose} />}
            </ModalHeader>
          )}
          {children}
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>,
    document.getElementById('modal') as Element,
  );
};

type ModalProps = {
  title?: string;
  onClose: () => void;
  withoutCloseButton?: boolean;
};

export const Modal = {
  Container: ModalContainer,
  Content: ModalContentWrapper,
  Footer: ModalFooter,
};
