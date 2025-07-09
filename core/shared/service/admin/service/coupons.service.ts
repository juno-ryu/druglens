import { CouponCreateInput, CouponSearchFilter, CouponsIssuedSearchFilter } from '@/core/shared/service/admin/types/coupons';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { CouponOutput } from '@/core/shared/service/output/coupon-output';
import { CouponUserOutput } from '@/core/shared/service/output/coupon-user-output';

/** @apis coupons (쿠폰) */
const COUPONS_APIS = {
  ['coupons']: {
    /** @method get 쿠폰 조회 */
    get: async (queryString: CouponSearchFilter) => {
      const { uri } = ADMIN_URIS['coupons'](queryString);
      return await requestWithAuth<{ data: CouponOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
    /** @method post 쿠폰 생성 */
    post: async (payload: CouponCreateInput) => {
      const { uri } = ADMIN_URIS['coupons']();
      return await requestWithAuth<{ data: CouponOutput }>(Operation.POST, uri, payload);
    },
  },
  ['coupons/duplicate/keyword']: {
    /** @method post 쿠폰 코드 중복 체크 */
    post: async (payload: { keyword: string }) => {
      const { uri } = ADMIN_URIS['coupons/duplicate/keyword']();
      return await requestWithAuth<{ data: boolean }>(Operation.POST, uri, payload);
    },
  },
  ['coupons/issued']: {
    /** @method get 쿠폰 발급 내역 조회 */
    get: async (queryString: CouponsIssuedSearchFilter) => {
      const { uri } = ADMIN_URIS['coupons/issued'](queryString);
      return await requestWithAuth<{ data: CouponUserOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  ['coupons/:couponId']: {
    /** @method get 쿠폰 상세 조회 */
    get: async (couponId: string) => {
      const { uri } = ADMIN_URIS['coupons/:couponId'](couponId);
      return await requestWithAuth<{ data: CouponOutput }>(Operation.GET, uri);
    },
    /** @method put 쿠폰 수정 */
    put: async (couponId: string, payload: CouponCreateInput) => {
      const { uri } = ADMIN_URIS['coupons/:couponId'](couponId);
      return await requestWithAuth<{ data: CouponOutput }>(Operation.PUT, uri, payload);
    },
    /** @method delete 쿠폰 삭제 */
    delete: async (couponId: string) => {
      const { uri } = ADMIN_URIS['coupons/:couponId'](couponId);
      return await requestWithAuth<{ data: true }>(Operation.DELETE, uri);
    },
  },
  ['coupons/:couponId/issue']: {
    /** @method post 쿠폰 발급 */
    post: async (couponId: string, payload: { userIds: UUIDAsString[]; message: string }) => {
      const { uri } = ADMIN_URIS['coupons/:couponId/issue'](couponId);
      return await requestWithAuth<{ data: CouponUserOutput }>(Operation.POST, uri, payload);
    },
  },
  ['coupons/:couponId/suspend']: {
    /** @method patch 쿠폰 중지 */
    patch: async (couponId: string) => {
      const { uri } = ADMIN_URIS['coupons/:couponId/suspend'](couponId);
      return await requestWithAuth<{ data: CouponOutput }>(Operation.PATCH, uri);
    },
  },
  ['coupons/:couponId/unpublish']: {
    /** @method patch 쿠폰 비활성화 */
    patch: async (couponId: string) => {
      const { uri } = ADMIN_URIS['coupons/:couponId/unpublish'](couponId);
      return await requestWithAuth<{ data: CouponOutput }>(Operation.PATCH, uri);
    },
  },
  ['coupons/:couponId/resume']: {
    /** @method patch 쿠폰 재개 */
    patch: async (couponId: string) => {
      const { uri } = ADMIN_URIS['coupons/:couponId/resume'](couponId);
      return await requestWithAuth<{ data: CouponOutput }>(Operation.PATCH, uri);
    },
  },
};

export default COUPONS_APIS;
