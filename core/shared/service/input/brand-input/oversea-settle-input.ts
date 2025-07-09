import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { OverseaPaymentProvider } from '@/core/shared/service/enum/oversea-payment-provider';

export type OverseaSettleInput = {
  /** 정산 서비스 */
  paymentProvider: OverseaPaymentProvider;
  /** 정산 서비스 계정 */
  paymentProviderAccount: string;
  /** TIN - Taxpayer Identification Numbers */
  tin: string;
  /** 신분증 사본 ID */
  idCardImageId: UUIDAsString;
  /** 세금 관련 증빙 서류 */
  limitTaxDocumentImageId?: UUIDAsString;
};
