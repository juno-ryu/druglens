import { Components, TabProps as MuiTabProps, TabTypeMap as MuiTabTypeMap, Theme } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type TabComponent = OverridableComponent<MuiTabTypeMap<TabProps>>;

export type TabProps<RootComponent extends React.ElementType = MuiTabTypeMap['defaultComponent']> = MuiTabProps<RootComponent> & {
  variant?: 'default' | 'accent' | 'divider';
  href?: string;
};

export type TabOverride = Components<Theme>['MuiTab'] & {
  defaultProps: Partial<TabProps>;
};
