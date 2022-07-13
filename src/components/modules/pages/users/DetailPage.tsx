import * as i from 'types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { useModal } from 'hooks';
import { useQueryUser, useMutateUserActivation } from 'queries/users/detail';
import { translateUserIsActive } from 'services';
import { ConfirmModal } from 'common/general';
import { DashboardLayout } from 'modules/layouts';

export const DetailPage: i.NextPageComponent<Props> = ({
  children, headerMainAction, headerTabs,
}) => {
  const [isActivateModalOpen, openActivateModal, closeActivateModal] = useModal();
  const { data: user, isLoading } = useQueryUser();
  const { mutate: activateUser } = useMutateUserActivation();

  const onSetUserActive = () => {
    if (!user) return;

    activateUser({
      userId: user.id,
      action: user.is_active ? 'deactivate' : 'activate',
    }, {
      onSuccess: () => {
        const successMessage = user.is_active
          ? 'User has been deactivated'
          : 'User has been activated';

        toast.success(successMessage);
        closeActivateModal();
      },
    });
  };

  return (
    <DashboardLayout
      title={`${user?.first_name || ''} ${user?.last_name || ''}`}
      headerActions={[
        {
          label: user?.is_active ? 'Deactivate user' : 'Activate user',
          type: 'button',
          onClick: () => openActivateModal(),
        },
      ]}
      headerMainAction={headerMainAction}
      isLoading={isLoading}
      statusLabel={translateUserIsActive(user?.is_active)}
      headerTabs={headerTabs}
    >
      {isActivateModalOpen && (
        <ConfirmModal
          title={user?.is_active ? 'Deactivate user' : 'Activate user'}
          text={`Are you sure you want to ${user?.is_active ? 'deactivate' : 'activate'} this user?`}
          closeModal={closeActivateModal}
          onConfirm={() => onSetUserActive()}
          confirmButtonVariant={user?.is_active ? 'warning' : undefined}
        />
      )}
      {children}
    </DashboardLayout>
  );
};

type Props = {
  children: React.ReactNode;
  headerMainAction?: i.HeaderAction;
  headerTabs?: i.Tab[];
};
