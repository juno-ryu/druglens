import { DoubleAsNumber } from '@/core/utils/types/overridable/primitive';

/** 압축 파일 세부 내용 */
export type PresignedUploadedComponent = {
  /** 파일 이름 */
  name: string;
  /** 파일 사이즈 */
  size: DoubleAsNumber;
};
