import { Components, TabsProps as MuiTabsProps, TabsTypeMap as MuiTabsTypeMap, Theme } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { TypeTabsSizes } from '@/core/design-systems/components/tabs/tabs.const';

export type TabsComponent = OverridableComponent<MuiTabsTypeMap<TabsProps>>;

export type TabsProps<RootComponent extends React.ElementType = MuiTabsTypeMap['defaultComponent']> = MuiTabsProps<RootComponent> & {
  size?: TypeTabsSizes;
};

export type TabsOverride = Components<Theme>['MuiTabs'] & {
  defaultProps: Partial<TabsProps>;
};
