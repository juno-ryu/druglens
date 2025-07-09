import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CsStatus } from '@/core/shared/service/enum/cs-status';

/** 에이콘에서 1:1 문의하기 내역을 필터링 할 조건 */
/** 나의 문의하기 내역만 조회 가능 */
export type CsInquiryFilterInput = {
  /** 특정 카테고리에 해당하는 문의를 조회 하려고 할 때 전달 */
  categoryNodeId: Nullable<UUIDAsString>;
  /** 특정 상태의 문의를 조회 하려고 할 때 전달 */
  status: Nullable<CsStatus>;
  /** 특정 문구가 포함된 문의를 조회 하려고 할 때 전달 */
  content: Nullable<string>;
  /** 특정 날짜 이후로 등록 된 문의만 조회 하려고 할 때 전달 */
  startAt: Nullable<ISODateString>;
  /** 특정 날짜 이전에 등록 된 문의만 조회 하려고 할 때 전달 */
  endAt: Nullable<ISODateString>;
  /** 특정 유저가 작성한 문의를 조회 하려고 할 때 전달 */
  userId: Nullable<UUIDAsString>;
};
