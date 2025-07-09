import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { LocalizeOutput } from '@/core/shared/service/output/localize-output';

/** 태그 정보 */
export type TagOutput = {
  /** ID */
  id: UUIDAsString;
  /** 태그 단어 */
  word: string;
  /** 생성일시 */
  createdAt: ISODateString;
  /** 다국어 정보 */
  localizes: Nullable<Array<LocalizeOutput>>;
};
