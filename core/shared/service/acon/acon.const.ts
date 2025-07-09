import { ASSET_URIS } from '@/core/shared/service/acon/consts/asset.const';
import { ASSETS_URIS } from '@/core/shared/service/acon/consts/assets.const';
import { AUTHS_URIS } from '@/core/shared/service/acon/consts/auths.const';
import { CART_URIS } from '@/core/shared/service/acon/consts/cart.const';
import { CASH_CHARGE_URIS } from '@/core/shared/service/acon/consts/cash-charge.const';
import { COMMUNITIES_URIS } from '@/core/shared/service/acon/consts/communitys.const';
import { COUPON_URIS } from '@/core/shared/service/acon/consts/coupon.const';
import { CS_URIS } from '@/core/shared/service/acon/consts/cs.const';
import { DEPOSITS_URIS } from '@/core/shared/service/acon/consts/deposits.const';
import { FAQS_URIS } from '@/core/shared/service/acon/consts/faqs.const';
import { MARKETINGS_URIS } from '@/core/shared/service/acon/consts/marketings.const';
import { MEMBERS_URIS } from '@/core/shared/service/acon/consts/members.const';
import { MILEAGES_URIS } from '@/core/shared/service/acon/consts/mileages.const';
import { ORDER_URIS } from '@/core/shared/service/acon/consts/order.const';
import { ORDERS_URIS } from '@/core/shared/service/acon/consts/orders.const';
import { POLICY_URIS } from '@/core/shared/service/acon/consts/policy.const';
import { PRODUCT_URIS } from '@/core/shared/service/acon/consts/product.const';
import { PRODUCTS_URIS } from '@/core/shared/service/acon/consts/products.const';
import { REVIEWS_URIS } from '@/core/shared/service/acon/consts/reviews.const';
import { SCRAP_URIS } from '@/core/shared/service/acon/consts/scrap.const';

export type EnumAconURI = (typeof ACON_URIS)[keyof typeof ACON_URIS];
export const ACON_URIS = {
  /** @apis auths (인증) */
  ...AUTHS_URIS,
  /** @apis marketings (마케팅) */
  ...MARKETINGS_URIS,
  /** @apis members (회원) */
  ...MEMBERS_URIS,
  /** @apis deposits (캐시) */
  ...DEPOSITS_URIS,
  /** @apis assets (에셋 리스트) */
  ...ASSETS_URIS,
  /** @apis product (상품) */
  ...PRODUCT_URIS,
  /** @apis order (주문) */
  ...ORDER_URIS,
  /** @apis orders (주문) */
  ...ORDERS_URIS,
  /** @apis cart (장바구니) */
  ...CART_URIS,
  /** @apis communities (커뮤니티) */
  ...COMMUNITIES_URIS,
  /** @apis asset (에셋 공통) */
  ...ASSET_URIS,
  /** @apis cs (customer-services) */
  ...CS_URIS,
  /** @apis faqs (faq) */
  ...FAQS_URIS,
  /** @apis reviews (리뷰) */
  ...REVIEWS_URIS,
  /** @apis products (상품) */
  ...PRODUCTS_URIS,
  /** @apis scrap (스크랩) */
  ...SCRAP_URIS,
  /** @apis coupon (쿠폰) */
  ...COUPON_URIS,
  /** @apis mileages (포인트) */
  ...MILEAGES_URIS,
  /** @apis policy (정책 화면) */
  ...POLICY_URIS,
  /** @apis cash-charge (캐시 충전) */
  ...CASH_CHARGE_URIS,
} as const;
