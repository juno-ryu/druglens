import { ISODateString } from 'next-auth';
import { BigDecimalAsNumber, IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { CouponStatus } from '@/core/shared/service/enum/coupon-status';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { DiscountType } from '@/core/shared/service/enum/discount-type';
import { ExpireType } from '@/core/shared/service/enum/expire-type';
import { IssueType } from '@/core/shared/service/enum/issue-type';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { BrandAdminOutput } from '@/core/shared/service/output/brand-output/brand-admin-output';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { CouponRestricts } from '@/core/shared/service/output/coupon-restricts';
import { UserOutput } from '@/core/shared/service/output/user-output';
import { PromotionOutput } from './promotion-output';

export type CouponOutput = {
  /** UUID */
  id: UUIDAsString;
  /** 적용 몰 */
  regions: Array<RegionCode>;
  /** 이름 */
  title: string;
  /** 설명 */
  description?: string;
  /** 발행 방식 */
  issueType: IssueType;
  /** 결제 화폐 */
  currency: CurrencyCode;
  /** 할인 적용 유형 */
  discountType: DiscountType;
  /** 할인 적용 방법 */
  discountMethod: DiscountMethod;
  /** 할인 금액 또는 할인율 */
  discountValue: BigDecimalAsNumber;
  /** 최대 할인 금액 */
  discountMax: BigDecimalAsNumber;
  /** 최소 결제 금액 */
  minPrice: BigDecimalAsNumber;
  /**
   * 부담율
   *
   * TODO: 0.5처럼 float 형식이 되어야 하므로 확인 필요
   *  */
  burdenRate: BigDecimalAsNumber;
  /** 만료 방식 */
  expireType: ExpireType;
  /** 사용 시작일 */
  expireSince?: ISODateString;
  /** 사용 종료일 */
  expireUntil?: ISODateString;
  /** 사용 가능 일 */
  expireDays?: IntAsNumber;
  /** 발급 수량 */
  issueLimit: IntAsNumber;
  /** 사용자당 발급 수량 */
  issuePerUser: IntAsNumber;
  /** 발행 시작일 */
  issueSince: ISODateString;
  /** 발행 종료일 */
  issueUntil: ISODateString;
  /** 중지일 */
  suspendedAt?: ISODateString;
  publishedAt?: ISODateString;
  /** 쿠폰 상태 */
  status: CouponStatus;
  /** 제한 */
  restricts: CouponRestricts;
  brands?: Array<BrandAdminOutput>;
  categories?: Array<CategoryNodeOutput>;
  products?: Array<AssetProductOutput>;
  promotions?: Array<PromotionOutput>;
  /** 키워드 발급 쿠폰의 키워드	 */
  keyword?: string;
  createdAt: ISODateString;
  user: UserOutput;
};
