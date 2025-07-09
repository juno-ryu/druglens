import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { CreateBrandSettleInput } from '@/core/shared/service/input/brand-input/create-brand-settle-input';

/** 브랜드 정산 정보 업데이트를 위한 정보 */
export type BrandUpdateSettleInput = {
  /** 브랜드 정산 기본 정보 */
  baseSettle: CreateBrandSettleInput;
  /** 업데이트할 브랜드 정산 정보의 ID */
  brandSettleId: UUIDAsString;
};
