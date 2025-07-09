import { PromotionSlugDuplicateInput } from '@/core/shared/service/admin/types/promotion';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PromotionOutput } from '@/core/shared/service/output/promotion-output';

/** @apis promotion (프로모션 공통) */
const PROMOTION_APIS = {
  ['promotion/common/slug-duplicate']: {
    /** @method get 프로모션 대상 상품 조회 */
    get: async (queryParams: PromotionSlugDuplicateInput) => {
      const { uri, tag } = ADMIN_URIS['promotion/common/slug-duplicate'](queryParams);
      return await requestWithAuth<{ data: PromotionOutput[] }>(Operation.GET, uri, undefined);
    },
  },
};

export default PROMOTION_APIS;
