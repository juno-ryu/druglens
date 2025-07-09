'use server';

import { revalidateTag } from 'next/cache';
import { UUIDAsString } from '@/carpen-products/utils/types/overridable/primitive';
import { ADMIN_URIS } from '@/carpen-products/shared/service/admin/admin.const';
import ADMIN_APIS from '@/carpen-products/shared/service/admin/admin.service';

export const fetchPromotion = async (promotionId: UUIDAsString) => {
  try {
    const promotionData = await ADMIN_APIS['promotions/:promotionId'].get(promotionId);
    return promotionData;
  } catch (error) {
    return null;
  }
};

export const revalidatePromotion = async (promotionId: UUIDAsString) => {
  const { tag } = ADMIN_URIS['promotions/:promotionId'](promotionId);
  revalidateTag(tag);
};

export const fetchPromotionItems = async (promotionId: UUIDAsString) => {
  try {
    const itemsData = await ADMIN_APIS['promotions/:promotionId/items'].get(promotionId);
    return itemsData;
  } catch (error) {
    return null;
  }
};
export const revalidatePromotionItems = async (promotionId: UUIDAsString) => {
  const { tag } = ADMIN_URIS['promotions/:promotionId/items'](promotionId);
  revalidateTag(tag);
};
