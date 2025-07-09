import { ISODateString } from 'next-auth';
import { BooleanAsString, DoubleAsNumber, IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';

/** 정산 정보 */
export type SettlementOutput = {
  /** 브랜드 고유 ID */
  brandId: UUIDAsString;

  /** 연도 */
  year: IntAsNumber;

  /** 월 */
  month: IntAsNumber;

  /** 정산 통화 */
  currency: CurrencyCode;

  /** 판매 수량 */
  saleCount: DoubleAsNumber;

  /** 판매 금액 */
  saleAmount: DoubleAsNumber;

  /** 프로모션 부담 금액 */
  promotionBurdenAmount: DoubleAsNumber;

  /** 쿠폰 부담 금액 */
  couponBurdenAmount: DoubleAsNumber;

  /** 부가세 */
  vatAmount: DoubleAsNumber;

  /** 파트너십 타입 */
  planType: IntAsNumber;

  /** 독점 여부 */
  isExclusive: boolean;

  /** 정산 대상 금액 */
  settlementAmount: DoubleAsNumber;

  /** 에이콘 수수료율 */
  aconCommission: DoubleAsNumber;

  /** 에이콘 수수료 */
  aconCommissionAmount: DoubleAsNumber;

  /** PG 수수료율 */
  pgCommission: DoubleAsNumber;

  /** PG 수수료 */
  pgCommissionAmount: DoubleAsNumber;

  /** 국세율 */
  nationalTax: DoubleAsNumber;

  /** 국세 */
  nationalTaxAmount: DoubleAsNumber;

  /** 지방세율 */
  localTax: DoubleAsNumber;

  /** 지방세 */
  localTaxAmount: DoubleAsNumber;

  /** 국세율 + 지방세율 */
  tax: DoubleAsNumber;

  /** 국세 + 지방세 */
  taxAmount: DoubleAsNumber;

  /** 적용 환율 */
  exchangeRate: Nullable<DoubleAsNumber>;

  /** 추가감 금액 */
  correctionAmount: DoubleAsNumber;

  /** 정산 금액 */
  resultAmount: DoubleAsNumber;

  /** 정산 대상 시작일 */
  settleSince: ISODateString;

  /** 정산 대상 종료일 */
  settleUntil: ISODateString;

  /** 정산 예정 구분(for front) */
  isExpected?: boolean;
};
