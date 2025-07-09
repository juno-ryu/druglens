'use server';

import { revalidateTag } from 'next/cache';
import { PromotionSearchFilter } from '@/carpen-products/shared/service/admin/types/promotions';
import { UUIDAsString } from '@/carpen-products/utils/types/overridable/primitive';
import { ADMIN_URIS } from '@/carpen-products/shared/service/admin/admin.const';
import ADMIN_APIS from '@/carpen-products/shared/service/admin/admin.service';

export const fetchPromotions = async (searchFilter: PromotionSearchFilter) => {
  try {
    const promotionsData = await ADMIN_APIS['promotions'].get(searchFilter);
    return promotionsData;
  } catch (error) {
    return null;
  }
};

export const revalidatePromotions = async (searchFilter: PromotionSearchFilter) => {
  const { tag } = ADMIN_URIS['promotions'](searchFilter);
  revalidateTag(tag);
};
