import { DoubleAsNumber } from '@/core/utils/types/overridable/primitive';
import { PaymentMethod } from '@/core/shared/service/enum/payment-method';

export enum PG {
  PORTONE = 'portone',
  PORTTWO = 'porttwo',
  FAKE = 'fake',
}

/** 결제 완료 요청 */
export type CheckoutCompleteInput = {
  /** 적립 포인트 사용량 */
  mileage: DoubleAsNumber;

  /** 예치금 사용량 */
  deposit: DoubleAsNumber;

  /** 결제 데이터 */
  payment: {
    /** PG사 키워드 (portone / porttwo / fake) */
    pg: PG;

    /** 결제 방식 */
    method: PaymentMethod;

    /** 결제 금액 */
    amount: DoubleAsNumber;

    /** toss 전용 */
    paymentKey?: string;

    /** portone 전용 */
    impUid?: string;

    /** fake 전용 - false로 보내면 결제 실패 시뮬레이션 */
    action?: boolean;
  };

  /** 구매자 정보 */
  contact: {
    /** 이름 */
    name: string;

    /** 이메일 */
    email: string;

    /** 전화번호 (국내몰 한정 필수) */
    phone?: string;
  };
};
