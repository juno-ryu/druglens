import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 에셋 정보를 반환 */
export type AssetSimpleOutput = {
  /** 에셋 고유 ID */
  id: UUIDAsString;

  /** 판매자 조직 Id */
  organizationId: UUIDAsString;

  /** 에셋명 */
  name: string;
};
