import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

/** 거부 정보에 대한 상세 내용 */
export type RejectionDetailOutput = {
  /** 거부 메시지 */
  message: Nullable<string>;
  /** 거부한 사용자 ID */
  rejectedBy: UUIDAsString;
  /** 거부 시간 */
  rejectedAt: string;
};
