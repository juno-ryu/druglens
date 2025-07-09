import { ChipProps as MuiChipProps, ChipTypeMap as MuiChipTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type ChipComponent = OverridableComponent<MuiChipTypeMap<ChipProps>>;

export type ChipProps<RootComponent extends React.ElementType = MuiChipTypeMap['defaultComponent']> = Omit<MuiChipProps<RootComponent>, 'children'> & {
  //
};
