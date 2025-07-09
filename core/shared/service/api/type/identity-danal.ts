import { BooleanAsString, NumberAsString } from '@/core/utils/types/overridable/primitive';

export type IdentityReadyPayload = {
  TransR_AGELIMIT?: string;
};

export type IdentityFinallyOutput = {
  data: BooleanAsString;
  TID: NumberAsString;
  CI: string;
  DI: string;
  NAME: string;
  CARRIER: string;
  PHONE: NumberAsString;
  DOB: NumberAsString;
  SEX: NumberAsString;
};
