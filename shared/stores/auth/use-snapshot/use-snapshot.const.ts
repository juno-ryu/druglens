import { StateCreator } from 'zustand';
import { EnumAccountStatus } from '@/shared/consts/common/auth';
import { fetchAuthorAccount, revalidateAuthorAccount } from '@/shared/stores/auth/use-snapshot/use-snapshot.actions';
import { TypeAuthorAction, TypeAuthorState, TypeControllerAction, TypeControllerState } from '@/shared/stores/auth/use-snapshot/use-snapshot.type';

/* snapshot */
export const SNAPSHOT_KEY = 'admin-snapshot';

/* controller */
export const INITIAL_CONTROLLER_STATE = {
  controllerCondition: {
    isStored: false,
  },
};
export const createControllerSlice: StateCreator<TypeControllerState & TypeControllerAction> = (set, get) => ({
  ...INITIAL_CONTROLLER_STATE,
  controllerActions: {
    setControllerCondition: (controllerCondition) => {
      set({ controllerCondition });
    },
  },
});

/* author */
export const INITIAL_AUTHOR_STATE: TypeAuthorState = {
  authorAccount: {
    isSignOut: true,
    isSignIn: false,
    isPreSignIn: false,
    currentName: null,
    currentEmail: null,
    currentStatus: EnumAccountStatus.SIGN_OUT,
  },
};
export const createAuthorSlice: StateCreator<TypeAuthorState & TypeAuthorAction> = (set, get) => ({
  ...INITIAL_AUTHOR_STATE,
  authorActions: {
    updateAuthorAccount: async () => {
      try {
        await revalidateAuthorAccount();
        const authorAccount = await fetchAuthorAccount();
        set({ authorAccount });
      } catch (error) {
        set({ authorAccount: INITIAL_AUTHOR_STATE.authorAccount });
      }
    },
    setAuthorAccount: (authorAccount) => {
      set({ authorAccount });
    },
    resetAuthorAccount: () => {
      set({ authorAccount: INITIAL_AUTHOR_STATE.authorAccount });
    },
  },
});
