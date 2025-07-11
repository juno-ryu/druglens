import styled from '@emotion/styled';

import { TypeInterfaceState } from '@/shared/stores/layout/use-viewport/use-viewport.type';

export const LayoutController = styled.div<{ $interfaceState: TypeInterfaceState }>`
  --layout-guard-gnb-side: 40px;
  --layout-guard-workspace-wrapper-width: 100%;
  --layout-guard-workspace-inner-width: 100%;
  --layout-guard-workspace-sidebar-width-double-collapse: 280px;
  --layout-guard-workspace-sidebar-width-double-expand: 280px;
  --layout-guard-workspace-sidebar-width-single-collapse: 116px;
  --layout-guard-workspace-sidebar-width-single-expand: 116px;
  --layout-guard-drawer-width: 280px;
  --layout-guard-workspace-sidebar-width-current: ${(props) =>
    props.$interfaceState.isMiniWorkspaceSidebar
      ? props.$interfaceState.isCollapseWorkspaceSidebar
        ? 'var(--layout-guard-workspace-sidebar-width-single-collapse)'
        : 'var(--layout-guard-workspace-sidebar-width-single-expand)'
      : props.$interfaceState.isCollapseWorkspaceSidebar
        ? 'var(--layout-guard-workspace-sidebar-width-double-collapse)'
        : 'var(--layout-guard-workspace-sidebar-width-double-expand)'};
  --layout-guard-workspace-content-top: 48px;
  --layout-guard-workspace-content-bottom: 80px;
  --layout-guard-workspace-content-side: 40px;
  --layout-guard-footer-side: 72px;

  /* ${(props) => props.theme.breakpoints.down('desktop')} {
    --layout-guard-gnb-side: 24px;
    --layout-guard-workspace-wrapper-width: 100%;
    --layout-guard-workspace-inner-width: 100%;
    --layout-guard-workspace-sidebar-width-double-collapse: 0px;
    --layout-guard-workspace-sidebar-width-double-expand: 100%;
    --layout-guard-workspace-sidebar-width-single-collapse: 0px;
    --layout-guard-workspace-sidebar-width-single-expand: 92px;
    --layout-guard-drawer-width: 280px;
    --layout-guard-workspace-content-top: 28px;
    --layout-guard-workspace-content-bottom: 64px;
    --layout-guard-workspace-content-side: 24px;
    --layout-guard-footer-side: 40px;
  } */

  /* ${(props) => props.theme.breakpoints.down('tablet')} {
    --layout-guard-gnb-side: 16px;
    --layout-guard-workspace-wrapper-width: 100%;
    --layout-guard-workspace-inner-width: 100%;
    --layout-guard-workspace-sidebar-width-double-collapse: 0px;
    --layout-guard-workspace-sidebar-width-double-expand: 100%;
    --layout-guard-workspace-sidebar-width-single-collapse: 0px;
    --layout-guard-workspace-sidebar-width-single-expand: 76px;
    --layout-guard-drawer-width: 280px;
    --layout-guard-workspace-content-top: 24px;
    --layout-guard-workspace-content-bottom: 56px;
    --layout-guard-workspace-content-side: 16px;
    --layout-guard-footer-side: 24px;
  } */
`;
export const LayoutWorkspaceWrapper = styled.div`
  flex: 1 1 0px;
  margin: 0 auto;
  width: 100%;
  max-width: var(--layout-guard-workspace-wrapper-width);
`;

export const LayoutWorkspaceInner = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  max-width: var(--layout-guard-workspace-inner-width);
  min-height: 100%;
`;

export const LayoutWorkspaceSidebar = styled.nav`
  width: auto;
  margin: 24px 0 48px;
  min-width: var(--layout-guard-workspace-sidebar-width-current);
  max-width: var(--layout-guard-workspace-sidebar-width-current);
  padding: 0 var(--layout-guard-workspace-content-side);
  border-right: 1px solid ${(props) => props.theme.palette['gray/200']};

  ${(props) => props.theme.breakpoints.down('desktop')} {
    padding: 0 calc(var(--layout-guard-workspace-content-side) + 4px);
    /* border: none; */
  }
`;

export const LayoutWorkspaceContent = styled.main`
  flex: 1 1 0px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: calc(100% - var(--layout-guard-workspace-sidebar-width-current));
  padding: var(--layout-guard-workspace-content-top) var(--layout-guard-workspace-content-side) var(--layout-guard-workspace-content-bottom);
`;

export const LayoutBottomNavigation = styled.nav`
  position: sticky;
  bottom: 0;

  /* ${(props) => props.theme.breakpoints.up('desktop')} {
    display: none;
  } */
`;

export const LayoutContainer = styled.div<{ $interfaceState: TypeInterfaceState }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${(props) => props.theme.breakpoints.down('desktop')} {
    /* ${LayoutWorkspaceSidebar} {
      display: ${(props) => (props.$interfaceState.isCollapseWorkspaceSidebar ? 'none' : '')};
    } */
    /* ${LayoutWorkspaceContent} {
      display: ${(props) => (props.$interfaceState.isMiniWorkspaceSidebar ? '' : props.$interfaceState.isCollapseWorkspaceSidebar ? '' : 'none')};
    } */
  }
`;
