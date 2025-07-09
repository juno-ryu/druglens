import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { CouponUserOutput } from '@/core/shared/service/output/coupon-user-output';

/** @apis coupon (쿠폰) */
const COUPON_APIS = {
  ['coupon/has']: {
    get: async () => {
      const { uri } = ACON_URIS['coupon/has']();
      return requestWithAuth<{ data: CouponUserOutput[] }>(Operation.GET, uri);
    },
  },
  ['coupon/issue']: {
    post: async (payload: { code: string }) => {
      const { uri } = ACON_URIS['coupon/issue']();
      return requestWithAuth<{ data: CouponUserOutput }>(Operation.POST, uri, payload);
    },
  },
};

export default COUPON_APIS;
