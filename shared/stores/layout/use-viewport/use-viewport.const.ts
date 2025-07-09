import { StateCreator } from 'zustand';
import { TypeDeviceAction, TypeDeviceState, TypeInterfaceAction, TypeInterfaceState } from '@/shared/stores/layout/use-viewport/use-viewport.type';

/* interface */
export const INITIAL_INTERFACE_STATE: TypeInterfaceState = {
  // initialization
  isInitialized: false,
  // visibility
  isHideHeader: false,
  isHideWorkspace: false,
  isHideWorkspaceSidebar: false,
  isMiniWorkspaceSidebar: false,
  isCollapseWorkspaceSidebar: false,
  isHideWorkspaceContent: false,
  isHideFooter: true,
  isHideBottomNavigation: true,
  // styling
  workspaceWrapperStyle: {},
  workspaceInnerStyle: {},
  workspaceContentStyle: {},
};

export const createInterfaceSlice: StateCreator<TypeInterfaceState & TypeInterfaceAction> = (set) => ({
  ...INITIAL_INTERFACE_STATE,
  interfaceActions: {
    // initialization
    initialize: (value) => set((state) => (state.isInitialized ? { ...state } : { ...value })),
    update: (value) => set(() => ({ ...value })),
    // visibility
    setIsHideHeader: (value) => set(() => ({ isHideHeader: value })),
    setIsHideWorkspace: (value) => set(() => ({ isHideWorkspace: value })),
    setIsHideWorkspaceSidebar: (value) => set(() => ({ isHideWorkspaceSidebar: value })),
    setIsMiniWorkspaceSidebar: (value) => set(() => ({ isMiniWorkspaceSidebar: value })),
    setIsCollapseWorkspaceSidebar: (value) => set(() => ({ isCollapseWorkspaceSidebar: value })),
    setIsHideWorkspaceContent: (value) => set(() => ({ isHideWorkspaceContent: value })),
    setIsHideFooter: (value) => set(() => ({ isHideFooter: value })),
    setIsHideBottomNavigation: (value) => set(() => ({ isHideBottomNavigation: value })),
    // styling
    setWorkspaceWrapperStyle: (value) => set(() => ({ workspaceWrapperStyle: value })),
    setWorkspaceInnerStyle: (value) => set(() => ({ workspaceInnerStyle: value })),
    setWorkspaceContentStyle: (value) => set(() => ({ workspaceContentStyle: value })),
  },
});

/* device */
export const INITIAL_DEVICE_STATE: TypeDeviceState = {
  device: undefined,
};

export const createDeviceSlice: StateCreator<TypeDeviceState & TypeDeviceAction> = (set) => ({
  ...INITIAL_DEVICE_STATE,
  deviceActions: {
    initialize: () => set(() => ({ ...INITIAL_DEVICE_STATE })),
    setDevice: (value) => set(() => ({ device: value })),
  },
});
