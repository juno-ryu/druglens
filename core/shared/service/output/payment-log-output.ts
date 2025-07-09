// payment-log-output.ts

import { BooleanAsString, DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { PaymentMethod } from '@/core/shared/service/enum/payment-method';
import { VirtualAccountOutput } from '@/core/shared/service/output/virtual-account-output';

/** pg 결제 정보를 반환 */
export type PaymentLogOutput = {
  /** ID
   * @example "194f90a-9349-766a-99b9-57a146ef5c5f"
   */
  id: UUIDAsString;

  /** 로그 타입
   * @example "PAY"
   */
  type: string; // LogType enum 링크 명세에 있었으나 명시되지 않아서 string 처리

  /** PG사
   * @example "portone"
   */
  pg: string;

  /** 결제방식
   * @example "CARD"
   */
  method: Nullable<PaymentMethod>;

  /** PG사 결제 방식
   * @example "간편결제"
   */
  pgMethod: Nullable<string>;

  /** 주문번호
   * @example "2505161059856584"
   */
  oid: string;

  /** PG사 거래 번호
   * @example "imp_1234567890"
   */
  transactionId: string;

  /** 통화
   * @example "KRW"
   */
  currency: Nullable<CurrencyCode>;

  /** 결제 금액
   * @example 10000
   */
  amount: DoubleAsNumber;

  /** 성공 여부
   * @example true
   */
  success: BooleanAsString;

  /** 보류 상태 (가상계좌인 경우)
   * @example false
   */
  isPending: BooleanAsString;

  /** 가상계좌 정보 (method가 VBANK인 경우) */
  virtualAccount: Nullable<VirtualAccountOutput>;

  /** 카드영수증 URL
   * @example "https://iniweb.inicis.com/DefaultWebApp/mall/cr/cm/mCmReceipt_head.jsp?noTid=StdpayCARDINIpayTest20250610164235128217&noMethod=1"
   */
  receiptUrl: Nullable<string>;
};
