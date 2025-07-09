import { useShallow } from 'zustand/react/shallow';
import { useViewportStore } from '@/shared/stores/layout/use-viewport/use-viewport.store';

/* interface */
export const useInterfaceState = () =>
  useViewportStore(
    useShallow((state) => ({
      // initialization
      isInitialized: state.isInitialized,
      // visibility
      isHideHeader: state.isHideHeader,
      isHideWorkspace: state.isHideWorkspace,
      isHideWorkspaceSidebar: state.isHideWorkspaceSidebar,
      isMiniWorkspaceSidebar: state.isMiniWorkspaceSidebar,
      isCollapseWorkspaceSidebar: state.isCollapseWorkspaceSidebar,
      isHideWorkspaceContent: state.isHideWorkspaceContent,
      isHideFooter: state.isHideFooter,
      isHideBottomNavigation: state.isHideBottomNavigation,
      // styling
      workspaceWrapperStyle: state.workspaceWrapperStyle,
      workspaceInnerStyle: state.workspaceInnerStyle,
      workspaceContentStyle: state.workspaceContentStyle,
    })),
  );
export const useInterfaceActions = () => useViewportStore((state) => state.interfaceActions);

/* device */
export const useDeviceState = () =>
  useViewportStore(
    useShallow((state) => ({
      device: state.device,
    })),
  );
export const useDeviceActions = () => useViewportStore((state) => state.deviceActions);
