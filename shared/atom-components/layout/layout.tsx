'use client';

import { Fragment, useLayoutEffect, useState } from 'react';
import { LicenseInfo } from '@mui/x-license';
import { Box } from '@/core/design-systems';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { useInterfaceActions, useInterfaceState } from '@/shared/stores/layout/use-viewport/use-viewport.hook';
import Category from '@/shared/atom-components/common/category/category';
import NavigationBar from '@/shared/atom-components/common/navigation-bar/navigation-bar';
import LayoutDrawerCategory from '@/shared/atom-components/layout/drawer/drawer-category';
import LayoutFooter from '@/shared/atom-components/layout/footer/footer';
import LayoutGnb from '@/shared/atom-components/layout/gnb/gnb';
import { getInterfaceState } from '@/shared/atom-components/layout/layout.const';
import {
  LayoutBottomNavigation,
  LayoutContainer,
  LayoutController,
  LayoutWorkspaceContent,
  LayoutWorkspaceInner,
  LayoutWorkspaceSidebar,
  LayoutWorkspaceWrapper,
} from '@/shared/atom-components/layout/layout.style';
import { LayoutProps } from '@/shared/atom-components/layout/layout.type';
import LayoutDeviceOpserverClient from '@/shared/atom-components/layout/opserver/device-opserver';
import LayoutOverlayOpserverClient from '@/shared/atom-components/layout/opserver/overlay-opserver';

LicenseInfo.setLicenseKey(process.env.NEXT_PUBLIC_MUI_X_LICENSE_KEY ?? '');

const Layout = (props: LayoutProps) => {
  const { nestData, children, className = '', ...restProps } = props;
  const { categoryData } = nestData;

  const { pathname } = useDynamicRoute();

  const interfaceState = useInterfaceState();
  const interfaceActions = useInterfaceActions();
  const dynamicState = getInterfaceState(pathname);
  const currentState = interfaceState.isInitialized ? interfaceState : dynamicState;

  // drawer
  const [drawer, setDrawer] = useState({ categoryOpen: false });

  // actions: drawer
  const toggleDrawer = (value?: boolean) => {
    setDrawer((prev) => ({
      ...prev,
      categoryOpen: value ?? !prev.categoryOpen,
    }));
  };

  // actions: viewport
  useLayoutEffect(() => {
    const updateState = { ...dynamicState, isInitialized: true };
    interfaceActions.initialize(updateState);
  }, []);
  useLayoutEffect(() => {
    const updateState = { ...dynamicState, isInitialized: true };
    interfaceActions.update(updateState);
  }, [pathname]);

  return (
    <Fragment>
      <LayoutController as={LayoutContainer} className={`${className}`} $interfaceState={currentState} {...restProps}>
        {!currentState.isHideHeader && <LayoutGnb />}
        {!currentState.isHideWorkspace && (
          <Box component={LayoutWorkspaceWrapper} sx={currentState.workspaceWrapperStyle}>
            <Box component={LayoutWorkspaceInner} sx={currentState.workspaceInnerStyle}>
              {!currentState.isHideWorkspaceSidebar && (
                <Category
                  component={LayoutWorkspaceSidebar}
                  category={categoryData}
                  isSingle={currentState.isMiniWorkspaceSidebar}
                  isDrawer={false}
                  headlineStyle={{ display: { desktop: 'none', tablet: 'block', mobile: 'block' } }}
                  toggleDrawer={toggleDrawer}
                />
              )}
              {!currentState.isHideWorkspaceContent && (
                <Box component={LayoutWorkspaceContent} sx={currentState.workspaceContentStyle}>
                  {children}
                </Box>
              )}
            </Box>
          </Box>
        )}
        {!currentState.isHideFooter && <LayoutFooter />}
        {!currentState.isHideBottomNavigation && <NavigationBar component={LayoutBottomNavigation} />}
      </LayoutController>
      <LayoutDrawerCategory
        isOpen={drawer.categoryOpen}
        category={categoryData}
        render={(child) => <LayoutController $interfaceState={interfaceState}>{child}</LayoutController>}
        toggleDrawer={toggleDrawer}
      />
      <LayoutDeviceOpserverClient />
      <LayoutOverlayOpserverClient />
    </Fragment>
  );
};

export default Layout;
