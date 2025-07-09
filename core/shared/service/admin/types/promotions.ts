// promotion-item-input.ts

import { ISODateString } from 'next-auth';
import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Optional } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { PromotionStatus } from '@/core/shared/service/enum/promotion-status';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';

export enum EnumPromotionStatus {
  // 작성중
  DRAFT = 'DRAFT',
  // 진행예정
  READY = 'READY',
  // 진행중
  RUNNING = 'RUNNING',
  // 종료
  DONE = 'DONE',
  // 전체
  ALL = 'ALL',
}

export enum EnumPromotionPeriodField {
  // 생성일 기준
  CREATED_AT = 'createdAt',
  // 수정일 기준
  UPDATED_AT = 'updatedAt',
  // 중단일 기준
  SUSPENDED_AT = 'suspendedAt',
  // 게시일 기준
  PUBLISHED_AT = 'publishedAt',
  // 전체
  ALL = 'ALL',
}

/** @api GET ['promotions'] */
export interface PromotionSearchFilter extends Partial<PageableInput>, Partial<SortInput> {
  title: string;
  status?: EnumPromotionStatus;
  periodField?: Optional<EnumPromotionPeriodField>;
  since?: Optional<ISODateString>;
  until?: Optional<ISODateString>;
}
// 등록
export type PromotionItemPostInput = {
  /** 상품 ID
   * @example "a1b2c3d4-e5f6-7890-1234-56789abcdef0"
   */
  productId: UUIDAsString;

  /** 통화
   * @example "KRW"
   */
  currency: Optional<CurrencyCode>;

  /** 할인방식
   * @example "RATE"
   */
  discountMethod: Optional<DiscountMethod>;

  /** 할인율 또는 금액
   * @example 0.1
   */
  discountValue: Optional<DoubleAsNumber>;
};
