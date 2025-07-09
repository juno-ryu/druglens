import { MarketingMethod } from '@/core/shared/service/enum/marketing-method';

export type PutAgreePayload = {
  agrees: Record<MarketingMethod, boolean>;
};
