export type HeaderAction = {
  form?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  label: string;
  icon?: React.ReactNode;
}
& ({
  type: 'submit' | 'button';
  onClick?: () => void;
}
| {
  type: 'link';
  href: string;
});

export type StatusLabel = {
  label: string;
  variant?: 'green' | 'red';
};
