import * as i from 'types';
import { toast } from 'react-toastify';

import { useRouter } from 'hooks';
import { useSelectUserForm, useMutateUser } from 'queries/users/detail';
import { CheckmarkIcon } from 'common/icon';
import { FormContainer } from 'common/form';
import { EditForm, DetailPage } from 'modules/pages/users';

const Page: i.NextPageComponent = () => {
  const formId = 'userManagementDetailEdit';
  const router = useRouter();
  const userForm = useSelectUserForm();
  const { mutate: upserUser } = useMutateUser();

  const onSubmit = (formValues: i.UpsertUserEditFormValues) => {
    if (!userForm?.userId) return;

    upserUser({
      userId: userForm?.userId,
      values: formValues,
    }, {
      onSuccess: (newUser) => {
        toast.success('User successfully saved');
        router.push(`/dashboard/users/${newUser.id}/overview`);
      },
    });
  };

  return (
    <DetailPage
      headerMainAction={{
        label: 'Save changes',
        icon: <CheckmarkIcon />,
        form: formId,
        type: 'submit',
      }}
    >
      <FormContainer<i.UpsertUserEditFormValues>
        {...{
          onSubmit,
          defaultValues: userForm?.defaultValues,
          id: formId,
        }}
      >
        {() => <EditForm />}
      </FormContainer>
    </DetailPage>
  );
};

export default Page;
