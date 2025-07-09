import { Nullable } from '@/core/utils/types/selector/flexible';
import { BrandSettleTypes } from '@/core/shared/service/enum/brand-settle-types';
import { CountryCode } from '@/core/shared/service/enum/country-code';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { DomesticExemptBusinessSettleInput } from '@/core/shared/service/input/brand-input/domestic-exempt-business-settle-input';
import { DomesticNonProfitBusinessSettleInput } from '@/core/shared/service/input/brand-input/domestic-non-profit-business-settle-input';
import { DomesticNormalBusinessSettleInput } from '@/core/shared/service/input/brand-input/domestic-normal-business-settle-input';
import { DomesticPersonalSettleInput } from '@/core/shared/service/input/brand-input/domestic-personal-settle-input';
import { DomesticSimpleNoInvoiceBusinessSettleInput } from '@/core/shared/service/input/brand-input/domestic-simple-no-invoice-business-settle-input';
import { DomesticSimpleWithInvoiceBusinessSettleInput } from '@/core/shared/service/input/brand-input/domestic-simple-with-invoice-business-settle-input';
import { DomesticSpecialTaxBusinessSettleInput } from '@/core/shared/service/input/brand-input/domestic-special-tax-business-settle-input';
import { DomesticUniqueBusinessSettleInput } from '@/core/shared/service/input/brand-input/domestic-unique-business-settle-input';
import { OverseaSettleInput } from '@/core/shared/service/input/brand-input/oversea-settle-input';

/** 브랜드 생성을 위한 정보 */
export type CreateBrandSettleInput = {
  /** 등록 하려는 정산 정보 구분 */
  settleType: BrandSettleTypes;
  /** 정산용 이메일 */
  settleEmail: string;
  /** 국가 */
  country: CountryCode;
  /** 가입 언어 */
  signLanguage: LanguageCode;
  /** 이름 - 개인이름, 사업장이름 */
  name: string;
  /** 국내 개인 정산 정보 데이터 - settleType이 DOMESTIC_PERSONAL 일 경우 필수 */
  domesticPersonal?: DomesticPersonalSettleInput;
  /** 국내 일반 과세자 정산 정보 데이터 - settleType이 DOMESTIC_NORMAL_BUSINESS 일 경우 필수 */
  domesticNormalBusiness?: DomesticNormalBusinessSettleInput;
  /** 국내 일반 과세자 정산 정보 데이터 - settleType이 DOMESTIC_SPECIAL_TAX_BUSINESS 일  경우 필수 */
  domesticSpecialTaxBusiness?: DomesticSpecialTaxBusinessSettleInput;
  /** 국내 간이 과세자(세금 계산서 발행 가능) 정산 정보 데이터 - settleType이 DOMESTIC_SIMPLE_WITH_INVOICE_BUSINESS 일 경우 필수 */
  domesticSimpleWithInvoiceBusiness?: DomesticSimpleWithInvoiceBusinessSettleInput;
  /** 국내 간이 과세자(세금 계산서 발행 불가능) 정산 정보 데이터 - settleType이 DOMESTIC_SIMPLE_NO_INVOICE_BUSINESS 일 경우 필수 */
  domesticSimpleNoInvoiceBusiness?: DomesticSimpleNoInvoiceBusinessSettleInput;
  /** 국내 간이 과세자(세금 계산서 발행 불가능) 정산 정보 데이터 - settleType이 DOMESTIC_EXEMPT_BUSINESS 일 경우 필수 */
  domesticExemptBusiness?: DomesticExemptBusinessSettleInput;
  /** 국내 간이 과세자(세금 계산서 발행 불가능) 정산 정보 데이터 - settleType이 DOMESTIC_NON_PROFIT_BUSINESS 일 경우 필수 */
  domesticNonProfitBusiness?: DomesticNonProfitBusinessSettleInput;
  /** 국내 간이 과세자(세금 계산서 발행 불가능) 정산 정보 데이터 - settleType이 DOMESTIC_UNIQUE_BUSINESS 일 경우 필수 */
  domesticUniqueBusiness?: DomesticUniqueBusinessSettleInput;
  /** 해외 브랜드 정산 정보 데이터 - settleType이 ORVERSEA 일 경우 필수 */
  overseaSettle?: OverseaSettleInput;
};
