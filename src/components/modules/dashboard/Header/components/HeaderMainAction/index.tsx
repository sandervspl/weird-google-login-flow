import * as i from 'types';
import * as React from 'react';

import { Button } from 'common/interaction';

export const HeaderMainAction: React.FC<HeaderMainActionProps> = ({ action }) => {
  const props = action.type === 'link'
    ? {
      href: action.href,
    }
    : {
      onClick: action.onClick,
      type: action.type || 'button',
    };

  return (
    <Button
      isLoading={action.isLoading}
      disabled={action.isDisabled}
      form={action.form}
      icon={action.icon}
      iconPosition="right"
      iconOnlyOnMobile
      {...props}
    >
      {action.label}
    </Button>
  );
};

type HeaderMainActionProps = {
  action: i.HeaderAction;
};
