import { PostCashChargeOrdersPayload } from '@/core/shared/service/acon/types/cash-charge';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { CheckoutCompleteInput } from '@/core/shared/service/input/checkout-complete-input';
import { CashChargeOptionOutput } from '@/core/shared/service/output/cash-charge-option-output';
import { CashChargeOrderOutput } from '@/core/shared/service/output/cash-charge-order-output';

/** @apis cash-charge (캐시 충전) */
const CASH_CHARGE_APIS = {
  /** @apis cash-charge/options (옵션 목록) */
  ['cash-charge/options']: {
    get: async () => {
      const { uri } = ACON_URIS['cash-charge/options']();
      return requestWithAuth<{ data: CashChargeOptionOutput[] }>(Operation.GET, uri);
    },
  },
  /** @apis cash-charge/orders (주문 생성) */
  ['cash-charge/orders']: {
    post: async (payload: PostCashChargeOrdersPayload) => {
      const { uri } = ACON_URIS['cash-charge/orders']();
      return requestWithAuth<{ data: CashChargeOrderOutput }>(Operation.POST, uri, payload);
    },
  },
  /** @apis cash-charge/:orderNo/payment/complete (결제 완료) */
  ['cash-charge/:orderNo/payment/complete']: {
    post: async (orderNo: string, payload: CheckoutCompleteInput['payment']) => {
      const { uri } = ACON_URIS['cash-charge/:orderNo/payment/complete'](orderNo);
      return requestWithAuth<{ data: CashChargeOrderOutput }>(Operation.POST, uri, payload);
    },
  },
  /** @apis cash-charge/orders/:orderNo (주문 조회) */
  ['cash-charge/orders/:orderNo']: {
    get: async (orderNo: string) => {
      const { uri } = ACON_URIS['cash-charge/orders/:orderNo'](orderNo);
      return requestWithAuth<{ data: CashChargeOrderOutput }>(Operation.GET, uri);
    },
  },
};

export default CASH_CHARGE_APIS;
