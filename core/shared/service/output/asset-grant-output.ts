import { Nullable } from '@/core/utils/types/selector/flexible';
import { AssetGrantTargetOutput } from '@/core/shared/service/output/asset-grant-target-output';
import { AssetLicensedWorkOutput } from '@/core/shared/service/output/asset-licensed-work-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 구매자의 에셋 사용 권한 정보 전달 */
export type AssetGrantOutput = {
  /** 에셋 사용 권한 ID */
  id: string;
  /** 사용권 타입 */
  license: string;
  /** 팀/회사명 */
  groupName: Nullable<string>;
  /** 생성 일시 */
  createdAt: string;
  /** 유저 정보 */
  user: Nullable<UserOutput>;
  grantTarget: Nullable<AssetGrantTargetOutput[]>;
  /** 창작자명(창작물명) */
  works: Nullable<AssetLicensedWorkOutput[]>;
};
