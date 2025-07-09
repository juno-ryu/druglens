import { CategoriesOutput, CategoriesPayload } from '@/core/shared/service/admin/types/categories';
import {
  CategoryNodeReorderingOutput,
  CategoryNodeReorderingPayload,
  CategoryNodeUpdateOutput,
  CategoryNodeUpdatePayload,
} from '@/core/shared/service/admin/types/category-node-update';
import { CategoryNodesOutput, CreateCategoryNodeOutput, CreateCategoryNodePayload } from '@/core/shared/service/admin/types/category-nodes';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { CategoryItem } from '@/core/shared/service/output/category-node-output';

/** @apis categories (카테고리) */
const CATEGORIES_APIS = {
  ['categories']: {
    /** @method get 카테고리 조회 */
    get: async () => {
      const { uri } = ADMIN_URIS['categories']();
      return await requestWithAuth<CategoriesOutput>(Operation.GET, uri);
    },
    /** @method post 카테고리 생성 */
    post: async (payload: CategoriesPayload) => {
      const { uri } = ADMIN_URIS['categories']();
      return await requestWithAuth<CategoriesOutput>(Operation.POST, uri, payload);
    },
  },
  ['categories/:categoryId']: {
    /** @method put 카테고리를 수정합니다. */
    put: async (categoryId: string, payload: { title: string }) => {
      const { uri } = ADMIN_URIS['categories/:categoryId'](categoryId);
      return await requestWithAuth<CategoryItem>(Operation.PUT, uri, payload);
    },
  },
  ['categories/:categoryId/nodes']: {
    /** @method get 카테고리 노드를 트리형태로 반환 */
    get: async (categoryId: string) => {
      const { uri, tag } = ADMIN_URIS['categories/:categoryId/nodes'](categoryId);
      return await requestWithAuth<CategoryNodesOutput>(Operation.GET, uri, undefined, {
        next: { tags: [tag], revalidate: 600 },
      });
    },
    /** @method post 카테고리 노드를 생성 */
    post: async (categoryId: string, payload: CreateCategoryNodePayload) => {
      const { uri } = ADMIN_URIS['categories/:categoryId/nodes'](categoryId);
      return await requestWithAuth<CreateCategoryNodeOutput>(Operation.POST, uri, payload);
    },
  },
  ['categories/:categoryId/nodes/:nodeId']: {
    /** @method get 카테고리 노드의 상세정보를 반환 조상 노드를 순차적으로 연결한 형태로 제공 */
    get: async (categoryId: string, nodeId: string) => {
      const { uri } = ADMIN_URIS['categories/:categoryId/nodes/:categoryNodeId'](categoryId, nodeId);
      return await requestWithAuth<CategoryNodeUpdateOutput>(Operation.GET, uri);
    },
    /** @method patch 카테고리 노드 위치를 이동 */
    patch: async (categoryId: string, nodeId: string, payload: CategoryNodeReorderingPayload) => {
      const { uri } = ADMIN_URIS['categories/:categoryId/nodes/:categoryNodeId'](categoryId, nodeId);
      return await requestWithAuth<CategoryNodeReorderingOutput>(Operation.PATCH, uri, payload);
    },
    /** @method put 카테고리 노드 정보를 수정 */
    put: async (categoryId: string, nodeId: string, payload: CategoryNodeUpdatePayload) => {
      const { uri } = ADMIN_URIS['categories/:categoryId/nodes/:categoryNodeId'](categoryId, nodeId);
      return await requestWithAuth<CategoryNodeUpdateOutput>(Operation.PUT, uri, payload);
    },
    /** @method delete 카테고리 노드를 삭제. 하위 노드들도 일괄 삭제 됨. */
    delete: async (categoryId: string, nodeId: string) => {
      const { uri } = ADMIN_URIS['categories/:categoryId/nodes/:categoryNodeId'](categoryId, nodeId);
      return await requestWithAuth(Operation.DELETE, uri);
    },
  },
};

export default CATEGORIES_APIS;
