import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { ProductOutput } from '@/core/shared/service/output/product-output';

/** @apis scrap (스크랩) */
const SCRAP_APIS = {
  ['products/scrap']: {
    get: async () => {
      const { uri } = ACON_URIS['products/scrap']();
      return await requestWithAuth<{ data: ProductOutput[] }>(Operation.GET, uri);
    },
  },
  ['products/:productId/scraps']: {
    post: async (productId: UUIDAsString) => {
      const { uri } = ACON_URIS['products/:productId/scraps'](productId);
      return await requestWithAuth<{ data: string }>(Operation.POST, uri);
    },
  },
  ['products/unscraps']: {
    del: async (productIds: UUIDAsString[]) => {
      const { uri } = ACON_URIS['products/unscraps']();
      return await requestWithAuth<{ data: string }>(Operation.DELETE, uri, {
        productIds,
      });
    },
  },
};

export default SCRAP_APIS;
