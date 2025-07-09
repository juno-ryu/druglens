import { ReactElement } from 'react';
import { DialogProps } from '@/core/design-systems/components/dialog';

export type UpdateStateFunction<T> = (updater: T | ((prevState: T) => T)) => void;
export type TypeDialogStructure = Partial<DialogProps> & {
  key: `dialog-${string}`;
  children: ReactElement | JSX.Element;
};

export type TypeOverlayStore = TypeOverlayState & TypeOverlayAction;
export type TypeOverlayState = {
  dialogs: TypeDialogStructure[];
};
export type TypeOverlayAction = {
  dialogActions: {
    initialize: () => void;
    setDialogs: UpdateStateFunction<TypeOverlayState['dialogs']>;
  };
};
