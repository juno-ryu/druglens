import { TooltipProps as MuiTooltipProps } from '@mui/material';

export type TooltipComponent = React.ComponentType<TooltipProps>;

export type TooltipProps = Omit<MuiTooltipProps, 'component'> & {
  frontBumper?: boolean;
  backBumper?: boolean;
};
