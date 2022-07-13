import * as i from 'types';

import { formatDate, fullDateWithTime, translateAccountStatus } from 'services';
import { useRouter } from 'hooks';
import { useQueryUser } from 'queries/users/detail';
import { PenIcon } from 'common/icon';
import { Skeleton } from 'common/general';
import { DataField, Row } from 'common/layout';
import { Text, Heading } from 'common/typography';
import { DetailPage } from 'modules/pages/users';

const Page: i.NextPageComponent = () => {
  const router = useRouter<{ userId: string }>();
  const { data: user, isLoading } = useQueryUser();

  return (
    <DetailPage
      headerMainAction={{
        label: 'Edit user',
        icon: <PenIcon />,
        type: 'link',
        href: `/dashboard/users/${router.query.userId}/edit`,
      }}
    >
      <Heading as="h1" margin="0 0 24px">Personal information</Heading>
      <Row>
        <DataField label="First name">
          {isLoading ? <Skeleton isLoading /> : (
            <Text>{user?.first_name}</Text>
          )}
        </DataField>
        <DataField label="Last name">
          {isLoading ? <Skeleton isLoading /> : (
            <Text>{user?.last_name}</Text>
          )}
        </DataField>
      </Row>
      <Row>
        <DataField label="Email address">
          {isLoading ? <Skeleton isLoading /> : (
            <Text>{user?.email}</Text>
          )}
        </DataField>
      </Row>
      <Row margin="40px 0 16px">
        <DataField label="Account created">
          {isLoading ? <Skeleton isLoading /> : (
            <Text>{user?.created && formatDate(user?.created, fullDateWithTime)}</Text>
          )}
        </DataField>
        <DataField label="Account status">
          {isLoading ? <Skeleton isLoading /> : (
            <Text>{translateAccountStatus[user?.account_status as i.UserAccountStatus]}</Text>
          )}
        </DataField>
      </Row>
      <Row>
        <DataField label="Last login">
          {isLoading ? <Skeleton isLoading /> : (
            <Text>
              {user?.last_login
                ? formatDate(user?.last_login, fullDateWithTime)
                : 'None'
              }
            </Text>
          )}
        </DataField>
      </Row>
      <Heading as="h1" margin="40px 0 24px">Groups</Heading>
      <Row>
        <DataField label="Group name">
          {isLoading ? <Skeleton isLoading /> : (
            <Text>{user?.groups.map((group) => group.name).join(', ')}</Text>
          )}
        </DataField>
      </Row>
    </DetailPage>
  );
};

export default Page;
