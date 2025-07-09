// # CashChargeOptionOutput

import { ISODateString } from 'next-auth';
import { BigDecimalAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CashChargeOrderStatus } from '@/core/shared/service/enum/cash-charge-order-status';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { RegionCode } from '@/core/shared/service/enum/region-code';

/** 캐시 충전 주문 정보 응답 데이터 */
export type CashChargeOrderOutput = {
  /** 주문 ID */
  id: UUIDAsString;
  /** 주문 번호 */
  orderNo: string;
  /** 사용자 ID */
  userId: UUIDAsString;
  /** 캐시 충전 옵션 ID */
  cashChargeOptionId: UUIDAsString;
  /** 충전 금액 */
  chargeAmount: BigDecimalAsNumber;
  /** 기본 보너스 비율 */
  baseBonusRate: BigDecimalAsNumber;
  /** 보너스 금액 */
  basicBonusAmount: BigDecimalAsNumber;
  /** 프로모션 보너스 비율 */
  promotionBonusRate: BigDecimalAsNumber;

  promotionBonusAmount: BigDecimalAsNumber;
  /** 총 보너스 비율 */
  totalBonusRate: BigDecimalAsNumber;

  /** 총 적립 캐시 금액 */
  creditAmount: BigDecimalAsNumber;
  /** 적용된 프로모션 ID */
  appliedPromotionId?: Nullable<UUIDAsString>;
  /** 적용된 프로모션 이름 */
  appliedPromotionName?: Nullable<string>;
  /** 프로모션 적용 시점 */
  promotionAppliedAt?: Nullable<ISODateString>;
  /** 주문 상태 */
  status: CashChargeOrderStatus;
  /** 결제 완료 일시 */
  paidAt?: Nullable<ISODateString>;
  /** 캐시 적립 완료 일시 */
  creditedAt?: Nullable<ISODateString>;
  /** 환불 완료 일시 */
  refundedAt?: Nullable<ISODateString>;
  /** 지역 코드 */
  region: RegionCode;
  /** 통화 코드 */
  currency: CurrencyCode;
  /** 생성일시 */
  createdAt: ISODateString;
  /** 수정일시 */
  updatedAt: ISODateString;
};
