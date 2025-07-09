import { BrandsSearchFilter } from '@/core/shared/service/hub/types/brands';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/hub/hub.common';

/** @apis brands (브랜드) */
export const BRANDS_URIS = {
  ['brands']: (searchFilter?: BrandsSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/brands`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/brands`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  /** @apis brands/brand-with-settle (브랜드, 정산 정보 생성) */
  ['brands/brand-with-settle']: () => ({
    uri: `${BASE_URL}/brands/brand-with-settle`,
    tag: `${BASE_SERVICE}/brands/brand-with-settle`,
  }),
  /** @apis brands/:brandId (브랜드 조회) */
  ['brands/:brandId']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}`,
    tag: `${BASE_SERVICE}/brands/${brandId}`,
  }),
  /** @apis brands/:brandId/rejection-info (파트너 심사 반려 정보 조회) */
  ['brands/:brandId/rejection-info']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}/rejection-info`,
    tag: `${BASE_SERVICE}/brands/${brandId}/rejection-info`,
  }),
  /** @apis brands/:brandId/reapply (브랜드, 정산 정보 업데이트) */
  ['brands/:brandId/reapply']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}/reapply`,
    tag: `${BASE_SERVICE}/brands/${brandId}/reapply`,
  }),
  /** @apis brands/:brandId/introduce (소개 수정) */
  ['brands/:brandId/introduce']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}/introduce`,
    tag: `${BASE_SERVICE}/brands/${brandId}/introduce`,
  }),
  /** @apis brands/:brandId/settles (브랜드 정산 정보 등록) */
  ['brands/:brandId/settles']: (brandId: string) => ({
    uri: `${BASE_URL}/brands/${brandId}/settles`,
    tag: `${BASE_SERVICE}/brands/${brandId}/settles`,
  }),
} as const;
