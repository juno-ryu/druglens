import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CountryCode } from '@/core/shared/service/enum/country-code';
import { AdminOutput } from '@/core/shared/service/output/admin-output';
import { BrandPublicOutput } from '@/core/shared/service/output/brand-output/brand-public-output';
import { MarketingAgreeOutput } from '@/core/shared/service/output/marketing-agree-output';
import { MemberOutput } from '@/core/shared/service/output/member-output';
import { UserSocialOutput } from '@/core/shared/service/output/user-social-output';

/** 유저의 정보를 반환 */
export type UserOutput = {
  /** ID */
  id: UUIDAsString;
  /** Email */
  email: string;
  /** 이름 */
  name: string;
  /** 국적 */
  country: CountryCode;
  /** 휴대폰번호 */
  phoneNumber: {
    value: string;
    region: string;
  };
  /** Acon 회원 정보 */
  member: Nullable<MemberOutput>;
  /** Admin 정보 */
  admin: Nullable<AdminOutput>;
  /** 소셜 정보 */
  social: Nullable<UserSocialOutput>;
  /** 조직 정보 */
  organization: Nullable<{
    id: UUIDAsString;
    name: string;
    brand: Nullable<Array<BrandPublicOutput>>;
  }>;
  /** 마케팅 수신동의 정보 */
  marketing: Nullable<Array<MarketingAgreeOutput>>;
  /** 가입일 (UTC) */
  createdAt: ISODateString;
  /** 최근 접속일 (UTC) */
  lastLoginAt: Nullable<ISODateString>;
};
