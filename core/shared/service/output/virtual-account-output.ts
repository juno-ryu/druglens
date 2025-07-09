import { ISODateString } from 'next-auth';

/** 가상계좌 정보 (VBANK 결제 시 사용) */
export type VirtualAccountOutput = {
  /** 은행 코드
   * @example "IBK"
   */
  bankCode: string;

  /** 은행명
   * @example "기업은행"
   */
  bankName: string;

  /** 계좌번호
   * @example "1234567890"
   */
  accountNumber: string;

  /** 계좌주
   * @example "케이지이니시스"
   */
  accountHolder: string;

  /** 만료일시
   * @example "2025-05-17T01:23:00Z"
   */
  expiresAt: ISODateString;
};
