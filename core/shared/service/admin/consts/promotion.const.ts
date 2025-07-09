import { PromotionSlugDuplicateInput } from '@/core/shared/service/admin/types/promotion';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis promotion (프로모션 공통) */
export const PROMOTION_URIS = {
  ['promotion/common/slug-duplicate']: (queryParams: PromotionSlugDuplicateInput) => {
    return {
      uri: transformQueryUri(`${BASE_URL}/promotion/common/slug-duplicate`, queryParams ?? {}),
      tag: `${BASE_SERVICE}/promotion/common/slug-duplicate`,
    };
  },
} as const;
