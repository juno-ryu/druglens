import { ISODateString } from 'next-auth';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CountryCode } from '@/core/shared/service/enum/country-code';
import { UserTypes } from '@/core/shared/service/enum/user-types';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';

export enum UsersSearchOptions {
  EMAIL = 'email',
  NAME = 'name',
}

export interface UsersSearchFilter extends PageableInput, SortInput {
  /** (FE) 검색 옵션 */
  searchOptions?: Nullable<string>;
  /** 조회 하고 싶은 유저의 타입 */
  userType?: Nullable<UserTypes>;
  /** 조회 하고 싶은 유저의 국적 */
  country?: Nullable<CountryCode>;
  /** 조회 하고 싶은 유저의 이메일 */
  email?: Nullable<string>;
  /** 조회 하고 싶은 유저의 이름 */
  name?: Nullable<string>;
  /** 조회 하고 싶은 유저의 가입 시작일 */
  registerStartAt?: Nullable<ISODateString>;
  /** 조회 하고 싶은 유저의 가입 종료일 */
  registerEndAt?: Nullable<ISODateString>;
  /** ::TODO:: */
  marketings?: Nullable<string>;
  /** ::TODO:: */
  condition?: Nullable<string>;
}
