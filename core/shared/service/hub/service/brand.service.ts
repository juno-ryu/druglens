import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';

/** @apis brand (브랜드 공통) */
const BRAND_APIS = {
  /** @apis brand/upload/personal/id-card (개인 신분증 파일 업로드) */
  ['brand/upload/personal/id-card']: {
    post: async (payload: FormData) => {
      const { uri } = HUB_URIS['brand/upload/personal/id-card']();
      return await requestWithAuth<{ data: string }>(Operation.POST, uri, payload);
    },
  },
  /** @apis brand/upload/personal/bank-book (개인 통장 사본 업로드) */
  ['brand/upload/personal/bank-book']: {
    post: async (payload: FormData) => {
      const { uri } = HUB_URIS['brand/upload/personal/bank-book']();
      return await requestWithAuth<{ data: string }>(Operation.POST, uri, payload);
    },
  },
  /** @apis brand/upload/company/register (사업자 등록증 파일 업로드) */
  ['brand/upload/company/register']: {
    post: async (payload: FormData) => {
      const { uri } = HUB_URIS['brand/upload/company/register']();
      return await requestWithAuth<{ data: string }>(Operation.POST, uri, payload);
    },
  },
  /** @apis brand/upload/company/tax-document (세금 관련 증빙 서류 업로드) */
  ['brand/upload/company/tax-document']: {
    post: async (payload: FormData) => {
      const { uri } = HUB_URIS['brand/upload/company/tax-document']();
      return await requestWithAuth<{ data: string }>(Operation.POST, uri, payload);
    },
  },
  /** @apis brand/download/:fileId (이미지 다운로드 URL 조회) */
  ['brand/download/:fileId']: {
    get: async (fileId: string) => {
      const { uri, tag } = HUB_URIS['brand/download/:fileId'](fileId);
      return await requestWithAuth<{ data: URL }>(Operation.GET, uri);
    },
  },
  /** @apis brand/check-usable-names (브랜드 이름 사용 가능 여부 확인) */
  ['brand/check-usable-names']: {
    get: async (language: LanguageCode, name: string) => {
      const { uri, tag } = HUB_URIS['brand/check-usable-names'](language, name);
      return await request<{ data: boolean }>(Operation.GET, uri);
    },
  },
};

export default BRAND_APIS;
