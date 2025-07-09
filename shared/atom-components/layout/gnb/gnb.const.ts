import { DesignIconProps } from '@/core/design-systems/components/design-icon';

export const ACON_LOGO_VARIANT = {
  LogoAconJapan: {
    width: { desktop: '123px', tablet: '102px', mobile: '84px' },
    height: { desktop: '28px', tablet: '24px', mobile: '18px' },
  },
  LogoAconBeta: {
    width: { desktop: '122px', tablet: '101px', mobile: '83px' },
    height: { desktop: '28px', tablet: '24px', mobile: '18px' },
  },
  LogoAcon: {
    width: { desktop: '100px', tablet: '83px', mobile: '68px' },
    height: { desktop: '28px', tablet: '24px', mobile: '20px' },
  },
  LogoAconHub: {
    width: { desktop: '80px', tablet: '68px', mobile: '60px' },
    height: { desktop: '40px', tablet: '34px', mobile: '30px' },
  },
  LogoAconAdmin: {
    width: { desktop: '166px', tablet: '166px', mobile: '166px' },
    height: { desktop: '28px', tablet: '28px', mobile: '28px' },
  },
};

export type TypeSecondaryItem = {
  key: `key-${string}`;
  route: string;
  pathname: string;
  target: React.HTMLAttributeAnchorTarget;
  label: string;
  isHighlight: boolean;
  isDivider?: boolean;
  adornment: { startIcon?: DesignIconProps; endIcon?: DesignIconProps };
};

export const DESIGN_SYSTEMS_ITEMS: TypeSecondaryItem[] = [
  ...[
    '/playground/alert',
    '/playground/avatar',
    '/playground/button',
    '/playground/checkbox',
    '/playground/chip',
    '/playground/design-icon',
    '/playground/design-label',
    '/playground/dialog',
    '/playground/drawer',
    '/playground/editor',
    '/playground/loader',
    '/playground/pagination',
    '/playground/palette',
    '/playground/progress',
    '/playground/radio',
    '/playground/rating',
    '/playground/shadow',
    '/playground/skeleton',
    '/playground/snackbar',
    '/playground/stepper',
    '/playground/switch',
    '/playground/table',
    '/playground/tabs',
    '/playground/text-field-input',
    '/playground/text-field-select',
    '/playground/text-field-textarea',
    '/playground/toggle-button',
    '/playground/tooltip',
    '/playground/typography',
  ].map((path) => {
    const key = path.split('/').pop();
    const label = key?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      key: `key-${key ?? label ?? ''}` as const,
      route: path,
      pathname: path,
      target: '_self',
      label: label || '',
      isHighlight: false,
      adornment: {},
    };
  }),
];

export const SECONDARY_ALPHA_ITEMS: TypeSecondaryItem[] = [
  {
    key: 'key-product',
    route: '/product',
    pathname: '/product',
    target: '_self',
    label: '상품 관리',
    isHighlight: true,
    adornment: {},
  },
  {
    key: 'key-sales-records',
    route: '/sales-records',
    pathname: '/sales-records',
    target: '_self',
    label: '판매내역',
    isHighlight: false,
    adornment: {},
  },
  {
    key: 'key-settlement-records',
    route: '/settlement-records',
    pathname: '/settlement-records',
    target: '_self',
    label: '정산내역',
    isHighlight: false,
    adornment: { endIcon: { variant: 'TabNew', color: 'orange/500' } },
  },
  {
    key: 'key-promotion',
    route: '/promotion',
    pathname: '/promotion',
    target: '_self',
    label: '프로모션 관리',
    isHighlight: false,
    adornment: {},
  },
  {
    key: 'key-brand',
    route: '/brand',
    pathname: '/brand',
    target: '_self',
    label: '브랜드 페이지',
    isHighlight: false,
    adornment: {},
  },
  {
    key: 'key-notice',
    route: '/notice',
    pathname: '/notice',
    target: '_self',
    label: '공지사항',
    isHighlight: false,
    adornment: {},
  },
];

export const SECONDARY_BETA_ITEMS: TypeSecondaryItem[] = [
  {
    key: 'key-feature',
    route: '',
    pathname: '',
    target: '_self',
    label: '새로운 기능',
    isHighlight: false,
    adornment: {
      startIcon: {
        variant: 'Box',
        width: { desktop: '24px', tablet: '24px', mobile: '22px' },
        height: { desktop: '24px', tablet: '24px', mobile: '22px' },
        color: 'gray/800',
      },
      endIcon: {
        variant: 'TabNew',
        width: { desktop: '20px', tablet: '20px', mobile: '18px' },
        height: { desktop: '20px', tablet: '20px', mobile: '18px' },
        color: 'orange/500',
      },
    },
  },
  {
    key: 'key-design-systems',
    route: '',
    pathname: '',
    target: '_self',
    label: '디자인시스템',
    isHighlight: false,
    adornment: {
      startIcon: {
        variant: 'Image',
        width: { desktop: '24px', tablet: '24px', mobile: '22px' },
        height: { desktop: '24px', tablet: '24px', mobile: '22px' },
        color: 'gray/800',
      },
      endIcon: {
        variant: 'TabNew',
        width: { desktop: '20px', tablet: '20px', mobile: '18px' },
        height: { desktop: '20px', tablet: '20px', mobile: '18px' },
        color: 'orange/500',
      },
    },
  },
];
