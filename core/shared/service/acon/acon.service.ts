import ASSET_APIS from '@/core/shared/service/acon/service/asset.service';
import ASSETS_APIS from '@/core/shared/service/acon/service/assets.service';
import AUTHS_APIS from '@/core/shared/service/acon/service/auths.service';
import CART_APIS from '@/core/shared/service/acon/service/cart.service';
import CASH_CHARGE_APIS from '@/core/shared/service/acon/service/cash-charge.service';
import COMMUNITIES_APIS from '@/core/shared/service/acon/service/communities.service';
import COUPON_APIS from '@/core/shared/service/acon/service/coupon.service';
import CS_APIS from '@/core/shared/service/acon/service/cs.service';
import DEPOSITS_APIS from '@/core/shared/service/acon/service/deposits.service';
import FAQS_APIS from '@/core/shared/service/acon/service/faqs.service';
import MARKETINGS_APIS from '@/core/shared/service/acon/service/marketings.service';
import MEMBERS_APIS from '@/core/shared/service/acon/service/members.service';
import MILEAGES_APIS from '@/core/shared/service/acon/service/mileages.service';
import ORDER_APIS from '@/core/shared/service/acon/service/order.service';
import ORDERS_APIS from '@/core/shared/service/acon/service/orders.service';
import POLICY_APIS from '@/core/shared/service/acon/service/policy.service';
import PRODUCT_APIS from '@/core/shared/service/acon/service/product.service';
import REVIEWS_APIS from '@/core/shared/service/acon/service/reviews.service';
import SCRAP_APIS from '@/core/shared/service/acon/service/scrap.service';

const ACON_APIS = {
  /** @apis auths (인증) */
  ...AUTHS_APIS,
  /** @apis marketing (마케팅) */
  ...MARKETINGS_APIS,
  /** @apis members (회원) */
  ...MEMBERS_APIS,
  /** @apis deposits (캐시) */
  ...DEPOSITS_APIS,
  /** @apis assets (에셋 리스트) */
  ...ASSETS_APIS,
  /** @apis product (상품) */
  ...PRODUCT_APIS,
  /** @apis order (주문) */
  ...ORDER_APIS,
  /** @apis orders (주문) */
  ...ORDERS_APIS,
  /** @apis 장바구니 */
  ...CART_APIS,
  /** @apis communities (커뮤니티) */
  ...COMMUNITIES_APIS,
  /** @apis asset (에셋 공통) */
  ...ASSET_APIS,
  /** @apis cs (customer-services) */
  ...CS_APIS,
  /** @apis faqs (faqs) */
  ...FAQS_APIS,
  /** @apis reviews (리뷰) */
  ...REVIEWS_APIS,
  /** @apis scrap (스크랩) */
  ...SCRAP_APIS,
  /** @apis coupon (쿠폰) */
  ...COUPON_APIS,
  /** @apis mileages (포인트) */
  ...MILEAGES_APIS,
  /** @apis policy (정책 화면) */
  ...POLICY_APIS,
  /** @apis cash-charge (캐시 충전) */
  ...CASH_CHARGE_APIS,
};

export default ACON_APIS;
