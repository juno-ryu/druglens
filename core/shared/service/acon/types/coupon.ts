import { ISODateString } from 'next-auth';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { PageableInput } from '@/core/shared/service/input/common/pageable';

/** 실제 zeus 서버에 정의된 쿠폰 검색 필터가 아니라 프론트에서 필터 동작을 구현하기 위해 두었습니다. */
export interface CouponSearchFilter extends PageableInput {
  since: Nullable<ISODateString>;
  until: Nullable<ISODateString>;
  isValid: Nullable<boolean>;
}
