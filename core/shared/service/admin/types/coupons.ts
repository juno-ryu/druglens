import { ISODateString } from 'next-auth';
import { BigDecimalAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { CouponStatus } from '@/core/shared/service/enum/coupon-status';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { IssueType } from '@/core/shared/service/enum/issue-type';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';
import { CouponDiscountInput } from '@/core/shared/service/input/coupon-discount-input';
import { CouponExpirationInput } from '@/core/shared/service/input/coupon-expiration-input';
import { CouponIssueInput } from '@/core/shared/service/input/coupon-issue-input';
import { CouponRestrictInput } from '@/core/shared/service/input/coupon-restrict-input';
import { BrandAdminOutput } from '@/core/shared/service/output/brand-output/brand-admin-output';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { CouponOutput } from '@/core/shared/service/output/coupon-output';
import { AssetProductOutput } from '../../output/asset-product-output';
import { PromotionOutput } from '../../output/promotion-output';

export interface CouponCreateInput {
  /** 몰 구분 */
  regions: RegionCode[];
  /** 쿠폰명 */
  title: string;
  /** 설명 */
  description?: string;
  /** 발급 유형 */
  issue: CouponIssueInput;
  /** 할인 유형 */
  discount: CouponDiscountInput;
  /** 제한 조건 */
  restrict: CouponRestrictInput;
  expiration: CouponExpirationInput;
  /** 부담율, 10% = 0.1 */
  burdenRate: BigDecimalAsNumber;
  /** 임시저장일 때에는 false, 활성하하려면 true  */
  published: boolean;
}

export interface CouponSearchFilter extends PageableInput, SortInput {
  issueType?: IssueType;
  discountMethod?: DiscountMethod;
  status?: CouponStatus[];
  createdStartAt?: ISODateString;
  createdEndAt?: ISODateString;
  /** TODO: text가 맞는지 확인 필요 */
  text?: string;
}

export interface CouponsIssuedSearchFilter extends PageableInput {
  couponId: UUIDAsString;
  status?: CouponStatus;
  userEmail?: string;
}

export interface CouponRestrictsData {
  brand: Array<
    Partial<BrandAdminOutput> & {
      id: UUIDAsString;
      originId?: string;
      mall?: LanguageCode;
    }
  >;
  category: Array<CategoryNodeOutput>;
  product: Array<
    Partial<AssetProductOutput> & {
      id: UUIDAsString;
      originId?: string;
      mall?: Array<RegionCode>;
    }
  >;
  promotion: Array<
    Partial<PromotionOutput> & {
      id: UUIDAsString;
      originId?: string;
      mall?: Array<RegionCode>;
    }
  >;
}
