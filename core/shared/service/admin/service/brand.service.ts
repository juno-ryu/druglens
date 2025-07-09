import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';

/** @apis brand (브랜드) */
const BRAND_APIS = {
  ['brand/upload/personal/id-card']: {
    /**  @method post brand/upload/personal/id-card (개인 신분증 파일 업로드) */
    post: async (payload: FormData) => {
      const { uri } = ADMIN_URIS['brand/upload/personal/id-card']();
      return await requestWithAuth<{ data: string }>(Operation.POST, uri, payload);
    },
  },
  ['brand/upload/personal/bank-book']: {
    /**  @method post brand/upload/personal/bank-book (개인 통장 사본 업로드) */
    post: async (payload: FormData) => {
      const { uri } = ADMIN_URIS['brand/upload/personal/bank-book']();
      return await requestWithAuth<{ data: string }>(Operation.POST, uri, payload);
    },
  },
  ['brand/upload/company/register']: {
    /**  @method post brand/upload/company/register (사업자 등록증 파일 업로드) */
    post: async (payload: FormData) => {
      const { uri } = ADMIN_URIS['brand/upload/company/register']();
      return await requestWithAuth<{ data: string }>(Operation.POST, uri, payload);
    },
  },
  ['brand/upload/company/tax-document']: {
    /**  @method post brand/upload/company/tax-document (세금 관련 증빙 서류 업로드) */
    post: async (payload: FormData) => {
      const { uri } = ADMIN_URIS['brand/upload/company/tax-document']();
      return await requestWithAuth<{ data: string }>(Operation.POST, uri, payload);
    },
  },
  ['brand/download/:fileId']: {
    /**  @method get brand/download/:fileId (이미지 다운로드 URL 조회) */
    get: async (fileId: string) => {
      const { uri, tag } = ADMIN_URIS['brand/download/:fileId'](fileId);
      return await requestWithAuth<{ data: URL }>(Operation.GET, uri);
    },
  },
};

export default BRAND_APIS;
