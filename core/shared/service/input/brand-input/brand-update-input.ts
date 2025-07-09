import { BigDecimalAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CreateBrandInput } from '@/core/shared/service/input/brand-input/create-brand-input';

/** 브랜드 기본 정보 업데이트를 위한 정보 */
export type BrandUpdateInput = {
  /** 브랜드 기본 정보 */
  baseBrand: CreateBrandInput;
  /** 업데이트할 브랜드 플랜의 ID */
  brandPlanId: UUIDAsString;
  /** 브랜드 플랜의 수수료율 */
  commissionRate: Nullable<BigDecimalAsNumber>;
};
