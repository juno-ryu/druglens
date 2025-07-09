import { useShallow } from 'zustand/react/shallow';
import { useSnapshotStore } from '@/shared/stores/auth/use-snapshot/use-snapshot.store';

/* controller */
export const useControllerState = () =>
  useSnapshotStore(
    useShallow((state) => ({
      controllerCondition: state.controllerCondition,
    })),
  );
export const useControllerActions = () => useSnapshotStore((state) => state.controllerActions);

/* author */
export const useAuthorState = () =>
  useSnapshotStore(
    useShallow((state) => ({
      authorAccount: state.authorAccount,
    })),
  );
export const useAuthorActions = () => useSnapshotStore((state) => state.authorActions);
