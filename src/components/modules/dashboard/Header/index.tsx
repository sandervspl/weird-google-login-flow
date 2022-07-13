import * as i from 'types';
import * as React from 'react';

import { StatusLabel, Skeleton } from 'common/general';
import { TabGroup } from 'common/interaction';
import { Heading } from 'common/typography';

import { Hamburger } from './components/Hamburger';
import { HeaderActions } from './components/HeaderActions';
import { HeaderMainAction } from './components/HeaderMainAction';
import {
  HeaderButtonWrapper,
  HeaderTitleWrapper,
  HeaderContainer,
  HeaderTop,
  LogoWrapper,
  LogoMobile,
} from './styled';

export const Header: React.FC<HeaderProps> = ({
  headerMainAction, headerActions, headerTabs, title, setSidebarOpen,
  isSidebarOpen, statusLabel, isLoading,
}) => {
  return (
    <HeaderContainer hasTabs={Boolean(headerTabs)} isSidebarOpen={isSidebarOpen}>
      <HeaderTop>
        <Hamburger
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          isActive={isSidebarOpen}
        />
        {isSidebarOpen ? (
          <LogoWrapper href="/">
            <a>
              <LogoMobile />
            </a>
          </LogoWrapper>
        ) : (
          <HeaderTop>
            <HeaderTitleWrapper>
              <Heading as="h1" margin="0">
                {isLoading ? <Skeleton isLoading /> : title}
              </Heading>
              {statusLabel && (
                <StatusLabel variant={statusLabel.variant}>
                  {statusLabel.label}
                </StatusLabel>
              )}
            </HeaderTitleWrapper>
            <HeaderButtonWrapper>
              {headerMainAction && (
                <HeaderMainAction action={headerMainAction} />
              )}
              {headerActions && (
                <HeaderActions actions={headerActions} />
              )}
            </HeaderButtonWrapper>
          </HeaderTop>
        )}
      </HeaderTop>
      {headerTabs && !isSidebarOpen && (
        <TabGroup tabs={headerTabs} />
      )}
    </HeaderContainer>
  );
};

type HeaderProps = {
  headerActions?: i.HeaderAction[];
  headerMainAction?: i.HeaderAction;
  headerTabs?: i.Tab[];
  isSidebarOpen: boolean;
  setSidebarOpen: (sidebar: boolean) => void;
  statusLabel?: i.StatusLabel;
  title?: string;
  isLoading?: boolean;
};
