import { BrandSettleTypes } from '@/core/shared/service/enum/brand-settle-types';
import { BrandSettleDomesticExemptBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-exempt-business-output';
import { BrandSettleDomesticNormalBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-nomal-business-output';
import { BrandSettleDomesticNonProfitBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-non-profit-business-output';
import { BrandSettleDomesticPersonalOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-personal-output';
import { BrandSettleDomesticSimpleNoInvoiceBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-simple-no-invoice-business-output';
import { BrandSettleDomesticSimpleWithInvoiceBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-simple-with-invoice-business-output';
import { BrandSettleDomesticSpecialTaxBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-special-tax-business-output';
import { BrandSettleDomesticUniqueBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-unique-business-output';
import { BrandSettleOutput } from '@/core/shared/service/output/brand-output/brand-settle-output';
import { BrandSettleOverseaOutput } from '@/core/shared/service/output/brand-output/brand-settle-oversea-output';

/**
 * @description 정산 정보에 대한 타입 Narrowing 유틸리티
 * 이 유틸리티는 정산 정보의 `settleType`에 따라 해당하는 정산 정보 타입을 Narrowing 함.
 * @example
 * ```ts
 * import { isSettleType } from '@/core/utils/types/narrowing/settle';
 * import { BrandSettleTypes } from '@/core/shared/service/enum/brand-settle-types';
 * import { BrandSettleOutput } from '@/core/shared/service/output/brand-output/brand-settle-output';
 *
 * const settle: BrandSettleOutput = getSettleData(); // 정산 데이터 가져오기
 *
 * if (isSettleType(settle, BrandSettleTypes.DOMESTIC_PERSONAL)) {
 *   console.log(settle.settleTypeData.bankAccount.accountHolderName);
 * }
 * if (isSettleType(settle, BrandSettleTypes.DOMESTIC_NORMAL_BUSINESS)) {
 *   console.log(settle.settleTypeData.ceoName);
 * }
 * ```
 */

type HasSttleTypeDataFields = {
  settleType: BrandSettleTypes;
  settleTypeData:
    | BrandSettleDomesticPersonalOutput // DOMESTIC_PERSONAL
    | BrandSettleDomesticNormalBusinessOutput // DOMESTIC_NORMAL_BUSINESS
    | BrandSettleDomesticSpecialTaxBusinessOutput // DOMESTIC_SPECIAL_TAX_BUSINESS
    | BrandSettleDomesticSimpleWithInvoiceBusinessOutput // OMESTIC_SIMPLE_WITH_INVOICE_BUSINESS
    | BrandSettleDomesticSimpleNoInvoiceBusinessOutput // DOMESTIC_SIMPLE_WITH_NO_INVOICE_BUSINESS
    | BrandSettleDomesticExemptBusinessOutput //  DOMESTIC_EXEMPT_BUSINESS
    | BrandSettleDomesticNonProfitBusinessOutput // DOMESTIC_NON_PROFIT_BUSINESS
    | BrandSettleDomesticUniqueBusinessOutput //  DOMESTIC_UNIQUE_BUSINESS
    | BrandSettleOverseaOutput; //  OVERSEA;
};

//  정산 정보 구분에 따른 출력 타입 매핑
type SettleTypeToOutputMap = {
  /** @description 국내 개인 */
  [BrandSettleTypes.DOMESTIC_PERSONAL]: BrandSettleDomesticPersonalOutput;
  /** @description 국내 일반 과세자 */
  [BrandSettleTypes.DOMESTIC_NORMAL_BUSINESS]: BrandSettleDomesticNormalBusinessOutput;
  /** @description 국내 과세 특례 사업자*/
  [BrandSettleTypes.DOMESTIC_SPECIAL_TAX_BUSINESS]: BrandSettleDomesticSpecialTaxBusinessOutput;
  /** @description 국내 간이 과세자(세금 계산서 발행 가능) */
  [BrandSettleTypes.DOMESTIC_SIMPLE_WITH_INVOICE_BUSINESS]: BrandSettleDomesticSimpleWithInvoiceBusinessOutput;
  /** @description 국내 간이 과세자(세금 계산서 발행 불가능) */
  [BrandSettleTypes.DOMESTIC_SIMPLE_NO_INVOICE_BUSINESS]: BrandSettleDomesticSimpleNoInvoiceBusinessOutput;
  /** @description 국내 면세 사업자 */
  [BrandSettleTypes.DOMESTIC_EXEMPT_BUSINESS]: BrandSettleDomesticExemptBusinessOutput;
  /** @description 국내 비영리 사업자 */
  [BrandSettleTypes.DOMESTIC_NON_PROFIT_BUSINESS]: BrandSettleDomesticNonProfitBusinessOutput;
  /** @description 국내 고유 사업자 */
  [BrandSettleTypes.DOMESTIC_UNIQUE_BUSINESS]: BrandSettleDomesticUniqueBusinessOutput;
  /** @description 해외 */
  [BrandSettleTypes.OVERSEA]: BrandSettleOverseaOutput;
};

export function isSettleType<T extends BrandSettleTypes, U extends HasSttleTypeDataFields>(item: U, type: T): item is U & { settleTypeData: SettleTypeToOutputMap[T] } {
  return item.settleType === type;
}
