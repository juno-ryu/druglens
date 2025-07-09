import { RegionCode } from '@/core/shared/service/enum/region-code';
import { UserAdultStatus } from '@/core/shared/service/enum/user-adult-status';

/** 유저의 성인 인증 정보를 반환 */
/** 결과를 받는다고 성인 인증이 된 상태가 아님, status를 확인 해야 됨 */
export type UserAdultOutput = {
  /** 확인하는 몰 정보 */
  region: RegionCode;
  /** 성인 인증 상태 */
  status: UserAdultStatus;
  /** 입력한 생년월일 */
  birthday: string;
};
