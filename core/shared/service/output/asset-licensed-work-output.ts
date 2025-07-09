import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 구매한 상품의 창작물명(창작자명) 정보 */
export type AssetLicensedWorkOutput = {
  id: UUIDAsString;
  title: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};
