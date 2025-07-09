import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { DesignIconProps } from '@/core/design-systems/components/design-icon';

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
  // 브랜드 관리
  {
    id: 'category-brands',
    categoryId: '',
    name: '브랜드 관리',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-brands-1',
        categoryId: '/brands',
        category: null,
        name: '전체 브랜드',
        description: null,
        enabled: true,
      },
    ],
  },
  // 구매 회원 관리
  {
    id: 'category-members',
    categoryId: '',
    name: '구매회원 관리',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-members-1',
        categoryId: '/members',
        category: null,
        name: '전체 구매회원',
        description: null,
        enabled: true,
      },
      {
        id: 'category-members-2',
        categoryId: '',
        category: null,
        name: '포인트/캐시',
        description: null,
        enabled: true,
        children: [
          {
            id: 'category-members-2-1',
            categoryId: '/mileages',
            category: null,
            name: '포인트 내역',
            description: null,
            enabled: true,
          },
          {
            id: 'category-members-2-2',
            categoryId: '/deposits',
            category: null,
            name: '캐시 내역',
            description: null,
            enabled: true,
          },
        ],
      },
    ],
  },
  // 상품 관리
  {
    id: 'category-product',
    categoryId: '',
    name: '상품',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-product-1',
        categoryId: '/product',
        name: '전체 상품',
        description: null,
        category: null,
        enabled: true,
      },
      {
        id: 'category-product-2',
        categoryId: '/reviews',
        name: '리뷰 내역',
        description: null,
        category: null,
        enabled: true,
      },
    ],
  },
  // 주문 관리
  {
    id: 'category-orders',
    categoryId: '',
    name: '주문',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-orders-1',
        categoryId: '/orders',
        name: '전체 주문 내역',
        description: null,
        category: null,
        enabled: true,
      },
      {
        id: 'category-orders-2',
        categoryId: '',
        name: '라이센스 주문 내역',
        description: null,
        category: null,
        enabled: true,
      },
      {
        id: 'category-orders-3',
        categoryId: '/settle',
        name: '정산',
        description: null,
        category: null,
        enabled: true,
      },
    ],
  },
  // CS 관리
  {
    id: 'category-cscx',
    categoryId: '',
    name: 'CS 관리',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-cs-1',
        categoryId: '/cs/list',
        name: '문의 내역',
        description: null,
        category: null,
        enabled: true,
      },
    ],
  },
  // 이벤트 관리
  {
    id: 'category-events',
    categoryId: '',
    name: '이벤트 관리',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-events-1',
        categoryId: '',
        name: '오픈런',
        description: null,
        category: null,
        enabled: true,
      },
      {
        id: 'category-events-2',
        categoryId: '/promotions',
        name: '기획전',
        description: null,
        category: null,
        enabled: true,
        children: [
          {
            id: 'category-events-2-1',
            categoryId: '',
            name: '참여할인',
            description: null,
            category: null,
            enabled: true,
          },
        ],
      },
      {
        id: 'category-events-3',
        categoryId: '/coupons',
        name: '쿠폰',
        description: null,
        category: null,
        enabled: true,
      },
      {
        id: 'category-events-4',
        categoryId: '',
        name: '업셀링',
        description: null,
        category: null,
        enabled: true,
      },
    ],
  },
  // 팝업 관리
  {
    id: 'category-popup',
    categoryId: '',
    name: '팝업 관리',
    description: null,
    category: null,
    enabled: true,
  },
  // 배너 관리
  {
    id: 'category-banner',
    categoryId: '',
    name: '배너 관리',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-banner-1',
        categoryId: '',
        name: '메인 배너',
        description: null,
        category: null,
        enabled: true,
        children: [
          {
            id: 'category-banner-1-1',
            categoryId: '',
            name: '메인 롤링 배너',
            description: null,
            category: null,
            enabled: true,
          },
          {
            id: 'category-banner-1-2',
            categoryId: '',
            name: '서브 배너',
            description: null,
            category: null,
            enabled: true,
          },
          {
            id: 'category-banner-1-3',
            categoryId: '',
            name: '중간 배너',
            description: null,
            category: null,
            enabled: true,
          },
          {
            id: 'category-banner-1-4',
            categoryId: '',
            name: '띠 배너',
            description: null,
            category: null,
            enabled: true,
          },
        ],
      },
      {
        id: 'category-banner-2',
        categoryId: '',
        name: '상세페이지 배너',
        description: null,
        category: null,
        enabled: true,
        children: [
          {
            id: 'category-banner-2-1',
            categoryId: '',
            name: '상세설명 산단 배너',
            description: null,
            category: null,
            enabled: true,
          },
          {
            id: 'category-banner-2-2',
            categoryId: '',
            name: '카드 텍스트 배너',
            description: null,
            category: null,
            enabled: true,
          },
          {
            id: 'category-banner-2-3',
            categoryId: '',
            name: '카드 플로팅 배너',
            description: null,
            category: null,
            enabled: true,
          },
        ],
      },
      {
        id: 'category-banner-3',
        categoryId: '',
        name: '이벤트 페이지 배너',
        description: null,
        category: null,
        enabled: true,
        children: [
          {
            id: 'category-banner-3-1',
            categoryId: '',
            name: '이벤트페이지 배너',
            description: null,
            category: null,
            enabled: true,
          },
        ],
      },
    ],
  },
  {
    id: 'category-notice',
    categoryId: '',
    name: '고객안내',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-notice-1',
        categoryId: '/faq',
        name: '[ACON] FAQ',
        description: null,
        category: null,
        enabled: true,
      },
      {
        id: 'category-notice-2',
        categoryId: '/partner-notices',
        name: '[HUB] 공지사항',
        description: null,
        category: null,
        enabled: true,
      },
      {
        id: 'category-notice-3',
        categoryId: '/partner-notices/events',
        name: '[HUB] 이벤트',
        description: null,
        category: null,
        enabled: true,
      },
    ],
  },
  {
    id: 'category-community',
    categoryId: '',
    name: '커뮤니티',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-community-1',
        categoryId: '/community/posts',
        name: '게시글',
        description: null,
        category: null,
        enabled: true,
      },
      {
        id: 'category-community-2',
        categoryId: '/community/comments',
        name: '댓글',
        description: null,
        category: null,
        enabled: true,
      },
      {
        id: 'category-community-3',
        categoryId: '/community/tags',
        name: '태그',
        description: null,
        category: null,
        enabled: true,
      },
    ],
  },
  // 카테고리 관리
  {
    id: 'category-categories',
    categoryId: '',
    name: '카테고리',
    description: null,
    category: null,
    enabled: true,
    children: [
      {
        id: 'category-categories-1',
        categoryId: '/categories',
        name: '카테고리 관리',
        description: null,
        category: null,
        enabled: true,
      },
    ],
  },
];
