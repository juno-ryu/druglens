import { OrderableType } from '@/core/shared/service/enum/orderable-type';
import { AssetOrderableOutput } from '@/core/shared/service/output/aseet-orderable-output';
import { SerialOrderableOutput } from '@/core/shared/service/output/serial-orderable-output';

/**
 * @description 주문 상품 구분에 따른 타입 Narrowing 유틸리티
 * 이 유틸리티는 주문 상품의 `orderableType`에 따라 해당하는 주문 상품 타입을 Narrowing 함.
 * @example
 * ```ts
 * import { isOrderableType } from '@/core/utils/types/narrowing/orderable';
 * import { OrderableType } from '@/core/shared/service/enum/orderable-type';
 * import { OrderItemRootOutput } from '@/core/shared/service/output/order-item-root-output';
 *
 * const order: OrderItemRootOutput = getOrderData(); // 주문 데이터 가져오기
 *
 * if (isOrderableType(order, OrderableType.ASSET)) {
 *  console.log(order.orderable.assetName);
 * }
 * if (isOrderableType(order, OrderableType.SERIAL)) {
 *  console.log(order.orderable.serialNumber);
 * }
 */
type HasOrderableFields = {
  orderableType: OrderableType;
  orderable: AssetOrderableOutput | SerialOrderableOutput;
};

type OrderableTypeToOutputMap = {
  [OrderableType.ASSET]: AssetOrderableOutput;
  [OrderableType.SERIAL]: SerialOrderableOutput;
};

export function isOrderableType<T extends OrderableType, U extends HasOrderableFields>(item: U, type: T): item is U & { orderable: OrderableTypeToOutputMap[T] } {
  return item.orderableType === type;
}
