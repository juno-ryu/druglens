import { LinearProgressProps as MuiLinearProgressProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type LinearProgressTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'span'> = {
  props: AdditionalProps & MuiLinearProgressProps;
  defaultComponent: RootComponent;
};

export type LinearProgressProps = Omit<MuiLinearProgressProps, 'component' | 'children'> & {};

export type LinearProgressComponent = OverridableComponent<LinearProgressTypeMap<LinearProgressProps>>;
