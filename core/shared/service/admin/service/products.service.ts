import { ISODateString } from 'next-auth';
import { ProductAssetsSearchFilter, PutProductAssetsDetailInput } from '@/core/shared/service/admin/types/product';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';

/** @apis products (상품) */
const PRODUCTS_APIS = {
  ['products/expose']: {
    /** @method post 상품 노출 */
    post: async (payload: { productIds: UUIDAsString[]; exposedAt?: ISODateString }) => {
      const { uri } = ADMIN_URIS['products/expose']();
      return await requestWithAuth(Operation.POST, uri, payload);
    },
  },
  ['products/hide']: {
    /** @method post 상품 비노출 */
    post: async (payload: { productIds: UUIDAsString[] }) => {
      const { uri } = ADMIN_URIS['products/hide']();
      return await requestWithAuth(Operation.POST, uri, payload);
    },
  },
};

export default PRODUCTS_APIS;
