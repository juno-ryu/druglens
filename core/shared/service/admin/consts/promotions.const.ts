import { EnumPromotionPeriodField, EnumPromotionStatus, PromotionSearchFilter } from '@/core/shared/service/admin/types/promotions';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis promotion (프로모션) */
export const PROMOTIONS_URIS = {
  ['promotions']: (searchFilter?: PromotionSearchFilter) => {
    const formattedSearchFilter = structuredClone({
      ...(searchFilter ?? {}),
      ...(searchFilter?.status === EnumPromotionStatus.ALL && { status: null }),
      ...(searchFilter?.periodField === EnumPromotionPeriodField.ALL && { periodField: null }),
    });

    return {
      uri: transformQueryUri(`${BASE_URL}/promotions`, formattedSearchFilter ?? {}),
      tag: `${BASE_SERVICE}/promotions`,
      filter: transformQueryUri('', formattedSearchFilter ?? {}),
    };
  },
  ['promotions/:promotionId']: (promotionId: UUIDAsString) => ({
    uri: `${BASE_URL}/promotions/${promotionId}`,
    tag: `${BASE_SERVICE}/promotions/${promotionId}`,
  }),
  ['promotions/:promotionId/publish']: (promotionId: UUIDAsString) => ({
    uri: `${BASE_URL}/promotions/${promotionId}/publish`,
    tag: `${BASE_SERVICE}/promotions/${promotionId}/publish`,
  }),
  ['promotions/:promotionId/unpublish']: (promotionId: UUIDAsString) => ({
    uri: `${BASE_URL}/promotions/${promotionId}/unpublish`,
    tag: `${BASE_SERVICE}/promotions/${promotionId}/unpublish`,
  }),
  ['promotions/:promotionId/resume']: (promotionId: UUIDAsString) => ({
    uri: `${BASE_URL}/promotions/${promotionId}/resume`,
    tag: `${BASE_SERVICE}/promotions/${promotionId}/resume`,
  }),
  ['promotions/:promotionId/suspend']: (promotionId: UUIDAsString) => ({
    uri: `${BASE_URL}/promotions/${promotionId}/suspend`,
    tag: `${BASE_SERVICE}/promotions/${promotionId}/suspend`,
  }),
  ['promotions/:promotionId/items']: (promotionId: UUIDAsString) => {
    return {
      uri: `${BASE_URL}/promotions/${promotionId}/items`,
      tag: `${BASE_SERVICE}/promotions/${promotionId}/items`,
    };
  },
  ['promotions/:promotionId/items/resume']: (promotionId: UUIDAsString) => ({
    uri: `${BASE_URL}/promotions/${promotionId}/items/resume`,
    tag: `${BASE_SERVICE}/promotions/${promotionId}/items/resume`,
  }),
  ['promotions/:promotionId/items/suspend']: (promotionId: UUIDAsString) => ({
    uri: `${BASE_URL}/promotions/${promotionId}/items/suspend`,
    tag: `${BASE_SERVICE}/promotions/${promotionId}/items/suspend`,
  }),
  ['promotions/:promotionId/items/bulk-store-csv']: (promotionId: UUIDAsString) => ({
    uri: `${BASE_URL}/promotions/${promotionId}/items/bulk-store-csv`,
    tag: `${BASE_SERVICE}/promotions/${promotionId}/items/bulk-store-csv`,
  }),
} as const;
