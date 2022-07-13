import * as i from 'types';
import * as React from 'react';

import {
  HeaderActionsContainer,
  HeaderActionsButton,
  HeaderActionsDropdown,
  HeaderActionsDropdownButton,
  DotsIcon,
} from './styled';

export const HeaderActions: React.FC<HeaderActionsProps> = ({ actions }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <HeaderActionsContainer>
      <HeaderActionsButton
        onClick={() => setIsOpen(!isOpen)}
        icon={<DotsIcon />}
        variant="secondary"
      />
      {isOpen && (
        <HeaderActionsDropdown>
          {actions.map((action) => (
            <HeaderActionsDropdownButton
              onClick={() => {
                if (action.type !== 'link') {
                  action.onClick?.();
                }

                setIsOpen(false);
              }}
              key={action.label}
            >
              {action.label}
            </HeaderActionsDropdownButton>
          ))}
        </HeaderActionsDropdown>
      )}
    </HeaderActionsContainer>
  );
};

type HeaderActionsProps = {
  actions: i.HeaderAction[];
};
