import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis marketings (마케팅) */
export const MARKETINGS_URIS = {
  /** @apis marketings/agree (마케팅 수신 동의 변경) */
  ['marketings/agree']: () => ({
    uri: `${BASE_URL}/marketings/agree`,
    tag: `${BASE_SERVICE}/marketings/agree`,
  }),
  /** @apis marketings/invide-code (추천인 코드 생성) */
  ['marketings/invide-code']: () => ({
    uri: `${BASE_URL}/marketings/invide-code`,
    tag: `${BASE_SERVICE}/marketings/invide-code`,
  }),
} as const;
