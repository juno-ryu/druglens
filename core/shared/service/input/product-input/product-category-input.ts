import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 상품 카테고리 */
export type ProductCategoryInput = {
  /** ID */
  id: UUIDAsString;
  /** 메인 분류 여부 */
  isMain: boolean;
};
