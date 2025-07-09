import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { CartItemOutput } from '@/core/shared/service/output/cart-item-output';

/** @apis cart (장바구니) */
const CART_APIS = {
  /** @apis cart (장바구니 목록 조회) */
  ['cart']: {
    get: async () => {
      const { uri, tag } = ACON_URIS['cart']();
      return requestWithAuth<{ data: CartItemOutput[] }>(Operation.GET, uri, undefined, { next: { tags: [tag] } });
    },
  },
  /** @apis cart/count (장바구니 카운트 조회) */
  ['cart/count']: {
    get: async () => {
      const { uri, tag } = ACON_URIS['cart/count']();
      return requestWithAuth<{ data: IntAsNumber }>(Operation.GET, uri, undefined, { next: { tags: [tag] } });
    },
  },
  /** @apis cart (장바구니 목록 주문) */
  ['cart/order']: {
    post: async (itemIds: UUIDAsString[]) => {
      const { uri } = ACON_URIS['cart/order']();
      return requestWithAuth<{ data: UUIDAsString }>(Operation.POST, uri, { itemIds });
    },
  },
  /** @apis cart (장바구니 목록 삭제) */
  ['cart/destroy']: {
    post: async (itemIds: UUIDAsString[]) => {
      const { uri } = ACON_URIS['cart/destroy']();
      return requestWithAuth(Operation.POST, uri, { itemIds });
    },
  },
};

export default CART_APIS;
