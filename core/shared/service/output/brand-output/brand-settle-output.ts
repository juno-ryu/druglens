import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { BrandSettleApprovalStatus } from '@/core/shared/service/enum/brand-settle-approval-status';
import { BrandSettleTypes } from '@/core/shared/service/enum/brand-settle-types';
import { CountryCode } from '@/core/shared/service/enum/country-code';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { BrandSettleDomesticExemptBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-exempt-business-output';
import { BrandSettleDomesticNormalBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-nomal-business-output';
import { BrandSettleDomesticNonProfitBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-non-profit-business-output';
import { BrandSettleDomesticPersonalOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-personal-output';
import { BrandSettleDomesticSimpleNoInvoiceBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-simple-no-invoice-business-output';
import { BrandSettleDomesticSimpleWithInvoiceBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-simple-with-invoice-business-output';
import { BrandSettleDomesticSpecialTaxBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-special-tax-business-output';
import { BrandSettleDomesticUniqueBusinessOutput } from '@/core/shared/service/output/brand-output/brand-settle-domestic-unique-business-output';
import { BrandSettleOverseaOutput } from '@/core/shared/service/output/brand-output/brand-settle-oversea-output';

export type BrandSettleOutput = {
  /** UUID */
  id: UUIDAsString;
  /** 정산용 이메일 */
  settleEmail: string;
  /** 브랜드 정산 정보 승인 상태 */
  status: BrandSettleApprovalStatus;
  /** 이름 */
  name: string;
  /** 소속 국가 */
  country: CountryCode;
  /** 가입 언어 */
  signLanguage: LanguageCode;
  /** 등록 하려는 정산 정보 구분 */
  settleType: BrandSettleTypes;
  /** 브랜드 정산 정보 구분에 맞는 Output */
  settleTypeData:
    | BrandSettleDomesticPersonalOutput // DOMESTIC_PERSONAL
    | BrandSettleDomesticNormalBusinessOutput // DOMESTIC_NORMAL_BUSINESS
    | BrandSettleDomesticSpecialTaxBusinessOutput // DOMESTIC_SPECIAL_TAX_BUSINESS
    | BrandSettleDomesticSimpleWithInvoiceBusinessOutput // OMESTIC_SIMPLE_WITH_INVOICE_BUSINESS
    | BrandSettleDomesticSimpleNoInvoiceBusinessOutput // DOMESTIC_SIMPLE_WITH_NO_INVOICE_BUSINESS
    | BrandSettleDomesticExemptBusinessOutput //  DOMESTIC_EXEMPT_BUSINESS
    | BrandSettleDomesticNonProfitBusinessOutput // DOMESTIC_NON_PROFIT_BUSINESS
    | BrandSettleDomesticUniqueBusinessOutput //  DOMESTIC_UNIQUE_BUSINESS
    | BrandSettleOverseaOutput; //  OVERSEA
};
