import { DesignIconProps } from '@/core/design-systems/components/design-icon';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';

export type TypeFirstLevelItem = {
  key: `key-${string}`;
  id: string;
  adornment: { defaultIcon: DesignIconProps; activeIcon: DesignIconProps };
};

export const findCategoryBlock = (block: CategoryNodeOutput[], target: string) => {
  return block.find((item) => hasCategoryBlock(item, target)) || null;
};

export const hasCategoryBlock = (node: CategoryNodeOutput, target: string): boolean => {
  if (!node.categoryId) return node.children?.some((child) => hasCategoryBlock(child, target)) || false;
  if (target.includes(node.categoryId)) return true;
  return node.children?.some((child) => hasCategoryBlock(child, target)) || false;
};

/**
 * @todo CategoryNodeOutput 형식을 통일하여 카테고리를 그린다.
 * @condition
 * 1. categoryId 필드를 href 대용으로 사용한다.
 * 2. id 필드는 부모의 id를 상속한다. (sub path에서 activeTab 구분을 위함)
 */
export const STATIC_ADMIN_CATEGORY: CategoryNodeOutput[] = [
  {
    id: 'category-example',
    categoryId: '',
    name: '예시',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-example-1',
        categoryId: '/example',
        category: null,
        name: '목록화면',
        description: null,
        enabled: true,
      },
    ],
  },
];
