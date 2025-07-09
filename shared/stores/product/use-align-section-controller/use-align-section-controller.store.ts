import { create } from 'zustand';
import { createAlignSectionControllerSlice } from '@/shared/stores/product/use-align-section-controller/use-align-section-controller.const';
import { TypeAlignSectionControllerStore } from '@/shared/stores/product/use-align-section-controller/use-align-section-controller.type';

export const useAlignSectionControllerStore = create<TypeAlignSectionControllerStore>()((...a) => ({
  ...createAlignSectionControllerSlice(...a),
}));
