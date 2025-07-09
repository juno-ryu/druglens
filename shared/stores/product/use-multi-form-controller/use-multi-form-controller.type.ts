import { Nullable } from '@/core/utils/types/selector/flexible';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

export type TypeMultiFormControllerStore = TypeOriginFormSlice & TypeCurrentFormSlice & TypeStatusSlice;

export type TypeOriginFormSlice = TypeOriginFormState & TypeOriginFormAction;
export type TypeOriginFormState = {
  originFormState: ProductFormValues;
};

export type TypeOriginFormAction = {
  originFormActions: {
    updateOriginForm: (value: TypeOriginFormState['originFormState']) => void;
  };
};
export type TypeCurrentFormSlice = TypeCurrentFormState & TypeCurrentFormAction;
export type TypeCurrentFormState = {
  currentFormState: Pick<ProductFormValues, 'title' | 'contentHead' | 'contentBody' | 'copyright'>;
  triggerSyncState: Nullable<number>;
  triggerSyncEditorState: Nullable<number>;
};

export type TypeCurrentFormAction = {
  currentFormActions: {
    updateCurrentForm: (value: TypeCurrentFormState['currentFormState']) => void;
  };
  triggerSyncActions: {
    syncronize: () => Promise<TypeCurrentFormState['currentFormState']>;
    syncronizeEditor: () => void;
  };
};

export type TypeStatusSlice = TypeStatusState & TypeStatusAction;
export type TypeStatusState = {
  disabledStatus: boolean;
  loadingStatus: boolean;
};
export type TypeStatusAction = {
  statusActions: {
    setDisabledStatus: (value: TypeStatusState['disabledStatus']) => void;
    setLoadingStatus: (value: TypeStatusState['loadingStatus']) => void;
  };
};
