import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 상품 분류 정보를 반환 */
export type ProductCategoryOutput = {
  /** ID */
  id: UUIDAsString;
  /** 노드 이름 */
  name: string;
  /** 대표 이미지 여부 */
  isMain: boolean;
};
