import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { OverseaPaymentProvider } from '@/core/shared/service/enum/oversea-payment-provider';
import { ImageOutput } from '@/core/shared/service/output/image-output';

/** 해외 브랜드의 정산 정보를 반환 */
export type BrandSettleOverseaOutput = {
  /** ID */
  id: UUIDAsString;

  /** 사용 PG */
  paymentProvider: OverseaPaymentProvider;

  /** 사용 PG 계정 */
  paymentProviderAccount: string;

  /** TIN(Taxpayer Identification Numbers) */
  tin: string;

  /** 신분증 사본 */
  idCardImage: ImageOutput;

  /** 세금 관련 증빙 서류 */
  limitTaxDocumentImage: Nullable<ImageOutput>;
};
