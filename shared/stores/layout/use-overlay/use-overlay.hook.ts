import { useShallow } from 'zustand/react/shallow';
import { useOverlayStore } from '@/shared/stores/layout/use-overlay/use-overlay.store';

export const useOverlayState = () =>
  useOverlayStore(
    useShallow((state) => ({
      dialogs: state.dialogs,
    })),
  );

export const useOverlayActions = () => useOverlayStore((state) => state.dialogActions);
