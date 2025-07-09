import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 상품 태그 정보를 반환 */
export type ProductTagOutput = {
  /** ID */
  id: UUIDAsString;
  /** 태그 단어 */
  word: string;
};
