import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { BrandApprovalStatus } from '@/core/shared/service/enum/brand-approval-status';

/** 브랜드 상태 정보 반환 */
export type BrandStatusOutput = {
  /** 브랜드 ID */
  id: UUIDAsString;
  /** 브랜드 이름 */
  name: string;
  /** 브랜드 승인 상태 */
  status: BrandApprovalStatus;
};
