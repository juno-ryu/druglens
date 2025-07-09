import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { ProductRevisionOutput } from '@/core/shared/service/output/product-revision-output';

/** 상품 정보를 반환 */
export type ProductOutput = {
  id: UUIDAsString;
  revision: ProductRevisionOutput;
};
