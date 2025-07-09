import { ISODateString } from 'next-auth';
import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable, Optional } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { ImageInput } from '@/core/shared/service/input/promotion-input/image-input';

export type PromotionInput = {
  // 예시: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  conceptId: UUIDAsString;

  // 예시: ["KR", "JP"]
  regions: RegionCode[];

  // 예시: "블랙프라이데이 특가"
  title: string;

  // 예시: "KRW"
  currency: CurrencyCode;

  // 예시: "RATE"
  discountMethod: DiscountMethod;

  // 예시: 0.2
  discountValue: DoubleAsNumber;

  // 예시: 0.2
  burdenRate: DoubleAsNumber;

  // 시작 날짜
  // 예시: "2025-05-01T00:00:00Z"
  since: Nullable<ISODateString>;

  // 끝 날짜
  // 예시: "2025-05-31T23:59:59Z"
  until: Nullable<ISODateString>;

  // 예시: "black-friday-2025"
  slug: Optional<string>;

  // 예시: false
  isAdult: Optional<boolean>;

  // 예시: "1년에 단 한 번! 역대급 혜택"
  description: Optional<string>;

  // 예시: [{ region: "KR", device: "PC", ... }]
  images: Optional<ImageInput[]>;
};
