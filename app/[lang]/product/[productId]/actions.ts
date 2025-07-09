'use server';

import { revalidateTag } from 'next/cache';
import { UUIDAsString } from '@/carpen-products/utils/types/overridable/primitive';
import { ADMIN_URIS } from '@/carpen-products/shared/service/admin/admin.const';
import ADMIN_APIS from '@/carpen-products/shared/service/admin/admin.service';

export const fetchProductData = async (productId: UUIDAsString) => {
  try {
    const productData = await ADMIN_APIS['product/assets/:assetProductId'].get(productId);
    return productData ?? null;
  } catch (error) {
    return null;
  }
};
export const revalidateProductData = async (productId: UUIDAsString) => {
  const { tag } = ADMIN_URIS['product/assets/:assetProductId'](productId);
  revalidateTag(tag);
};
