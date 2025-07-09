import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { BrandApprovalStatus } from '@/core/shared/service/enum/brand-approval-status';
import { PlanOutput } from '@/core/shared/service/output/plan-output';

export type BrandPlanOutput = {
  /** UUID */
  id: UUIDAsString;
  /** 파트너십 정보 승인 상태 */
  status: BrandApprovalStatus;
  /** 실제 적용 되는 수수료율, plan의 수수료율이 있더라도 이 값이 실제 적용 되는 값 */
  commissionRate: DoubleAsNumber;
  /** 파트너십 정보 */
  plan: PlanOutput;
};
