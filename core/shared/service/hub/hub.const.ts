import { ASSETS_URIS } from '@/core/shared/service/hub/consts/assets.const';
import { AUTHS_URIS } from '@/core/shared/service/hub/consts/auths.const';
import { BANK_URIS } from '@/core/shared/service/hub/consts/bank.const';
import { BRAND_URIS } from '@/core/shared/service/hub/consts/brand.const';
import { BRANDS_URIS } from '@/core/shared/service/hub/consts/brands.const';
import { ORDERS_URIS } from '@/core/shared/service/hub/consts/orders.const';
import { ORGANIZATIONS_URIS } from '@/core/shared/service/hub/consts/organizations.const';
import { PARTNER_NOTICES_URIS } from '@/core/shared/service/hub/consts/partner-notices.const';
import { PARTNERS_URIS } from '@/core/shared/service/hub/consts/partners.const';
import { PRODUCT_URIS } from '@/core/shared/service/hub/consts/product.const';
import { SETTLE_URIS } from '@/core/shared/service/hub/consts/settle.const';

export type EnumHubURI = (typeof HUB_URIS)[keyof typeof HUB_URIS];
export const HUB_URIS = {
  /** @apis auths (인증) */
  ...AUTHS_URIS,
  /** @apis bank (은행) */
  ...BANK_URIS,
  /** @apis organizations (조직) */
  ...ORGANIZATIONS_URIS,
  /** @apis brand (브랜드 공통) */
  ...BRAND_URIS,
  /** @apis brands (브랜드) */
  ...BRANDS_URIS,
  /** @apis partners (판매자) */
  ...PARTNERS_URIS,
  /** @apis assets (상품 파일) */
  ...ASSETS_URIS,
  /** @apis product (상품) */
  ...PRODUCT_URIS,
  /** @apis orders (판매 내역) */
  ...ORDERS_URIS,
  /** @apis settle (정산 내역) */
  ...SETTLE_URIS,
  /** @apis partner-notices (판매자 안내 게시판) */
  ...PARTNER_NOTICES_URIS,
};
