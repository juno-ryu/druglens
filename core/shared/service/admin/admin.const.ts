import { APPLY_URIS } from '@/core/shared/service/admin/consts/apply.const';
import { ASSETS_URIS } from '@/core/shared/service/admin/consts/assets.const';
import { AUTHS_URIS } from '@/core/shared/service/admin/consts/auths.const';
import { BRAND_URIS } from '@/core/shared/service/admin/consts/brand.const';
import { BRANDS_URIS } from '@/core/shared/service/admin/consts/brands.const';
import { CATEGORIES_URIS } from '@/core/shared/service/admin/consts/categories.const';
import { COMMUNITY_URIS } from '@/core/shared/service/admin/consts/community.const';
import { COUPONS_URIS } from '@/core/shared/service/admin/consts/coupons.const';
import { CS_URIS } from '@/core/shared/service/admin/consts/cs.const';
import { DEPOSITS_URIS } from '@/core/shared/service/admin/consts/deposits.const';
import { FAQ_URIS } from '@/core/shared/service/admin/consts/faq.const';
import { MILEAGES_URIS } from '@/core/shared/service/admin/consts/mileages.const';
import { ORDERS_URIS } from '@/core/shared/service/admin/consts/orders.const';
import { PARTNER_NOTICES_URIS } from '@/core/shared/service/admin/consts/partner-notices.const';
import { PRODUCT_URIS } from '@/core/shared/service/admin/consts/product.const';
import { PRODUCTS_URIS } from '@/core/shared/service/admin/consts/products.const';
import { PROMOTION_URIS } from '@/core/shared/service/admin/consts/promotion.const';
import { PROMOTIONS_URIS } from '@/core/shared/service/admin/consts/promotions.const';
import { REVIEW_URIS } from '@/core/shared/service/admin/consts/review.const';
import { SETTLE_URIS } from '@/core/shared/service/admin/consts/settle.const';
import { USERS_URIS } from '@/core/shared/service/admin/consts/users.const';

export type EnumAdminURI = (typeof ADMIN_URIS)[keyof typeof ADMIN_URIS];
export const ADMIN_URIS = {
  /** @apis apply (관리자 등록) */
  ...APPLY_URIS,
  /** @apis assets (상품) */
  ...ASSETS_URIS,
  /** @apis auths (인증) */
  ...AUTHS_URIS,
  /** @apis brand (브랜드) */
  ...BRAND_URIS,
  /** @apis brands (브랜드) */
  ...BRANDS_URIS,
  /** @apis users (유저) */
  ...USERS_URIS,
  /** @apis categories (카테고리) */
  ...CATEGORIES_URIS,
  /** @apis product (상품) */
  ...PRODUCT_URIS,
  /** @apis products (상품) */
  ...PRODUCTS_URIS,
  /** @apis promotion (프로모션 공통) */
  ...PROMOTION_URIS,
  /** @apis promotion (프로모션) */
  ...PROMOTIONS_URIS,
  /** @apis community (커뮤니티) */
  ...COMMUNITY_URIS,
  /** @apis coupons (쿠폰) */
  ...COUPONS_URIS,
  /** @apis orders (주문) */
  ...ORDERS_URIS,
  /** @apis customer-services (cs) */
  ...CS_URIS,
  /** @apis faqs (faq) */
  ...FAQ_URIS,
  /** @apis deposits (캐시) */
  ...DEPOSITS_URIS,
  /** @apis mileages (포인트) */
  ...MILEAGES_URIS,
  /** @apis review (리뷰) */
  ...REVIEW_URIS,
  /** @apis settle (정산) */
  ...SETTLE_URIS,
  /** @apis partner-notices (판매자 안내 게시판) */
  ...PARTNER_NOTICES_URIS,
} as const;
