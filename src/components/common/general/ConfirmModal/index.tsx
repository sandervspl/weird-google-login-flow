import * as React from 'react';

import { Button } from 'common/interaction';
import { Modal } from 'common/general';
import { Text } from 'common/typography';

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  closeModal, confirmButtonVariant, onConfirm, text, title, closeText, confirmText,
}) => {
  return (
    <Modal.Container
      onClose={closeModal}
      title={title || 'Confirm'}
      withoutCloseButton
    >
      <Modal.Content>
        <Text>{text}</Text>
      </Modal.Content>
      <Modal.Footer>
        <Button onClick={closeModal} variant="secondary">
          {closeText || 'Cancel'}
        </Button>
        <Button onClick={onConfirm} variant={confirmButtonVariant || 'primary'}>
          {confirmText || 'Confirm'}
        </Button>
      </Modal.Footer>
    </Modal.Container>
  );
};

type ConfirmModalProps = {
  closeModal: () => void;
  closeText?: string;
  confirmText?: string;
  confirmButtonVariant?: 'warning' | 'secondary';
  onConfirm: () => void;
  text: string;
  title?: string;
};
