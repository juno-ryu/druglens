import { RejectionDetailOutput } from '@/core/shared/service/output/brand-output/rejection-detail-output';

/** 브랜드 거부 정보 조회 */
export type BrandRejectionInfoOutput = {
  /** 브랜드 거부 정보 */
  brandRejection: RejectionDetailOutput;
  /** 정산 정보 거부 정보 */
  settleRejection: RejectionDetailOutput;
};
