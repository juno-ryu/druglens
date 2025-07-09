import { IntAsNumber } from '@/core/utils/types/overridable/primitive';

/** 특정 계정 소유의 브랜드 상태별 카운트 */
export type BrandStatusCountOutput = {
  /** 전체 브랜드 */
  total: IntAsNumber;
  /** 요청 브랜드 */
  request: IntAsNumber;
  /** 승인 브랜드 */
  approve: IntAsNumber;
  /** 거절 브랜드 */
  reject: IntAsNumber;
  /** 퇴점 브랜드 */
  leave: IntAsNumber;
};
