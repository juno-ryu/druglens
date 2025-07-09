import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 조회 된 상품의 태그 목록 */
export type AssetProductTagListOutput = {
  id: UUIDAsString;
  word: string;
  count: IntAsNumber;
};
