import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { FileOutput } from '@/core/shared/service/output/file-output';
import { OrganizationOutput } from '@/core/shared/service/output/organization-output';
import { SerialDurationOutput } from '@/core/shared/service/output/serial-duration-output';

/** 시리얼코드 정보 */
export type SerialOutput = {
  /** ID */
  id: UUIDAsString;
  /** 이름 */
  name: string;
  /** 판매자 조직 정보 */
  organization: OrganizationOutput;
  /** 기간정보 */
  durations: Nullable<Array<SerialDurationOutput>>;
  /** 첨부 파일 정보 */
  files: Nullable<Array<FileOutput>>;
};
