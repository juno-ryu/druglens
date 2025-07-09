import APPLY_APIS from '@/core/shared/service/admin/service/apply.service';
import ASSETS_APIS from '@/core/shared/service/admin/service/assets.service';
import AUTHS_APIS from '@/core/shared/service/admin/service/auths.service';
import BRAND_APIS from '@/core/shared/service/admin/service/brand.service';
import BRANDS_APIS from '@/core/shared/service/admin/service/brands.service';
import CATEGORIES_APIS from '@/core/shared/service/admin/service/categories.service';
import COMMUNITY_APIS from '@/core/shared/service/admin/service/community.service';
import COUPONS_APIS from '@/core/shared/service/admin/service/coupons.service';
import CS_APIS from '@/core/shared/service/admin/service/cs.service';
import DEPOSITS_APIS from '@/core/shared/service/admin/service/deposits.service';
import FAQ_APIS from '@/core/shared/service/admin/service/faq.service';
import MILEAGES_APIS from '@/core/shared/service/admin/service/mileages.service';
import ORDERS_APIS from '@/core/shared/service/admin/service/orders.service';
import PARTNER_NOTICES_APIS from '@/core/shared/service/admin/service/partner-notices.service';
import PRODUCT_APIS from '@/core/shared/service/admin/service/product.service';
import PRODUCTS_APIS from '@/core/shared/service/admin/service/products.service';
import PROMOTION_APIS from '@/core/shared/service/admin/service/promotion.service';
import PROMOTIONS_APIS from '@/core/shared/service/admin/service/promotions.service';
import REVIEW_APIS from '@/core/shared/service/admin/service/review.service';
import SETTLE_APIS from '@/core/shared/service/admin/service/settle.service';
import USERS_APIS from '@/core/shared/service/admin/service/users.service';

const ADMIN_APIS = {
  /** @apis apply (관리자 등록) */
  ...APPLY_APIS,
  /** @apis assets (에셋) */
  ...ASSETS_APIS,
  /** @apis auths (인증) */
  ...AUTHS_APIS,
  /** @apis brand (브랜드) */
  ...BRAND_APIS,
  /** @apis brands (브랜드) */
  ...BRANDS_APIS,
  /** @apis categories (카테고리) */
  ...CATEGORIES_APIS,
  /** @apis users (유저) */
  ...USERS_APIS,
  /** @apis product (상품) */
  ...PRODUCT_APIS,
  /** @apis products (상품) */
  ...PRODUCTS_APIS,
  /** @apis promotion (프로모션 공통) */
  ...PROMOTION_APIS,
  /** @apis promotions (프로모션) */
  ...PROMOTIONS_APIS,
  /** @apis coupons (쿠폰) */
  ...COUPONS_APIS,
  /** @apis community (커뮤니티) */
  ...COMMUNITY_APIS,
  /** @apis orders (주문) */
  ...ORDERS_APIS,
  /** @apis customer-services (cs) */
  ...CS_APIS,
  /** @apis faq (faq) */
  ...FAQ_APIS,
  /** @apis deposits (캐시) */
  ...DEPOSITS_APIS,
  /** @apis mileages (포인트) */
  ...MILEAGES_APIS,
  /** @apis review (리뷰) */
  ...REVIEW_APIS,
  /** @apis settle (정산) */
  ...SETTLE_APIS,
  /** @apis partner-notices (판매자 안내 게시판) */
  ...PARTNER_NOTICES_APIS,
};

export default ADMIN_APIS;
