'use client';

import { cloneDeep } from 'lodash';
import { useOverlayActions, useOverlayState } from '@/shared/stores/layout/use-overlay/use-overlay.hook';
import { TypeDialogStructure } from '@/shared/stores/layout/use-overlay/use-overlay.type';

const useDialog = () => {
  const { dialogs } = useOverlayState();
  const { setDialogs } = useOverlayActions();

  const onOpen = (structure: TypeDialogStructure) => {
    setDialogs((prevState) => {
      const copyDialogs = cloneDeep(prevState);
      const uniqueDialogs = copyDialogs.filter((dialog) => dialog.key !== structure.key);
      return [...uniqueDialogs, structure];
    });
  };

  const onClose = (key: TypeDialogStructure['key']) => {
    setDialogs((prevState) => prevState.filter((dialog) => dialog.key !== key));
  };

  return {
    dialogs,
    onOpen,
    onClose,
  };
};

export default useDialog;
