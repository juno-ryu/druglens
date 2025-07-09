import { Nullable } from '@/core/utils/types/selector/flexible';
import { EnumAccountStatus } from '@/shared/consts/common/auth';

/* snapshot */
export type TypeSnapshotState = TypeControllerState & TypeAuthorState;
export type TypeSnapshotAction = TypeControllerAction & TypeAuthorAction;

/* controller */
export type TypeControllerState = {
  controllerCondition: {
    isStored: boolean;
  };
};
export type TypeControllerAction = {
  controllerActions: {
    setControllerCondition: (value: TypeControllerState['controllerCondition']) => void;
  };
};

/* author */
export type TypeAuthorState = {
  authorAccount: {
    isSignOut: boolean;
    isSignIn: boolean;
    isPreSignIn: boolean;
    currentName: Nullable<string>;
    currentEmail: Nullable<string>;
    currentStatus: EnumAccountStatus;
  };
};
export type TypeAuthorAction = {
  authorActions: {
    updateAuthorAccount: () => Promise<void>;
    setAuthorAccount: (value: TypeAuthorState['authorAccount']) => void;
    resetAuthorAccount: () => void;
  };
};
