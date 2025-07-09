import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { LicensedWork } from '@/core/shared/service/input/asset-input/licensed-work';

export type PostGrantWorksPayload = {
  /** 팀/회사명 */
  groupName: Nullable<string>;
  /** 사용권 이름 정보 */
  licensedWorks: LicensedWork[];
};

export type PostDownloadUrlOutput = Map<UUIDAsString, string>;
