'use client';

import { Box, DesignIcon, IconButton, Link, Typography } from '@/core/design-systems';
import useDropdown from '@/core/shared/hooks/display/use-dropdown/use-dropdown';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import LocalizedPrice from '@/core/utils/helpers/localized-price';
import { useRouter } from 'next/navigation';

import { LayoutGnbUtilityContainer, LayoutGnbUtilityDefaultButton, LayoutGnbUtilityUserDropdown } from '@/shared/atom-components/layout/gnb/gnb-utility.style';
import { LayoutGnbUtilityProps } from '@/shared/atom-components/layout/layout.type';

const LayoutGnbUtility = (props: LayoutGnbUtilityProps) => {
  const { className = '', ...restProps } = props;

  // router
  const router = useRouter();
  const { params } = useDynamicRoute();
  const { price: displayPrice, unit } = LocalizedPrice({ lang: params.lang });

  // dropdown
  const { dropdownTriggerRef, dropdownTargetRef, isOpen, onOpen, onLeave, onClose } = useDropdown<HTMLButtonElement, HTMLDivElement>();

  return (
    <LayoutGnbUtilityContainer className={`${className}`} {...restProps}>
      <Box component="li" display={{ desktop: 'block', tablet: 'block', mobile: 'block' }}>
        <LayoutGnbUtilityDefaultButton as={IconButton} type="button" ref={dropdownTriggerRef} onMouseOver={onOpen} onMouseOut={onLeave} onClick={onOpen} onBlur={onLeave}>
          <DesignIcon variant="UserFill" color="gray/800" titleAccess="User" />
        </LayoutGnbUtilityDefaultButton>
        <LayoutGnbUtilityUserDropdown
          ref={dropdownTargetRef}
          tabIndex={0}
          onMouseOver={onOpen}
          onMouseOut={onLeave}
          onFocus={onOpen}
          onBlur={onLeave}
          onClickCapture={onClose}
          $isOpen={isOpen}
        >
          <ul>
            <li>
              <Typography component={Link} variant="body/body3" color="gray/800">
                유저홈
              </Typography>
            </li>
            <li>
              <Typography component={Link} variant="body/body3" color="gray/800">
                고객센터
              </Typography>
            </li>
          </ul>
        </LayoutGnbUtilityUserDropdown>
      </Box>
    </LayoutGnbUtilityContainer>
  );
};

export default LayoutGnbUtility;
