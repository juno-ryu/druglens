import { CouponSearchFilter } from '@/core/shared/service/acon/types/coupon';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis coupon (쿠폰) */
export const COUPON_URIS = {
  /** @apis list (쿠폰 목록)
   * 실제 zeus 서버에서는 미구현이고 쿠폰의 필터, 페이지네이션은 클라이언트엣 행해져야 하지만 코드의 통일성을 위해 설정합니다.
   */
  ['coupon']: (searchFilter?: CouponSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/coupon/list`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/coupon/list`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  /** @apis has (보유 쿠폰) */
  ['coupon/has']: () => ({
    uri: `${BASE_URL}/coupon/has`,
    tag: `${BASE_SERVICE}/coupon/has`,
  }),
  /** @apis issue (코드 쿠폰 발급) */
  ['coupon/issue']: () => ({
    uri: `${BASE_URL}/coupon/issue`,
    tag: `${BASE_SERVICE}/coupon/issue`,
  }),
};
