import { DesignIconProps } from '@/core/design-systems/components/design-icon';

export type TypeNavigationBarItem = {
  key: `key-${string}`;
  route: string;
  pathname: string;
  label: string;
  adornment: { defaultIcon: DesignIconProps; activeIcon: DesignIconProps };
};

export const NAVIGATION_BAR_ITEMS: TypeNavigationBarItem[] = [
  {
    key: 'key-home',
    route: ':lang',
    pathname: '/',
    label: '홈',
    adornment: {
      defaultIcon: {
        variant: 'NavHomeOutline' as const,
        width: '24px',
        height: '24px',
      },
      activeIcon: {
        variant: 'NavHomeFilled' as const,
        width: '24px',
        height: '24px',
      },
    },
  },
  {
    key: 'key-search',
    route: '',
    pathname: '',
    label: '검색',
    adornment: {
      defaultIcon: {
        variant: 'NavSearchThin' as const,
        width: '24px',
        height: '24px',
      },
      activeIcon: {
        variant: 'NavSearchBold' as const,
        width: '24px',
        height: '24px',
      },
    },
  },
  {
    key: 'key-category',
    route: '',
    pathname: '',
    label: '카테고리',
    adornment: {
      defaultIcon: {
        variant: 'NavCategoryThin' as const,
        width: '24px',
        height: '24px',
      },
      activeIcon: {
        variant: 'NavCategoryBold' as const,
        width: '24px',
        height: '24px',
      },
    },
  },
  {
    key: 'key-user',
    route: ':lang/mypage',
    pathname: '/mypage',
    label: '프로필',
    adornment: {
      defaultIcon: {
        variant: 'NavProfileOutline' as const,
        width: '24px',
        height: '24px',
      },
      activeIcon: {
        variant: 'NavProfileFill' as const,
        width: '24px',
        height: '24px',
      },
    },
  },
];
