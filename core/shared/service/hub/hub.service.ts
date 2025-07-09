import ASSETS_APIS from '@/core/shared/service/hub/service/assets.service';
import AUTHS_APIS from '@/core/shared/service/hub/service/auths.service';
import BANK_APIS from '@/core/shared/service/hub/service/bank.service';
import BRAND_APIS from '@/core/shared/service/hub/service/brand.service';
import BRANDS_APIS from '@/core/shared/service/hub/service/brands.service';
import ORDERS_APIS from '@/core/shared/service/hub/service/orders.service';
import ORGANIZATIONS_APIS from '@/core/shared/service/hub/service/organizations.service';
import PARTNER_NOTICES_APIS from '@/core/shared/service/hub/service/partner-notices.service';
import PARTNERS_APIS from '@/core/shared/service/hub/service/partners.service';
import PRODUCT_APIS from '@/core/shared/service/hub/service/product.service';
import SETTLE_APIS from '@/core/shared/service/hub/service/settle.service';

const HUB_APIS = {
  /** @apis auths (인증) */
  ...AUTHS_APIS,
  /** @apis bank (은행) */
  ...BANK_APIS,
  /** @apis organizations (조직) */
  ...ORGANIZATIONS_APIS,
  /** @apis brand (브랜드 공통) */
  ...BRAND_APIS,
  /** @apis brands (브랜드) */
  ...BRANDS_APIS,
  /** @apis partners (판매자) */
  ...PARTNERS_APIS,
  /** @apis assets (상품 파일) */
  ...ASSETS_APIS,
  /** @apis product (상품) */
  ...PRODUCT_APIS,
  /** @apis orders (판매 내역) */
  ...ORDERS_APIS,
  /** @apis settle (정산 내역) */
  ...SETTLE_APIS,
  /** @apis partner-notices (판매자 안내 게시판) */
  ...PARTNER_NOTICES_APIS,
};

export default HUB_APIS;
