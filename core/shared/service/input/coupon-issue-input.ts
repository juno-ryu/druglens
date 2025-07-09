import { ISODateString } from 'next-auth';
import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { IssueType } from '@/core/shared/service/enum/issue-type';

export type CouponIssueInput = {
  type: IssueType;
  limit: IntAsNumber;
  perUser: IntAsNumber;
  since: ISODateString;
  until: ISODateString;
  // TODO: docs 상에는 required로 돼있어서 확인 필요함
  keyword?: string;
};
