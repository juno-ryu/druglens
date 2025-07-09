import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { RegionCode } from '@/core/shared/service/enum/region-code';

/** 어드민에서 FAQ 목록을 필터링 할 조건 */
export type FaqFilterInput = {
  /** 특정 카테고리에 해당하는 FAQ를 조회 하려고 할 때 전달 */
  categoryNodeId: Nullable<UUIDAsString>;
  /** 특정 몰에 해당하는 FAQ를 조회를 하려고 할 때 전달 */
  region: Nullable<RegionCode>;
  /** 특정 문구가 포함된 FAQ를 조회 하려고 할 때 전달 */
  text: Nullable<string>;
};
