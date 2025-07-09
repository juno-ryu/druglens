import { LongAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 이미지 파일의 정보를 반환 */
export type ProductImageOutput = {
  /** ID */
  id: UUIDAsString;
  /** 이미지의 MIME */
  mime: string;
  /** 이미지의 Size */
  size: LongAsNumber;
  /** 이미지를 조회할 수 있는 URL */
  url: URL;
  /** 대표 이미지 여부 */
  isMain: boolean;
};
