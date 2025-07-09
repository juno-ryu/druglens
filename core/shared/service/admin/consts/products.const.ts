import { ProductAssetsSearchFilter } from '@/core/shared/service/admin/types/product';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis products  */
export const PRODUCTS_URIS = {
  // 상품 노출
  ['products/expose']: () => ({
    uri: `${BASE_URL}/products/expose`,
    tag: `${BASE_SERVICE}/products/expose`,
  }),
  // 상품 비노출
  ['products/hide']: () => ({
    uri: `${BASE_URL}/products/hide`,
    tag: `${BASE_SERVICE}/products/hide`,
  }),
} as const;
