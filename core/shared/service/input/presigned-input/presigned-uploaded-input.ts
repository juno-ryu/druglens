import { PresignedUploadedComponent } from '@/core/shared/service/input/presigned-input/presigned-uploaded-component';

/** 신규 파일 등록 */
export type PresignedUploadedInput = {
  /** 임시 업로드 파일키 */
  fileKey: string;
  /** 사용자 파일명 */
  clientname: string;
  /** 압축 파일 세부 내용 */
  components?: PresignedUploadedComponent[];
};
