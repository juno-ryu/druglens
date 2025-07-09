import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { DomesticBankAccountOutput } from '@/core/shared/service/output/brand-output/domestic-bank-account-output';
import { ImageOutput } from '@/core/shared/service/output/image-output';

/** 국내 개인 브랜드의 정산 정보를 반환 */
export type BrandSettleDomesticPersonalOutput = {
  /** 주민등록번호 */
  identificationNumber: string;
  /** 신분증 사진 */
  idCard: Nullable<ImageOutput>;
  /** 국내 계좌 정보 */
  bankAccount: DomesticBankAccountOutput;
};
