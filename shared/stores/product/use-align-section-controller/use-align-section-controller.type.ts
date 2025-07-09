import { ProductFormValues } from '@/shared/business-components/product/product.type';

export type AlignableSectionKey = keyof Pick<ProductFormValues, 'title' | 'contentHead' | 'contentBody' | 'copyright'>;

export type TypeAlignSectionControllerStore = TypeAlignSectionControllerSlice;

export type TypeAlignSectionControllerSlice = TypeAlignSectionControllerState & TypeAlignSectionControllerAction;
export type TypeAlignSectionControllerState = {
  sectionRefs: {
    [key in AlignableSectionKey]: React.RefObject<HTMLDivElement>[];
  };
};
export type TypeAlignSectionControllerAction = {
  alignSectionActions: {
    registerRef: (section: AlignableSectionKey, ref: React.RefObject<HTMLDivElement>) => void;
    applyMaxHeight: () => void;
  };
};
