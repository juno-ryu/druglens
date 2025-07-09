import { BoxProps as MuiBoxProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';

export type BoxComponent = OverridableComponent<MuiBoxTypeMap<BoxProps>>;

export type BoxProps<RootComponent extends React.ElementType = MuiBoxTypeMap['defaultComponent']> = MuiBoxProps<RootComponent> & {
  component?: React.ElementType;
  slotProps?: {
    root?: MuiBoxProps;
  };
  classes?: {
    root?: string;
  };
};
