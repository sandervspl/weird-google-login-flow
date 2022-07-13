import * as React from 'react';

type UseModalReturn = [boolean, (id?: string) => void, () => void, string | undefined];

export const useModal = (): UseModalReturn => {
  const [open, setOpen] = React.useState<string | undefined>(undefined);

  const openModal = (id?: string) => setOpen(id || 'open');
  const closeModal = () => setOpen(undefined);

  return [Boolean(open), openModal, closeModal, open];
};
