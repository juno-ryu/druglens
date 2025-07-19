import { OverridableComponent } from '@/core/utils/types/overridable/component';

type BrandOutput = any;
type ProductOutput = any;
type Scalars = any;

export type ProductCardBrandPropsType = Pick<ProductOutput, 'id'> & {
  brandInfo: Omit<BrandOutput, 'i18ns' | 'category' | 'isAdultOnly' | 'productCount'> & { productCount?: Scalars['Int']['output']; i18ns?: ProductOutput['brandInfo']['i18ns'] };
  onClickBrand: () => void;
  onClickScrap: () => void;
};

export type ProductCardProps<C extends React.ElementType> = OverridableComponent<
  C,
  {
    product: any;
    productCardImageSizes?: string;
    render?: {
      brand?: (brand: any) => React.ReactNode;
      extensions?: (extensions: any) => React.ReactNode;
      tags?: (tag: any[]) => React.ReactNode;
    };
    onClickProductCard?: (actionName: any, title: string, productId: number) => void;
  }
>;

export interface ProductCardTagsProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[];
  tagIds?: number[];
  isDark?: boolean;
  isDraggable?: boolean;
}

export interface ProductCardTimerProps extends React.HTMLAttributes<HTMLDivElement> {
  time: string;
}

export interface ProductCardScrapProps extends React.HTMLAttributes<HTMLButtonElement> {
  productId: number;
  onClickScrap?: () => void;
}

/**
 * cardCount: 최대로 표시할 확장자 개수입니다.
 * showRemainderUnit: 나머지 개수 단위 표시 여부입니다.
 */
export interface ProductCardExtensionsProps {
  productId: ProductOutput['id'];
  extensions: ProductOutput['extensions'];
  cardCount?: number;
  showRemainderUnit?: boolean;
}

export interface ProductCardBrandProps {
  brand: BrandOutput;
  onClickScrap: any;
}
