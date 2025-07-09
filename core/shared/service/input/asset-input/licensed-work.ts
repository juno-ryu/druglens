import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

/** 상품 사용권 정보 */
export type LicensedWork = {
  /** 파일 ID */
  id: Nullable<UUIDAsString>;
  /** 창작자명(창작물명) */
  title: string;
};
