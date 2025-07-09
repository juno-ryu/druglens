import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { BankAccountInput } from '@/core/shared/service/input/brand-input/bank-account-input';

export type DomesticPersonalSettleInput = {
  /** 주민등록번호 */
  identificationNumber: string;
  /** 주민등록증 사본 파일 ID */
  idCardImageId: UUIDAsString;
  /** 정산 계좌 정보 */
  bankAccount: BankAccountInput;
};
