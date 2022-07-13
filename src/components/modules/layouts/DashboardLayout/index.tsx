import * as i from 'types';
import * as React from 'react';

import { Header, Sidebar } from 'modules/dashboard';

import { ChildrenWrapper } from './styled';

export const DashboardLayout: React.FC<Props> = ({
  children,
  headerActions,
  headerMainAction,
  headerTabs,
  statusLabel,
  title,
  isLoading,
}) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} />
      <Header
        title={title}
        isLoading={isLoading}
        headerActions={headerActions}
        headerMainAction={headerMainAction}
        headerTabs={headerTabs}
        setSidebarOpen={setSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        statusLabel={statusLabel}
      />
      <ChildrenWrapper headerHasTabs={Boolean(headerTabs)}>
        {children}
      </ChildrenWrapper>
    </>
  );
};

type Props = {
  children: React.ReactNode;
  headerActions?: i.HeaderAction[];
  headerMainAction?: i.HeaderAction;
  headerTabs?: i.Tab[];
  isLoading?: boolean;
  statusLabel?: i.StatusLabel;
  title: string;
};
