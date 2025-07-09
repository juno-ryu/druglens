import { StateCreator } from 'zustand';
import { TypeOverlayAction, TypeOverlayState } from '@/shared/stores/layout/use-overlay/use-overlay.type';

export const INITIAL_OVERLAY_STATE = {
  dialogs: [],
};

export const createOverlaySlice: StateCreator<TypeOverlayState & TypeOverlayAction> = (set) => ({
  ...INITIAL_OVERLAY_STATE,
  dialogActions: {
    initialize: () => set(() => INITIAL_OVERLAY_STATE),
    setDialogs: (updater) =>
      set((state) => {
        const updatedDialogs = typeof updater === 'function' ? updater(state.dialogs) : updater;
        return { dialogs: updatedDialogs };
      }),
  },
});
