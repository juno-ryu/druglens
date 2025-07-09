import { PromotionItemPostInput, PromotionSearchFilter } from '@/core/shared/service/admin/types/promotions';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PromotionInput } from '@/core/shared/service/input/promotion-input/promotion-input';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { PromotionItemOutput } from '@/core/shared/service/output/promotion-item-output';
import { PromotionOutput } from '@/core/shared/service/output/promotion-output';

/** @apis promotions (프로모션) */
const PROMOTIONS_APIS = {
  ['promotions']: {
    /** @method get 프로모션 조회 */
    get: async (queryString: PromotionSearchFilter) => {
      const { uri } = ADMIN_URIS['promotions'](queryString);
      return await requestWithAuth<{ data: PromotionOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
    post: async (payload: PromotionInput) => {
      const { uri } = ADMIN_URIS['promotions']();
      return await requestWithAuth<{ data: PromotionOutput }>(Operation.POST, uri, payload);
    },
    delete: async (promotionIds: UUIDAsString[]) => {
      const { uri } = ADMIN_URIS['promotions']();
      return await requestWithAuth(Operation.DELETE, uri, { ids: promotionIds });
    },
  },
  ['promotions/:promotionId']: {
    /** @method get 프로모션 상세 조회 */
    get: async (promotionId: UUIDAsString) => {
      const { uri, tag } = ADMIN_URIS['promotions/:promotionId'](promotionId);
      return await requestWithAuth<{ data: PromotionOutput }>(Operation.GET, uri, undefined, {
        next: { tags: [tag] },
      });
    },
    /** @method put 프로모션 상세 수정 */
    put: async (promotionId: UUIDAsString, payload: PromotionInput) => {
      const { uri } = ADMIN_URIS['promotions/:promotionId'](promotionId);
      return await requestWithAuth<{ data: PromotionOutput }>(Operation.PUT, uri, payload);
    },
  },
  ['promotions/:promotionId/publish']: {
    /** @method patch 프로모션 활성화 */
    patch: async (promotionId: UUIDAsString) => {
      const { uri } = ADMIN_URIS['promotions/:promotionId/publish'](promotionId);
      return await requestWithAuth<{ data: PromotionOutput }>(Operation.PATCH, uri);
    },
  },
  ['promotions/:promotionId/unpublish']: {
    /** @method patch 프로모션 비활성화 */
    patch: async (promotionId: UUIDAsString) => {
      const { uri } = ADMIN_URIS['promotions/:promotionId/unpublish'](promotionId);
      return await requestWithAuth<{ data: PromotionOutput }>(Operation.PATCH, uri);
    },
  },
  ['promotions/:promotionId/resume']: {
    /** @method patch 프로모션 재개 */
    patch: async (promotionId: UUIDAsString) => {
      const { uri } = ADMIN_URIS['promotions/:promotionId/resume'](promotionId);
      return await requestWithAuth<{ data: PromotionOutput }>(Operation.PATCH, uri);
    },
  },
  ['promotions/:promotionId/suspend']: {
    /** @method patch 프로모션 중지 */
    patch: async (promotionId: UUIDAsString) => {
      const { uri } = ADMIN_URIS['promotions/:promotionId/suspend'](promotionId);
      return await requestWithAuth<{ data: PromotionOutput }>(Operation.PATCH, uri);
    },
  },
  ['promotions/:promotionId/items']: {
    /** @method get 프로모션 대상 상품 조회 */
    get: async (promotionId: UUIDAsString) => {
      const { uri, tag } = ADMIN_URIS['promotions/:promotionId/items'](promotionId);
      return await requestWithAuth<{ data: PromotionItemOutput[] }>(Operation.GET, uri, undefined, {
        next: { tags: [tag] },
      });
    },
    /** @method post 프로모션 대상 상품 등록 */
    post: async (promotionId: UUIDAsString, payload: PromotionItemPostInput[]) => {
      const { uri } = ADMIN_URIS['promotions/:promotionId/items'](promotionId);
      return await requestWithAuth<{ data: PromotionItemOutput[] }>(Operation.POST, uri, payload);
    },
    /** @method delete 프로모션 대상 상품 삭제 */
    delete: async (promotionId: UUIDAsString, itemIds: UUIDAsString[]) => {
      const { uri } = ADMIN_URIS['promotions/:promotionId/items'](promotionId);
      return await requestWithAuth(Operation.DELETE, uri, itemIds);
    },
  },
  ['promotions/:promotionId/items/resume']: {
    /** @method patch 프로모션 대상 상품 재개 */
    patch: async (promotionId: UUIDAsString, itemIds: UUIDAsString) => {
      const { uri } = ADMIN_URIS['promotions/:promotionId/items/resume'](promotionId);
      return await requestWithAuth<{ data: PromotionItemOutput[] }>(Operation.PATCH, uri, itemIds);
    },
  },
  ['promotions/:promotionId/items/suspend']: {
    /** @method patch 프로모션 대상 상품 중지 */
    patch: async (promotionId: UUIDAsString, itemIds: UUIDAsString) => {
      const { uri } = ADMIN_URIS['promotions/:promotionId/items/suspend'](promotionId);
      return await requestWithAuth<{ data: PromotionItemOutput[] }>(Operation.PATCH, uri, itemIds);
    },
  },
  ['promotions/:promotionId/items/bulk-store-csv']: {
    /** @method patch 프로모션 대상 상품 중지 */
    post: async (promotionId: UUIDAsString, payload: FormData) => {
      const { uri } = ADMIN_URIS['promotions/:promotionId/items/bulk-store-csv'](promotionId);
      return await requestWithAuth<{ data: string }>(Operation.POST, uri, payload);
    },
  },
};

export default PROMOTIONS_APIS;
