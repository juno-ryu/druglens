import { LongAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 파일의 정보를 반환 */
export type FileOutput = {
  /** ID */
  id: UUIDAsString;
  /** 사용자 파일명 */
  clientname: string;
  /** 이미지의 MIME */
  mime: string;
  /** 이미지의 Size */
  size: LongAsNumber;
};
