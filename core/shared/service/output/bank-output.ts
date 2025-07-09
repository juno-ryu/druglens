import { LongAsNumber } from '@/core/utils/types/overridable/primitive';

/** 은행 정보를 반환 */
export type BankOutput = {
  /** ID */
  id: LongAsNumber;
  /** 은행 이름 */
  name: string;
};
