import { ISODateString } from 'next-auth';
import { DoubleAsNumber, IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { OrderableType } from '@/core/shared/service/enum/orderable-type';
import { AssetOrderableOutput } from '@/core/shared/service/output/aseet-orderable-output';
import { SerialOrderableOutput } from '@/core/shared/service/output/serial-orderable-output';

/** 장바구니 상품 정보를 반환 */
export type CartItemOutput = {
  /** ID */
  id: UUIDAsString;

  /** 정가 */
  regularPrice: DoubleAsNumber;

  /** 판매가 */
  priceAmount: DoubleAsNumber;

  /** 상품 수량 */
  quantity: IntAsNumber;

  /** 등록일시 */
  createdAt: ISODateString; // ISO 8601 datetime

  /** 주문 대상 상품 타입 */
  orderableType: OrderableType;

  /** 주문 대상 상품 정보 */
  orderable: AssetOrderableOutput | SerialOrderableOutput; // SketchupOrderableOutput 미구현
};
