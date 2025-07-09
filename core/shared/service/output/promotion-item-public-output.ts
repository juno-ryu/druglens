import { ISODateString } from 'next-auth';
import { DoubleAsNumber } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';

export type ConceptData = {
  /** 컨셉코드 */
  code: string;
  /** 컨셉명 */
  title: string;
};

/** 상품에 적용된 프로모션 정보를 반환 */
export type PromotionItemPublicOutput = {
  /** 프로모션명 */
  title: string;
  /** 할인방식 */
  discountMethod: DiscountMethod;
  /** 할인율 또는 금액 */
  discountValue: DoubleAsNumber;
  /** 시작일시 */
  since: ISODateString;
  /** 종료일시 */
  until: ISODateString;
  /** 컨셉정보 */
  concept: Nullable<ConceptData>;
};
