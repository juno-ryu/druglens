import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { CouponPublicOutput } from '@/core/shared/service/output/coupon-public-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

export type CouponUserOutput = {
  /** ID */
  id: UUIDAsString;
  /** 쿠폰 ID */
  couponId: UUIDAsString;
  /** 유저 (TODO: null로 오는 문제가 있음) */
  user: UserOutput | null;
  /** 사용 시작일 */
  since: ISODateString;
  /** 사용 종료일 */
  until?: ISODateString;
  /** 쿠폰 코드 */
  code?: string;
  /** 사용일 */
  usedAt?: ISODateString;
  /** 생성일(지급일) */
  createdAt: ISODateString;
  /** 쿠폰 상세 정보 */
  coupon: CouponPublicOutput;
};
