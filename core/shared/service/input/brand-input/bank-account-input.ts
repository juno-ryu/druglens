import { IntAsNumber, IntAsString, UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 국내 정산 계좌 정보 */
export type BankAccountInput = {
  /** 은행 목록에서 확인 한 은행 ID */
  bankId: IntAsNumber;
  /** 계좌번호 */
  accountNumber: string;
  /** 예금주 */
  accountHolderName: string;
  /** 통장 사본 파일 ID */
  bankBookImageId: UUIDAsString;
};
