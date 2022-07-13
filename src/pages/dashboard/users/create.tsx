import * as i from 'types';
import { toast } from 'react-toastify';

import api from 'services/api';
import { useRouter } from 'hooks';
import { useMutateUser } from 'queries/users/detail';
import { CheckmarkIcon } from 'common/icon';
import { FormContainer } from 'common/form';
import { EditForm } from 'modules/pages/users';
import { DashboardLayout } from 'modules/layouts';

const Page: i.NextPageComponent = () => {
  const formId = 'userManagementCreate';
  const router = useRouter();
  const { mutate: upsertUser } = useMutateUser();

  const onSubmit = (formValues: i.UpsertUserEditFormValues) => {
    upsertUser({
      values: formValues,
    }, {
      onSuccess: async (newUser) => {
        await api.post({ path: `/dashboard/users/users/${newUser.id}/send_activation_email` });

        toast.success('User successfully created');
        router.push('/dashboard/users');
      },
    });
  };

  return (
    <DashboardLayout
      title="Add user"
      headerMainAction={{
        label: 'Save changes',
        icon: <CheckmarkIcon />,
        form: formId,
        type: 'submit',
      }}
    >
      <FormContainer<i.UpsertUserEditFormValues>
        onSubmit={onSubmit}
        id={formId}
      >
        {() => <EditForm />}
      </FormContainer>
    </DashboardLayout>
  );
};

export default Page;
