import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis categories (카테고리) */
export const CATEGORIES_URIS = {
  ['categories']: () => ({
    uri: `${BASE_URL}/categories`,
    tag: `${BASE_SERVICE}/categories`,
  }),
  ['categories/:categoryId']: (categoryId: string) => ({
    uri: `${BASE_URL}/categories/${categoryId}`,
    tag: `${BASE_SERVICE}/categories/${categoryId}`,
  }),
  ['categories/:categoryId/nodes']: (categoryId: string) => ({
    uri: `${BASE_URL}/categories/${categoryId}/nodes`,
    tag: `${BASE_SERVICE}/categories/${categoryId}/nodes`,
  }),
  ['categories/:categoryId/nodes/:categoryNodeId']: (categoryId: string, categoryNodeId: string) => ({
    uri: `${BASE_URL}/categories/${categoryId}/nodes/${categoryNodeId}`,
    tag: `${BASE_SERVICE}/categories/${categoryId}/nodes/${categoryNodeId}`,
  }),
} as const;
