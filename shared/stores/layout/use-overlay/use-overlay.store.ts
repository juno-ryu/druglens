import { create } from 'zustand';
import { createOverlaySlice } from '@/shared/stores/layout/use-overlay/use-overlay.const';
import { TypeOverlayStore } from '@/shared/stores/layout/use-overlay/use-overlay.type';

export const useOverlayStore = create<TypeOverlayStore>()((...a) => ({
  ...createOverlaySlice(...a),
}));
