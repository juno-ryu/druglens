import { ISODateString } from 'next-auth';
import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 정산 다운로드 기록 */
export type SettlementExportHistoryOutput = {
  /** 연도 */
  year: IntAsNumber;

  /** 월 */
  month: IntAsNumber;

  /** 다운 받은 대상 (SETTLE: 정산, ORDER: 주문) */
  type: 'SETTLE' | 'ORDER';

  /** 다운로드 일시 */
  createdAt: ISODateString;

  /** 다운로드 받은 사용자 */
  user: Nullable<UserOutput>;
};
