import { BankOutput } from '@/core/shared/service/output/bank-output';
import { ImageOutput } from '@/core/shared/service/output/image-output';

/** 국내 브랜드 정산 정보 중 은행 계좌에 대한 정보를 반환 */
export type DomesticBankAccountOutput = {
  /** 은행 */
  bank: BankOutput;
  /** 계좌번호 */
  accountNumber: string;
  /** 예금주 이름 */
  accountHolderName: string;
  /** 통장 사본 이미지 */
  bankBookImage: ImageOutput;
};
