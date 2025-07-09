import { DomesticBankAccountOutput } from '@/core/shared/service/output/brand-output/domestic-bank-account-output';
import { ImageOutput } from '@/core/shared/service/output/image-output';

/** 국내 간이 과세자(세금 계산서 발행 가능) 브랜드의 정산 정보를 반환 */
export type BrandSettleDomesticSimpleWithInvoiceBusinessOutput = {
  /** 대표 이름 */
  ceoName: string;

  /** 사업자 등록 번호 */
  companyRegisterNumber: string;

  /** 사업자 등록증 이미지 */
  companyRegisterImage: ImageOutput;

  /** 국내 계좌 정보 */
  bankAccount: DomesticBankAccountOutput;
};
