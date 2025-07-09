'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BottomNavigation, BottomNavigationAction, DesignIcon } from '@/core/design-systems';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { useDeviceState, useInterfaceActions, useInterfaceState } from '@/shared/stores/layout/use-viewport/use-viewport.hook';
import { NAVIGATION_BAR_ITEMS, TypeNavigationBarItem } from '@/shared/atom-components/common/navigation-bar/navigation-bar.const';
import { NavigationBarProps } from '@/shared/atom-components/common/navigation-bar/navigation-bar.type';

const NavigationBar = <C extends React.ElementType>(props: NavigationBarProps<C>) => {
  const { component, className = '', ...restProps } = props;

  const router = useRouter();
  const { dynamicRoute } = useDynamicRoute();

  const { device } = useDeviceState();
  const interfaceState = useInterfaceState();
  const interfaceActions = useInterfaceActions();

  const activeItem = NAVIGATION_BAR_ITEMS.find((item) => dynamicRoute === item.route) ?? null;
  const [value, setValue] = useState<TypeNavigationBarItem['key'] | null>(activeItem ? activeItem.key : null);

  const onUpdate = (key: TypeNavigationBarItem['key']) => {
    if (key === 'key-category') return;
    const item = NAVIGATION_BAR_ITEMS.find((item) => key === item.key);
    setValue(() => key);
    interfaceActions.setIsCollapseWorkspaceSidebar(true);
    if (item?.pathname) router.push(item.pathname);
  };

  const onAction = (item: TypeNavigationBarItem) => {
    if (item.key === 'key-category') {
      window.scrollTo(0, 0);
      setValue(interfaceState.isCollapseWorkspaceSidebar ? 'key-category' : (activeItem?.key ?? null));
      interfaceActions.setIsCollapseWorkspaceSidebar(!interfaceState.isCollapseWorkspaceSidebar);
    }
  };

  useEffect(() => {
    if (device === 'desktop' && value === 'key-category') {
      window.scrollTo(0, 0);
      setValue(activeItem?.key ?? null);
      interfaceActions.setIsCollapseWorkspaceSidebar(true);
    }
  }, [device]);

  return (
    <BottomNavigation component={component} showLabels value={value} className={`${className}`} onChange={(event, value) => onUpdate(value)} {...restProps}>
      {NAVIGATION_BAR_ITEMS.map((item) => (
        <BottomNavigationAction
          key={item.key}
          label={item.label}
          value={item.key}
          icon={<DesignIcon {...(value === item.key ? { ...item.adornment.activeIcon } : { ...item.adornment.defaultIcon })} />}
          onClick={() => onAction(item)}
        />
      ))}
    </BottomNavigation>
  );
};

export default NavigationBar;
