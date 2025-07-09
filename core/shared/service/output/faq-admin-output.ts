import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 어드민에서 FAQ 정보를 반환 */
export type FaqAdminOutput = {
  /** ID */
  id: UUIDAsString;
  /** 몰 코드 */
  region: RegionCode;
  /** 제목 */
  title: string;
  /** 부제목 */
  subTitle: string;
  /** 내용 */
  content: string;
  /** 작성자 */
  user: UserOutput;
  /** 생성일 */
  createdAt: ISODateString;
  /** FAQ 유형(카테고리) 정보 */
  categoryNode: Nullable<CategoryNodeOutput>;
};
