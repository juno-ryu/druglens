import { Breakpoint, SxProps } from '@mui/material';

/* viewport */
export type TypeUseViewportStore = TypeInterfaceState & TypeInterfaceAction & TypeDeviceState & TypeDeviceAction;

/* interface */
export type TypeInterfaceState = {
  // initialization
  isInitialized: boolean;
  // visibility
  isHideHeader: boolean;
  isHideWorkspace: boolean;
  isHideWorkspaceSidebar: boolean;
  isMiniWorkspaceSidebar: boolean;
  isCollapseWorkspaceSidebar: boolean;
  isHideWorkspaceContent: boolean;
  isHideFooter: boolean;
  isHideBottomNavigation: boolean;
  // styling
  workspaceWrapperStyle: SxProps;
  workspaceInnerStyle: SxProps;
  workspaceContentStyle: SxProps;
};
export type TypeInterfaceAction = {
  interfaceActions: {
    // initialization
    initialize: (value: TypeInterfaceState) => void;
    update: (value: Partial<TypeInterfaceState>) => void;
    // visibility
    setIsHideHeader: (value: TypeInterfaceState['isHideHeader']) => void;
    setIsHideWorkspace: (value: TypeInterfaceState['isHideWorkspace']) => void;
    setIsHideWorkspaceSidebar: (value: TypeInterfaceState['isHideWorkspaceSidebar']) => void;
    setIsMiniWorkspaceSidebar: (value: TypeInterfaceState['isMiniWorkspaceSidebar']) => void;
    setIsCollapseWorkspaceSidebar: (value: TypeInterfaceState['isCollapseWorkspaceSidebar']) => void;
    setIsHideWorkspaceContent: (value: TypeInterfaceState['isHideWorkspaceContent']) => void;
    setIsHideFooter: (value: TypeInterfaceState['isHideFooter']) => void;
    setIsHideBottomNavigation: (value: TypeInterfaceState['isHideBottomNavigation']) => void;
    // styling
    setWorkspaceWrapperStyle: (value: TypeInterfaceState['workspaceWrapperStyle']) => void;
    setWorkspaceInnerStyle: (value: TypeInterfaceState['workspaceInnerStyle']) => void;
    setWorkspaceContentStyle: (value: TypeInterfaceState['workspaceContentStyle']) => void;
  };
};

/* device */
export type TypeDeviceState = {
  device?: Breakpoint;
};
export type TypeDeviceAction = {
  deviceActions: {
    initialize: () => void;
    setDevice: (value: TypeDeviceState['device']) => void;
  };
};
