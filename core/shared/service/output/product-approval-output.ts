// ProductApprovalOutput.ts

import { Nullable } from '@/core/utils/types/selector/flexible';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import { MemberOutput } from '@/core/shared/service/output/member-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

// 상품 검수 기록
export interface ProductApprovalOutput {
  /**
   * 상태
   * @example "APPROVED"
   */
  status: ProductRevisionStatus;

  /**
   * 메시지
   * @example "해당 상품은 승인되었습니다."
   */
  message: Nullable<string>;

  /**
   * 생성일시
   * @example "2024-05-01T15:00:00Z"
   */
  createdAt: string;

  /**
   * 사용자
   * @example "홍길동"
   */
  user: Nullable<UserOutput>;
}
