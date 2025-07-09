'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DesignIcon, Menu, MenuItem, Stack, Tab, Tabs } from '@/core/design-systems';
import useDropdown from '@/core/shared/hooks/display/use-dropdown/use-dropdown';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { TabProps } from '@/core/design-systems/components/tab';
import { LayoutGnbSecondaryContainer } from '@/shared/atom-components/layout/gnb/gnb-secondary.style';
import { DESIGN_SYSTEMS_ITEMS, SECONDARY_ALPHA_ITEMS, SECONDARY_BETA_ITEMS, TypeSecondaryItem } from '@/shared/atom-components/layout/gnb/gnb.const';
import { LayoutGnbSecondaryProps } from '@/shared/atom-components/layout/layout.type';

const LayoutGnbSecondary = (props: LayoutGnbSecondaryProps) => {
  const { className = '', ...restProps } = props;

  const router = useRouter();
  const { dynamicRoute } = useDynamicRoute();
  const { dropdownTriggerRef, dropdownTargetRef, isOpen, onOpen, onLeave, onClose } = useDropdown<HTMLDivElement, HTMLDivElement>();

  const activeTab = [...SECONDARY_ALPHA_ITEMS, ...SECONDARY_BETA_ITEMS].find((menu) => dynamicRoute === menu.route);

  const getTabProps = (menu: TypeSecondaryItem): TabProps => {
    const isDivider = Boolean(menu.isDivider);
    if (isDivider) {
      return {
        variant: 'divider',
        disabled: true,
        label: <DesignIcon variant="TabDivider" color="gray/800" />,
      };
    }
    const stackProps = {
      direction: 'row' as const,
      alignItems: 'center',
      gap: '2px',
      color: menu.isHighlight ? 'primary/600' : 'gray/800',
    };
    return {
      ...(menu.pathname ? { component: Link, href: menu.pathname } : { component: 'button', type: 'button' }),
      ...(menu.key === 'key-design-systems' && { ref: dropdownTriggerRef, onClick: onOpen, onBlur: onLeave }),
      variant: menu.isHighlight ? ('accent' as const) : ('default' as const),
      value: menu.key,
      label: (
        <Stack {...stackProps}>
          {menu.adornment?.startIcon && <DesignIcon {...menu.adornment?.startIcon} />}
          {menu.label}
          {menu.adornment?.endIcon && <DesignIcon {...menu.adornment?.endIcon} />}
        </Stack>
      ),
    };
  };

  return (
    <LayoutGnbSecondaryContainer className={`${className}`} {...restProps}>
      <Tabs
        value={activeTab ? activeTab.key : false}
        size="auto"
        variant="scrollable"
        scrollButtons={false}
        sx={{ [`.MuiTab-root:nth-child(${SECONDARY_ALPHA_ITEMS.length})`]: { marginRight: 'auto' } }}
      >
        {SECONDARY_ALPHA_ITEMS.map((menu, index) => (
          <Tab key={`alpha-${menu.key}-${index}`} {...getTabProps(menu)} />
        ))}
        {SECONDARY_BETA_ITEMS.map((menu, index) => (
          <Tab key={`beta-${menu.key}-${index}`} {...getTabProps(menu)} />
        ))}
      </Tabs>
      <Menu
        ref={dropdownTargetRef}
        id="demo-positioned-menu"
        open={isOpen}
        anchorEl={dropdownTriggerRef.current}
        onFocus={onOpen}
        onBlur={onLeave}
        onClose={onClose}
        aria-labelledby="demo-positioned-button"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{ paper: { sx: { maxHeight: '90%' } } }}
      >
        {DESIGN_SYSTEMS_ITEMS.map((menu) => (
          <MenuItem
            key={menu.route}
            onClick={() => {
              router.push(menu.pathname);
              onClose();
            }}
          >
            {menu.label}
          </MenuItem>
        ))}
      </Menu>
    </LayoutGnbSecondaryContainer>
  );
};
export default LayoutGnbSecondary;
