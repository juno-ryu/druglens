import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { CheckoutOutput } from '@/core/shared/service/output/checkout-output';
import { MemoOutput } from '@/core/shared/service/output/memo-output';
import { OrderItemOutput } from '@/core/shared/service/output/order-item-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 주문 정보를 반환 */
export type OrderOutput = {
  /** ID */
  id: UUIDAsString;
  /** 커뮤니케이션에 사용하는 주문 번호 */
  orderNo: string;
  /** 유저 ID */
  userId: UUIDAsString;
  contactName: Nullable<string>;
  contactPhone: Nullable<UserOutput['phoneNumber']>;
  contactEmail: Nullable<string>;
  /** 결제 화폐 */
  currency: CurrencyCode;
  /** 생성일 */
  createdAt: ISODateString;
  /** 주문 완료일 */
  completedAt: Nullable<ISODateString>;
  /** 환불일 */
  revokedAt: Nullable<ISODateString>;
  /** 상품 정보 */
  items: OrderItemOutput[];
  /** 유저 정보 */
  user: UserOutput;
  /** 결제 정보 */
  checkouts: Nullable<CheckoutOutput[]>;
  /** 관리자가 남긴 메모 */
  memos: Nullable<MemoOutput[]>;
};
