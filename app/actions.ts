'use server';

import COMMON_APIS from '@/core/shared/service/common/common.service';

// category
export const fetchCategoryData = async () => {
  const categoryData = await COMMON_APIS['category'].get('admin');
  return categoryData;
};
export const revalidateCategoryData = async () => {
  //
};

// member
export const fetchMemberData = async () => {
  return null;
};
export const revalidateMemberData = async () => {
  //
};

// account
export const revalidateAccount = async () => {
  revalidateMemberData();
};
