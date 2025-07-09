import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/hub/hub.common';

/** @apis brand (브랜드 공통) */
export const BRAND_URIS = {
  /** @apis brand/upload/personal/id-card (개인 신분증 파일 업로드) */
  ['brand/upload/personal/id-card']: () => ({
    uri: `${BASE_URL}/brand/upload/personal/id-card`,
    tag: `${BASE_SERVICE}/brand/upload/personal/id-card`,
  }),
  /** @apis brand/upload/personal/bank-book (개인 통장 사본 업로드) */
  ['brand/upload/personal/bank-book']: () => ({
    uri: `${BASE_URL}/brand/upload/personal/bank-book`,
    tag: `${BASE_SERVICE}/brand/upload/personal/bank-book`,
  }),
  /** @apis brand/upload/company/register (사업자 등록증 파일 업로드) */
  ['brand/upload/company/register']: () => ({
    uri: `${BASE_URL}/brand/upload/company/register`,
    tag: `${BASE_SERVICE}/brand/upload/company/register`,
  }),
  /** @apis brand/upload/company/tax-document (세금 관련 증빙 서류 업로드) */
  ['brand/upload/company/tax-document']: () => ({
    uri: `${BASE_URL}/brand/upload/company/tax-document`,
    tag: `${BASE_SERVICE}/brand/upload/company/tax-document`,
  }),
  /** @apis brand/download/:fileId (이미지 다운로드 URL 조회) */
  ['brand/download/:fileId']: (fileId: string) => ({
    uri: `${BASE_URL}/brand/download/${fileId}`,
    tag: `${BASE_SERVICE}/brand/download/${fileId}`,
  }),
  /** @apis brand/check-usable-names (브랜드 이름 사용 가능 여부 확인) */
  ['brand/check-usable-names']: (language: LanguageCode, name: string) => ({
    uri: transformQueryUri(`${BASE_URL}/brand/check-usable-names`, { language, name }),
    tag: `${BASE_SERVICE}/brand/check-usable-names`,
    filter: transformQueryUri('', { language, name }),
  }),
} as const;
