import * as i from 'types';
import * as React from 'react';

import { useQueryUsers } from 'queries/users/list';
import { usePrefetchUser } from 'queries/users/detail';
import { useQueryParams, useRouter } from 'hooks';
import { PaginationTable } from 'modules/table';
import { tableColumns, OverviewFilterBar } from 'modules/pages/users/overview';
import { DashboardLayout } from 'modules/layouts';
import { PlusIcon } from 'common/icon';

const UserManagementOverview: i.NextPageComponent = () => {
  const router = useRouter<{ userId: string }>();
  const { queryParams } = useQueryParams();
  const memoTableColumns = React.useMemo(() => tableColumns(), []);

  const { onPrefetchHover } = usePrefetchUser();
  const { data, isLoading } = useQueryUsers({
    page: Number(queryParams.page || 1),
    limit: 25,
    search: queryParams.search,
  });

  return (
    <>
      <OverviewFilterBar />
      <PaginationTable<i.User>
        columns={memoTableColumns}
        pagination={data?.pagination}
        data={data?.result || []}
        isLoading={isLoading}
        onRowHover={(row) => onPrefetchHover(row.id)}
        onRowClick={(row) => router.push(`/dashboard/users/${row.id}`)}
      />
    </>
  );
};

UserManagementOverview.layout = (page) => {
  return (
    <DashboardLayout
      headerMainAction={{
        label: 'Add user',
        icon: <PlusIcon />,
        type: 'link',
        href: '/dashboard/users/create',
      }}
      title="Users"
    >
      {page}
    </DashboardLayout>
  );
};

export default UserManagementOverview;
