import { ISODateString } from 'next-auth';
import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { PromotionImageOutput } from '@/core/shared/service/output/promotion-image-output';
import { PromotionItemOutput } from '@/core/shared/service/output/promotion-item-output';

export type PromotionOutput = {
  // 설명: ID
  // 예시: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  id: UUIDAsString;

  // 설명 : 적용 몰
  regions: RegionCode[];
  // 설명: 컨셉 ID
  // 예시: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  conceptId: UUIDAsString;

  // 설명: 제목
  // 예시: "블랙프라이데이 특가"
  title: string;

  // 설명: 설명
  // 예시: "1년에 단 한 번! 역대급 혜택"
  description: Nullable<string>;

  // 설명: 통화
  // 예시: "KRW"
  currency: CurrencyCode;

  // 설명: 할인방식
  // 예시: "RATE"
  discountMethod: DiscountMethod;

  // 설명: 할인율 또는 금액
  // 예시: 0.2
  discountValue: DoubleAsNumber;

  // 설명: 부담율
  // 예시: 0.5
  burdenRate: DoubleAsNumber;

  // 설명: 링크주소
  // 예시: "black-friday-2025"
  slug: Nullable<string>;

  // 설명: 성인여부
  // 예시: false
  isAdult: boolean;

  // 설명: 배포일시
  // 예시: "2025-04-01T10:00:00Z"
  publishedAt: Nullable<ISODateString>;

  // 설명: 생성일시
  // 예시: "2025-03-30T14:25:00Z"
  createdAt: ISODateString;

  // 설명: 수정일시
  // 예시: "2025-04-01T10:00:00Z"
  updatedAt: Nullable<ISODateString>;

  // 설명: 중단일시
  // 예시: "2025-06-01T00:00:00Z"
  suspendedAt: Nullable<ISODateString>;

  // 설명: 시작일시
  // 예시: "2025-05-01T00:00:00Z"
  since: ISODateString;

  // 설명: 종료일시
  // 예시: "2025-05-31T23:59:59Z"
  until: ISODateString;

  // 설명: 적용상품
  // 예시: []
  images: Nullable<PromotionImageOutput[]>;

  // 설명: 적용상품
  // 예시: []
  items: Nullable<PromotionItemOutput[]>;
};
