import { useShallow } from 'zustand/react/shallow';
import { useMultiFormControllerStore } from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.store';

export const useOriginFormState = () =>
  useMultiFormControllerStore(
    useShallow((state) => ({
      originFormState: state.originFormState,
    })),
  );

export const useOriginFormActions = () => useMultiFormControllerStore((state) => state.originFormActions);

export const useCurrentFormState = () =>
  useMultiFormControllerStore(
    useShallow((state) => ({
      currentFormState: state.currentFormState,
      triggerSyncState: state.triggerSyncState,
      triggerSyncEditorState: state.triggerSyncEditorState,
    })),
  );

export const useCurrentFormActions = () =>
  useMultiFormControllerStore((state) => ({
    currentFormActions: state.currentFormActions,
    triggerSyncActions: state.triggerSyncActions,
  }));

export const useStatusState = () =>
  useMultiFormControllerStore(
    useShallow((state) => ({
      disabledStatus: state.disabledStatus,
      loadingStatus: state.loadingStatus,
    })),
  );

export const useStatusActions = () =>
  useMultiFormControllerStore((state) => ({
    statusActions: state.statusActions,
  }));
