import { StateCreator } from 'zustand';
import { AlignableSectionKey, TypeAlignSectionControllerSlice } from '@/shared/stores/product/use-align-section-controller/use-align-section-controller.type';

/** initialSectionRefs */
export const initialSectionRefs: Record<AlignableSectionKey, React.RefObject<HTMLDivElement>[]> = {
  title: [],
  contentHead: [],
  contentBody: [],
  copyright: [],
};

export const createAlignSectionControllerSlice: StateCreator<TypeAlignSectionControllerSlice> = (set, get) => ({
  sectionRefs: initialSectionRefs,
  alignSectionActions: {
    registerRef: (section, ref) => {
      set((state) => {
        const updated = [...(state.sectionRefs[section] || [])];
        updated.push(ref);
        return {
          sectionRefs: {
            ...state.sectionRefs,
            [section]: updated,
          },
        };
      });
    },
    applyMaxHeight: () => {
      const { sectionRefs } = get();
      Object.entries(sectionRefs).forEach(([key, refs]) => {
        const heights = refs.map((ref) => ref.current?.offsetHeight || 0);
        const maxHeight = Math.max(...heights);
        refs.forEach((ref) => {
          if (ref.current) {
            ref.current.style.minHeight = `${maxHeight}px`;
          }
        });
      });
    },
  },
});
