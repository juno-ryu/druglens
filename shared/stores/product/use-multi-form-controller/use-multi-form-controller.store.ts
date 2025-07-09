import { create } from 'zustand';
import { createCurrentFormSlice, createOriginFormSlice, createStatusSlice } from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.const';
import { TypeMultiFormControllerStore } from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.type';

export const useMultiFormControllerStore = create<TypeMultiFormControllerStore>()((...a) => ({
  ...createOriginFormSlice(...a),
  ...createCurrentFormSlice(...a),
  ...createStatusSlice(...a),
}));
