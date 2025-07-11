'use client';

import { DesignIcon } from '@/core/design-systems';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import Link from 'next/link';

import SearchBar from '@/shared/atom-components/form/search-bar/search-bar';
import { LayoutGnbPrimaryContainer, LayoutGnbPrimaryLogo } from '@/shared/atom-components/layout/gnb/gnb-primary.style';
import { LayoutGnbPrimaryProps } from '@/shared/atom-components/layout/layout.type';

const LayoutGnbPrimary = (props: LayoutGnbPrimaryProps) => {
  const { className = '', ...restProps } = props;

  const { params } = useDynamicRoute();
  const { lang } = params;
  const logoVariant = 'LogoAconAdmin';

  return (
    <LayoutGnbPrimaryContainer className={`${className}`} {...restProps}>
      {/* <LayoutGnbPrimaryLogo>
        <DesignIcon component={Link} href="/" variant="Windows" width={30} height={30} color="gray/700" titleAccess="Logo" />
      </LayoutGnbPrimaryLogo> */}
      <SearchBar />
    </LayoutGnbPrimaryContainer>
  );
};

export default LayoutGnbPrimary;
