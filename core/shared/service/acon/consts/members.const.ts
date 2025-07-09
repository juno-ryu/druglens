import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis members (회원) */
export const MEMBERS_URIS = {
  /** @apis members/adult (성인 인증) */
  ['members/adult']: () => ({
    uri: `${BASE_URL}/members/adult`,
    tag: `${BASE_SERVICE}/members/adult`,
  }),
  /** @apis members/check-adult (성인 인증 여부 확인) */
  ['members/check-adult']: () => ({
    uri: `${BASE_URL}/members/check-adult`,
    tag: `${BASE_SERVICE}/members/check-adult`,
  }),
  /** @apis members/member-data (회원 정보 수정) */
  ['members/member-data']: () => ({
    uri: `${BASE_URL}/members/member-data`,
    tag: `${BASE_SERVICE}/members/member-data`,
  }),
  /** @apis members/brands/status (브랜드 상태 조회) */
  ['members/brands/status']: () => ({
    uri: `${BASE_URL}/members/brands/status`,
    tag: `${BASE_SERVICE}/members/brands/status`,
  }),
} as const;
