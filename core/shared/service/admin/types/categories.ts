import { CategoryItem } from '@/core/shared/service/output/category-node-output';

export type CategoriesPayload = {
  code: string;
  title: string;
};

export type CategoriesOutput = {
  data: CategoryItem[];
};
