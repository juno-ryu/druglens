import { ISODateString } from 'next-auth';
import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { ExpireType } from '@/core/shared/service/enum/expire-type';

export type CouponExpirationInput = {
  type: ExpireType;
  since?: ISODateString;
  until?: ISODateString;
  days?: IntAsNumber;
};
