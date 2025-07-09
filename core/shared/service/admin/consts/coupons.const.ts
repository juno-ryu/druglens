import { CouponSearchFilter, CouponsIssuedSearchFilter } from '@/core/shared/service/admin/types/coupons';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis coupons (쿠폰) */
export const COUPONS_URIS = {
  ['coupons']: (searchFilter?: CouponSearchFilter) => {
    return {
      uri: transformQueryUri(`${BASE_URL}/coupons`, searchFilter ?? {}),
      tag: `${BASE_SERVICE}/coupons`,
      filter: transformQueryUri('', searchFilter ?? {}),
    };
  },
  ['coupons/:couponId']: (couponId: string) => ({
    uri: `${BASE_URL}/coupons/${couponId}`,
    tag: `${BASE_SERVICE}/coupons/${couponId}`,
  }),
  ['coupons/:couponId/issue']: (couponId: UUIDAsString) => ({
    uri: `${BASE_URL}/coupons/${couponId}/issue`,
    tag: `${BASE_SERVICE}/coupons/${couponId}/issue`,
  }),
  ['coupons/:couponId/suspend']: (couponId: string) => ({
    uri: `${BASE_URL}/coupons/${couponId}/suspend`,
    tag: `${BASE_SERVICE}/coupons/${couponId}/suspend`,
  }),
  ['coupons/:couponId/unpublish']: (couponId: string) => ({
    uri: `${BASE_URL}/coupons/${couponId}/unpublish`,
    tag: `${BASE_SERVICE}/coupons/${couponId}/unpublish`,
  }),
  ['coupons/:couponId/resume']: (couponId: string) => ({
    uri: `${BASE_URL}/coupons/${couponId}/resume`,
    tag: `${BASE_SERVICE}/coupons/${couponId}/resume`,
  }),
  ['coupons/duplicate/keyword']: () => ({
    uri: `${BASE_URL}/coupons/duplicate/keyword`,
    tag: `${BASE_SERVICE}/coupons/duplicate/keyword`,
  }),
  ['coupons/issued']: (searchFilter: CouponsIssuedSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/coupons/issued`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/coupons/issued`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
} as const;
