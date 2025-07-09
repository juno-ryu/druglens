import {
  BrandsSearchFilter,
  PostBrandIdIntroducePayload,
  PostBrandIdReapplyPayload,
  PostBrandIdSettlesPayload,
  PostBrandWithSettlePayload,
} from '@/core/shared/service/hub/types/brands';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';
import { BrandHubOutput } from '@/core/shared/service/output/brand-output/brand-hub-output';
import { BrandRejectionInfoOutput } from '@/core/shared/service/output/brand-output/brand-rejection-info-output';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { SortOutput } from '@/core/shared/service/output/common/sort-output';

/** @apis brands (브랜드) */
const BRANDS_APIS = {
  ['brands']: {
    get: async (searchFilter?: BrandsSearchFilter) => {
      const { uri } = HUB_URIS['brands'](searchFilter);
      return await requestWithAuth<{ data: BrandHubOutput[]; pagination: PaginationOutput; sort: SortOutput[] }>(Operation.GET, uri);
    },
    /** @deprecated */
    post: async (data: any) => {
      const { uri } = HUB_URIS['brands']();
      return await requestWithAuth<any>(Operation.POST, uri, data);
    },
  },
  /** @apis brands/brand-with-settle (브랜드, 정산 정보 생성) */
  ['brands/brand-with-settle']: {
    post: async (payload: PostBrandWithSettlePayload) => {
      const { uri } = HUB_URIS['brands/brand-with-settle']();
      return await requestWithAuth<{ data: BrandHubOutput }>(Operation.POST, uri, payload);
    },
  },
  /** @apis brands/:brandId (브랜드 조회) */
  ['brands/:brandId']: {
    get: async (brandId: string) => {
      const { uri } = HUB_URIS['brands/:brandId'](brandId);
      return await requestWithAuth<{ data: BrandHubOutput }>(Operation.GET, uri);
    },
  },
  /** @apis brands/:brandId/rejection-info (파트너 심사 반려 정보 조회) */
  ['brands/:brandId/rejection-info']: {
    get: async (brandId: string) => {
      const { uri } = HUB_URIS['brands/:brandId/rejection-info'](brandId);
      return await requestWithAuth<{ data: BrandRejectionInfoOutput } & BrandRejectionInfoOutput>(Operation.GET, uri);
    },
  },
  /** @apis brands/:brandId/reapply (브랜드, 정산 정보 업데이트) */
  ['brands/:brandId/reapply']: {
    post: async (brandId: string, payload: PostBrandIdReapplyPayload) => {
      const { uri } = HUB_URIS['brands/:brandId/reapply'](brandId);
      return await requestWithAuth<{ data: BrandHubOutput }>(Operation.POST, uri, payload);
    },
  },
  /** @apis brands/:brandId/introduce (소개 수정) */
  ['brands/:brandId/introduce']: {
    post: async (brandId: string, payload: PostBrandIdIntroducePayload) => {
      const { uri } = HUB_URIS['brands/:brandId/introduce'](brandId);
      return await requestWithAuth<{ data: BrandHubOutput }>(Operation.POST, uri, payload);
    },
  },
  /** @apis brands/:brandId/settles (브랜드 정산 정보 등록) */
  ['brands/:brandId/settles']: {
    post: async (brandId: string, payload: PostBrandIdSettlesPayload) => {
      const { uri } = HUB_URIS['brands/:brandId/settles'](brandId);
      return await requestWithAuth<{ data: unknown }>(Operation.POST, uri, payload);
    },
  },
};

export default BRANDS_APIS;
