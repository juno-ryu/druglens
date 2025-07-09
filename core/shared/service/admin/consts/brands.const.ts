import { BrandsSearchFilter } from '@/core/shared/service/admin/types/brands';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis brands (브랜드) */
export const BRANDS_URIS = {
  ['brands']: (searchFilter?: BrandsSearchFilter) => {
    return {
      uri: transformQueryUri(`${BASE_URL}/brands`, searchFilter ?? {}),
      tag: `${BASE_SERVICE}/brands`,
      filter: transformQueryUri('', searchFilter ?? {}),
    };
  },
  ['brands/:brandId']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}`,
    tag: `${BASE_SERVICE}/brands/${brandId}`,
  }),
  ['brands/:brandId/users']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}/users`,
    tag: `${BASE_SERVICE}/brands/${brandId}/users`,
  }),
  ['brands/:brandId/integrated-rejection']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}/integrated-rejection`,
    tag: `${BASE_SERVICE}/brands/${brandId}/integrated-rejection`,
  }),
  ['brands/:brandId/integrated-approval']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}/integrated-approval`,
    tag: `${BASE_SERVICE}/brands/${brandId}/integrated-approval`,
  }),
  ['brands/:brandId/leave']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}/leave`,
    tag: `${BASE_SERVICE}/brands/${brandId}/leave`,
  }),
  ['brands/:brandId/update-info']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}/update-info`,
    tag: `${BASE_SERVICE}/brands/${brandId}/update-info`,
  }),
} as const;
