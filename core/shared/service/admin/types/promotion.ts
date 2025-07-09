import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

export type PromotionSlugDuplicateInput = {
  slug: string;
  since: ISODateString;
  until: ISODateString;
  excludeId?: UUIDAsString;
};
