import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { onCookieStorage } from '@/core/utils/storage/cookie-storage';
import { createAuthorSlice, createControllerSlice, SNAPSHOT_KEY } from '@/shared/stores/auth/use-snapshot/use-snapshot.const';
import { TypeSnapshotAction, TypeSnapshotState } from '@/shared/stores/auth/use-snapshot/use-snapshot.type';

/* snapshot */
export const snapshotStorage = onCookieStorage<TypeSnapshotState>();
export const useSnapshotStore = create<TypeSnapshotState & TypeSnapshotAction>()(
  persist(
    (...a) => ({
      ...createControllerSlice(...a),
      ...createAuthorSlice(...a),
    }),
    {
      name: SNAPSHOT_KEY,
      storage: snapshotStorage,
      version: 1,
      partialize: ({ controllerCondition, authorAccount }) => ({
        controllerCondition,
        authorAccount,
      }),
      onRehydrateStorage: (state) => {
        return (rehydratedState, error) => {
          if (error) console.error('[Persist] Hydration 에러:', error);
          else console.log('[Persist] 스토어 Hydration 완료.');
        };
      },
    },
  ),
);
