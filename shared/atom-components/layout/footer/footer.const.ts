import { DesignIconProps } from '@/core/design-systems/components/design-icon';
import { TypographyProps } from '@/core/design-systems/components/typography';

export type TypeQuickLinkItem = {
  key: `key-${string}`;
  pathname: string;
  target: React.HTMLAttributeAnchorTarget;
  label: string;
  typographyProps: TypographyProps;
};

export const QUICK_LINK_ITEMS: TypeQuickLinkItem[] = [
  {
    key: 'key-terms-of-use',
    pathname: '/policy/terms-of-use',
    target: '_self',
    label: '이용약관',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-privacy',
    pathname: '/policy/privacy',
    target: '_blank',
    label: '개인정보처리방침',
    typographyProps: {
      fontWeight: 700,
      color: 'gray/800',
    },
  },
  {
    key: 'key-eula',
    pathname: '/policy/eula',
    target: '_blank',
    label: 'EULA',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-intro',
    pathname: '/intro',
    target: '_self',
    label: '에이콘 소개',
    typographyProps: {
      fontWeight: 700,
      color: 'gray/800',
    },
  },
  {
    key: 'key-creator',
    pathname: '/intro/3d-creator',
    target: '_self',
    label: '입점 신청',
    typographyProps: {
      fontWeight: 700,
      color: 'gray/800',
    },
  },
  {
    key: 'key-faq',
    pathname: '/faq',
    target: '_self',
    label: '고객센터',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-recruitment',
    pathname: 'https://acon3d.notion.site/Carpenstreet-8ea4db50bd6b472dab17b94316e850e3',
    target: '_blank',
    label: '채용정보',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-notice',
    pathname: 'https://acon3d.notion.site/05880402c6764fc6ae3f975bfd0f9cd7?v=52dc73ed1989485b903cac5e75d20fa3',
    target: '_blank',
    label: '공지사항',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
];

export type TypeSocialItem = {
  key: `key-${string}`;
  pathname: string;
  target: React.HTMLAttributeAnchorTarget;
  label: string;
  designIconProps: DesignIconProps;
};

export const SOCIAL_ITEMS: TypeSocialItem[] = [
  {
    key: 'key-kakao',
    pathname: 'https://pf.kakao.com/_TDFsT',
    target: '_blank',
    label: 'Kakao',
    designIconProps: {
      variant: 'SocialKakao',
      color: 'gray/600',
      width: '24px',
    },
  },
  {
    key: 'key-instagram',
    pathname: 'https://www.instagram.com/acon3d.official/',
    target: '_blank',
    label: 'Instagram',
    designIconProps: {
      variant: 'SocialInstagram',
      color: 'gray/600',
      width: '24px',
    },
  },
  {
    key: 'key-twitter',
    pathname: 'https://x.com/ACON3D',
    target: '_blank',
    label: 'X',
    designIconProps: {
      variant: 'SocialX',
      color: 'gray/600',
      width: '24px',
    },
  },
  {
    key: 'key-facebook',
    pathname: 'https://www.facebook.com/acon3d',
    target: '_blank',
    label: 'Facebook',
    designIconProps: {
      variant: 'SocialFacebook',
      color: 'gray/600',
      width: '24px',
    },
  },
];

export type TypeCompanyItem = {
  key: `key-${string}`;
  label: string;
  typographyProps: TypographyProps;
};

export const COMPANY_ITEMS: TypeCompanyItem[] = [
  {
    key: 'key-company',
    label: '주식회사 카펜스트리트',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-ceo',
    label: '대표: 이민홍',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-address',
    label: '주소: 서울 강남구 언주로93길 27 아시아미디어센터 7층',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-service-number',
    label: '통신판매업신고번호: 2021-서울강남-04401',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-business-number',
    label: '사업자등록번호: 364-87-01374',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-business-check',
    label: '사업자정보확인',
    typographyProps: {
      fontWeight: 700,
      color: 'gray/600',
      sx: { textDecoration: 'underline' },
    },
  },
  {
    key: 'key-business-manager',
    label: '개인정보관리자: 이민홍',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-business-phone',
    label: '번호(발신전용): 02-878-1201',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-business-email',
    label: '이메일: cs@acon3d.com',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
  {
    key: 'key-hosting',
    label: '호스팅제공: 엔에이치엔고도(주)',
    typographyProps: {
      fontWeight: 500,
      color: 'gray/600',
    },
  },
];
