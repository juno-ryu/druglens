import { ISODateString } from 'next-auth';
import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { FileOutput } from '@/core/shared/service/output/file-output';
import { LocalizeOutput } from '@/core/shared/service/output/localize-output';

/** 에셋 정보를 반환 */
export type AssetPublicOutput = {
  /** 에셋 고유 ID */
  id: UUIDAsString;

  /** 에셋명 */
  name: string;

  /** 파일 목록 */
  files: FileOutput;
};
