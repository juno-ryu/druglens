import { DoubleAsNumber, IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';

export type PlanOutput = {
  /** UUID */
  id: UUIDAsString;
  /** 파트너십의 이름 */
  name: string;
  /** 파트너십의 타입 */
  type: IntAsNumber;
  /** 파트너십의 독점 여부 */
  isExclusive: boolean;
  /** 파트너십의 수수료율 */
  commissionRate: DoubleAsNumber;
};
