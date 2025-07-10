'use client';

import { DesignIcon } from '@/core/design-systems';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import Link from 'next/link';

import PopularKeyword from '@/shared/atom-components/common/popular-keyword/popular-keyword';
import { LayoutGnbPrimaryContainer, LayoutGnbPrimaryLogo } from '@/shared/atom-components/layout/gnb/gnb-primary.style';
import { ACON_LOGO_VARIANT } from '@/shared/atom-components/layout/gnb/gnb.const';
import { LayoutGnbPrimaryProps } from '@/shared/atom-components/layout/layout.type';
import { EnumLanguageCode } from '@/shared/consts/common/language';

const LayoutGnbPrimary = (props: LayoutGnbPrimaryProps) => {
  const { className = '', ...restProps } = props;

  const { params } = useDynamicRoute();
  const { lang } = params;
  const logoVariant = 'LogoAconAdmin';

  return (
    <LayoutGnbPrimaryContainer className={`${className}`} {...restProps}>
      <LayoutGnbPrimaryLogo>
        <DesignIcon
          component={Link}
          href="/"
          variant={logoVariant}
          width={ACON_LOGO_VARIANT[logoVariant].width}
          height={ACON_LOGO_VARIANT[logoVariant].height}
          color="black"
          titleAccess="Acon"
        />
      </LayoutGnbPrimaryLogo>
      {/* <SearchBar /> */}
      {/* <PopularKeyword dropdownStyle={{ display: 'block' }} /> */}
    </LayoutGnbPrimaryContainer>
  );
};

export default LayoutGnbPrimary;
