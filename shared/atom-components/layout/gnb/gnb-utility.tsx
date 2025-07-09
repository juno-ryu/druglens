'use client';

import { useRouter } from 'next/navigation';
import { Box, DesignIcon, IconButton, Link, Tooltip, Typography } from '@/core/design-systems';
import LocalizedPrice, { boundPrice } from '@/core/utils/helpers/localized-price';
import useDropdown from '@/core/shared/hooks/display/use-dropdown/use-dropdown';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { useAuthorState } from '@/shared/stores/auth/use-snapshot/use-snapshot.hook';
import { signOutMessage } from '@/shared/configs/next-auth/next-auth.client';
import { signOutAction } from '@/shared/configs/next-auth/next-auth.server';
import {
  LayoutGnbUtilityCashButton,
  LayoutGnbUtilityContainer,
  LayoutGnbUtilityDefaultButton,
  LayoutGnbUtilityUserDropdown,
} from '@/shared/atom-components/layout/gnb/gnb-utility.style';
import { LayoutGnbUtilityProps } from '@/shared/atom-components/layout/layout.type';

const LayoutGnbUtility = (props: LayoutGnbUtilityProps) => {
  const { className = '', ...restProps } = props;

  // router
  const router = useRouter();
  const { params } = useDynamicRoute();
  const { price: displayPrice, unit } = LocalizedPrice({ lang: params.lang });

  const { authorAccount } = useAuthorState();

  // dropdown
  const { dropdownTriggerRef, dropdownTargetRef, isOpen, onOpen, onLeave, onClose } = useDropdown<HTMLButtonElement, HTMLDivElement>();

  const onSignOut = async () => {
    await signOutAction();
    await signOutMessage();
  };

  if (!authorAccount.isSignIn) {
    return (
      <LayoutGnbUtilityContainer className={`${className}`} {...restProps}>
        <Box component="li" display={{ desktop: 'none', tablet: 'none', mobile: 'none' }}>
          <LayoutGnbUtilityDefaultButton as={IconButton} type="button">
            <DesignIcon variant="Search" titleAccess="Search" />
          </LayoutGnbUtilityDefaultButton>
        </Box>
        <Box component="li" display={{ desktop: 'block', tablet: 'block', mobile: 'block' }}>
          <LayoutGnbUtilityDefaultButton as={IconButton} type="button" onClick={() => router.push('/login')}>
            <DesignIcon variant="UserOutline" color="gray/800" titleAccess="LogIn" />
          </LayoutGnbUtilityDefaultButton>
        </Box>
      </LayoutGnbUtilityContainer>
    );
  }

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
              <Typography component={Link} href="/mypage" variant="body/body3" color="gray/800">
                유저홈
              </Typography>
            </li>
            <li>
              <Typography component={Link} href="/mypage/order-list" variant="body/body3" color="gray/800">
                주문조회
              </Typography>
            </li>
            <li>
              <Typography component={Link} href="/faq" variant="body/body3" color="gray/800">
                고객센터
              </Typography>
            </li>
            <li>
              <Typography component="button" type="button" variant="body/body3" color="gray/800" onClick={onSignOut}>
                로그아웃
              </Typography>
            </li>
          </ul>
        </LayoutGnbUtilityUserDropdown>
      </Box>
    </LayoutGnbUtilityContainer>
  );
};

export default LayoutGnbUtility;
