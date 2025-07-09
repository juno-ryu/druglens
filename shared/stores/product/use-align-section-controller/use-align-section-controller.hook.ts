import { useShallow } from 'zustand/react/shallow';
import { useAlignSectionControllerStore } from '@/shared/stores/product/use-align-section-controller/use-align-section-controller.store';

export const useAlignSectionRefs = () =>
  useAlignSectionControllerStore(
    useShallow((state) => ({
      sectionRefs: state.sectionRefs,
    })),
  );

export const useAlignSectionActions = () =>
  useAlignSectionControllerStore((state) => ({
    alignSectionActions: state.alignSectionActions,
  }));
