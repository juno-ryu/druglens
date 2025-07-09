import {
  BrandsSearchFilter,
  PatchBrandDetailIntegratedApprovalPayload,
  PatchBrandDetailIntegratedRejectionPayload,
  PatchBrandDetailLeavePayload,
  PostBrandDetailUpdateInfoPayload,
} from '@/core/shared/service/admin/types/brands';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { BrandAdminOutput } from '@/core/shared/service/output/brand-output/brand-admin-output';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { SortOutput } from '@/core/shared/service/output/common/sort-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** @apis brands (브랜드) */
const BRANDS_APIS = {
  ['brands']: {
    /** @method get 브랜드 조회 */
    get: async (searchFilter?: BrandsSearchFilter) => {
      const { uri } = ADMIN_URIS['brands'](searchFilter);
      return await requestWithAuth<{ data: BrandAdminOutput[]; pagination: PaginationOutput; sort: SortOutput }>(Operation.GET, uri.toString());
    },
  },
  ['brands/:brandId']: {
    /** @method get 브랜드 상세 조회 */
    get: async (brandId: UUIDAsString) => {
      const { uri } = ADMIN_URIS['brands/:brandId'](brandId);
      return await requestWithAuth<{ data: BrandAdminOutput }>(Operation.GET, uri.toString());
    },
  },
  ['brands/:brandId/users']: {
    /** @method get 브랜드에 소솓괸 사용자 조회 */
    get: async (brandId: UUIDAsString) => {
      const { uri } = ADMIN_URIS['brands/:brandId/users'](brandId);
      return await requestWithAuth<{ data: UserOutput[] }>(Operation.GET, uri.toString());
    },
  },
  ['brands/:brandId/integrated-rejection']: {
    /** @method patch 브랜드 통합 거절 */
    patch: async (brandId: UUIDAsString, payload: PatchBrandDetailIntegratedRejectionPayload) => {
      const { uri } = ADMIN_URIS['brands/:brandId/integrated-rejection'](brandId);
      return await requestWithAuth<{ data: string }>(Operation.PATCH, uri, payload);
    },
  },
  ['brands/:brandId/integrated-approval']: {
    /** @method patch 브랜드 통합 승인 */
    patch: async (brandId: UUIDAsString, payload: PatchBrandDetailIntegratedApprovalPayload) => {
      const { uri } = ADMIN_URIS['brands/:brandId/integrated-approval'](brandId);
      return await requestWithAuth<{ data: string }>(Operation.PATCH, uri, payload);
    },
  },
  ['brands/:brandId/leave']: {
    /** @method patch 브랜드 통합 승인 */
    patch: async (brandId: UUIDAsString, payload: PatchBrandDetailLeavePayload) => {
      const { uri } = ADMIN_URIS['brands/:brandId/leave'](brandId);
      return await requestWithAuth<{ data: string }>(Operation.PATCH, uri, payload);
    },
  },
  ['brands/:brandId/update-info']: {
    /** @method patch 브랜드, 정산 정보 업데이트 */
    patch: async (brandId: UUIDAsString, payload: PostBrandDetailUpdateInfoPayload) => {
      const { uri } = ADMIN_URIS['brands/:brandId/update-info'](brandId);
      return await requestWithAuth<{ data: string }>(Operation.PATCH, uri, payload);
    },
  },
};

export default BRANDS_APIS;
