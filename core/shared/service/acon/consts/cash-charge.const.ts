import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis cash-charge (캐시 충전) */
export const CASH_CHARGE_URIS = {
  /** @apis cash-charge/options (옵션 목록) */
  ['cash-charge/options']: () => ({
    uri: `${BASE_URL}/cash-charge/options`,
    tag: `${BASE_SERVICE}/cash-charge/options`,
  }),
  /** @apis cash-charge/orders (주문 생성) */
  ['cash-charge/orders']: () => ({
    uri: `${BASE_URL}/cash-charge/orders`,
    tag: `${BASE_SERVICE}/cash-charge/orders`,
  }),
  /** @apis cash-charge/:orderNo/payment/complete (결제 완료) */
  ['cash-charge/:orderNo/payment/complete']: (orderNo: string) => ({
    uri: `${BASE_URL}/cash-charge/${orderNo}/payment/complete`,
    tag: `${BASE_SERVICE}/cash-charge/${orderNo}/payment/complete`,
  }),
  /** @apis cash-charge/orders/:orderNo (주문 조회) */
  ['cash-charge/orders/:orderNo']: (orderNo: string) => ({
    uri: `${BASE_URL}/cash-charge/orders/${orderNo}`,
    tag: `${BASE_SERVICE}/cash-charge/orders/${orderNo}`,
  }),
} as const;
