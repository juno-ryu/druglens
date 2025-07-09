import { create } from 'zustand';
import { createDeviceSlice, createInterfaceSlice } from '@/shared/stores/layout/use-viewport/use-viewport.const';
import { TypeUseViewportStore } from '@/shared/stores/layout/use-viewport/use-viewport.type';

/* viewport */
export const useViewportStore = create<TypeUseViewportStore>()((...a) => ({
  ...createInterfaceSlice(...a),
  ...createDeviceSlice(...a),
}));
