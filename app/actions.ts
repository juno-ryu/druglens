'use server';

import COMMON_APIS from '@/core/shared/service/common/common.service';

// category
export const fetchCategoryData = async () => {
  const categoryData = await COMMON_APIS['category'].get('admin');
  return categoryData;
};
