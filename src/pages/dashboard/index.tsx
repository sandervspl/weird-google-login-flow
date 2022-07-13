import type * as i from 'types';

import { DashboardLayout } from 'modules/layouts';

const Page: i.NextPageComponent = () => {
  return (
    <p>
      dashboard
    </p>
  );
};

Page.layout = (page) => {
  return (
    <DashboardLayout title="Dashboard">
      {page}
    </DashboardLayout>
  );
};

export default Page;
