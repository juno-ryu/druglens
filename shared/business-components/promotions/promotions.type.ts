import { PromotionItemPostInput } from '@/core/shared/service/admin/types/promotions';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable, Optional } from '@/core/utils/types/selector/flexible';
import { PromotionInput } from '@/core/shared/service/input/promotion-input/promotion-input';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { PromotionItemOutput } from '@/core/shared/service/output/promotion-item-output';

export type PromotionItemOutputWithInput = Omit<PromotionItemOutput, 'id'> & {
  id: Nullable<UUIDAsString>;
};

export type FormValues = PromotionInput & {
  products: Optional<PromotionItemOutputWithInput[]>;
};
