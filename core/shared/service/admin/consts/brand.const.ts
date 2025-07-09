import { BrandsSearchFilter } from '@/core/shared/service/admin/types/brands';
import { UsersSearchFilter } from '@/core/shared/service/admin/types/users';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis brand (브랜드) */
export const BRAND_URIS = {
  ['brand/upload/personal/id-card']: () => ({
    uri: `${BASE_URL}/brand/upload/personal/id-card`,
    tag: `${BASE_SERVICE}/brand/upload/personal/id-card`,
  }),

  ['brand/upload/personal/bank-book']: () => ({
    uri: `${BASE_URL}/brand/upload/personal/bank-book`,
    tag: `${BASE_SERVICE}/brand/upload/personal/bank-book`,
  }),

  ['brand/upload/company/register']: () => ({
    uri: `${BASE_URL}/brand/upload/company/register`,
    tag: `${BASE_SERVICE}/brand/upload/company/register`,
  }),

  ['brand/upload/company/tax-document']: () => ({
    uri: `${BASE_URL}/brand/upload/company/tax-document`,
    tag: `${BASE_SERVICE}/brand/upload/company/tax-document`,
  }),

  ['brand/download/:fileId']: (fileId: string) => ({
    uri: `${BASE_URL}/brand/download/${fileId}`,
    tag: `${BASE_SERVICE}/brand/download/${fileId}`,
  }),
} as const;
