import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { BankAccountInput } from '@/core/shared/service/input/brand-input/bank-account-input';

/** 국내 비영리 사업자 정산 정보 */
export type DomesticNonProfitBusinessSettleInput = {
  /** 국세청 API에서 받은 사업자 코드 */
  domesticBusinessTaxTypeCode: string;
  /** 대표자 이름 */
  ceoName: string;
  /** 사업자 번호 */
  companyRegisterNumber: string;
  /** 사업자 등록증 사본 */
  companyRegisterImageId: UUIDAsString;
  /** 정산 계좌 정보 */
  bankAccount: BankAccountInput;
};
