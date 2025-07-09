import { ProductCategoryOutput } from '@/core/shared/service/output/product-category-output';

export interface ProductCategoryNode extends ProductCategoryOutput {
  children?: ProductCategoryNode[];
}
