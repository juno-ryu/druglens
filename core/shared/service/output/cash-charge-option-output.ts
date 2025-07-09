// # CashChargeOptionOutput

import { ISODateString } from 'next-auth';
import { BigDecimalAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CashChargeOptionType } from '@/core/shared/service/enum/cash-charge-option-type';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { RegionCode } from '@/core/shared/service/enum/region-code';

/** 캐시 충전 옵션 정보 응답 데이터 (목록 형태로 제공) */
export type CashChargeOptionOutput = {
  /** 옵션 ID */
  id: UUIDAsString;
  /** 지역 코드 */
  region: RegionCode;
  /** 통화 코드 */
  currency: CurrencyCode;
  /** 옵션 타입 */
  optionType: CashChargeOptionType;
  /** 충전 금액 (고정형인 경우) */
  chargeAmount?: Nullable<number>;
  /** 기본 보너스 비율 */
  baseBonusRate: BigDecimalAsNumber;
  /** 총 보너스 비율 */
  totalBonusRate: BigDecimalAsNumber;
  /** 표시 이름 */
  displayName: string;
  /** 보너스 표시 텍스트 */
  bonusDisplayText?: Nullable<string>;
  /** 최소 충전 금액 */
  minimumAmount?: Nullable<BigDecimalAsNumber>;
  /** 최대 충전 금액 */
  maximumAmount?: Nullable<BigDecimalAsNumber>;
  /** 충전 금액 단위 */
  amountStep?: Nullable<BigDecimalAsNumber>;
  /** 추천 여부 */
  isRecommended: boolean;
  /** 표시 순서 */
  displayOrder: number;
  /** 활성화 여부 */
  isActive: boolean;
  /** 생성일시 */
  createdAt: ISODateString;
  /** 수정일시 */
  updatedAt: ISODateString;
  /** 프로모션 보유 여부 */
  hasPromotion: boolean;
  /** 프로모션 정보 */
  promotionInfo?: Nullable<{
    /** 프로모션 ID */
    id: UUIDAsString;
    /** 지역 코드 */
    region: RegionCode;
    /** 프로모션 이름 */
    name: string;
    /** 추가 보너스 비율 */
    additionalBonusRate: BigDecimalAsNumber;
    /** 우선순위 */
    priority: number;
    /** 시작 시간 */
    startAtUtc: ISODateString;
    /** 종료 시간 */
    endAtUtc: ISODateString;
    /** 표시 설정 */
    displayConfig: {
      header: string;
      badge: string;
      showEndDate: boolean;
      dateFormat: string;
      style?: {
        textColor?: string;
        backgroundColor?: string;
      };
    };
    /** 규칙 설정 */
    ruleConfig?: Nullable<string>;
    /** 활성화 여부 */
    isActive: boolean;
    /** 생성일시 */
    createdAt: ISODateString;
    /** 생성자 ID */
    createdBy?: Nullable<UUIDAsString>;
    /** 수정일시 */
    updatedAt: ISODateString;
    /** 최종 수정자 ID */
    lastModifiedBy?: Nullable<UUIDAsString>;
  }>;
};
