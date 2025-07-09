import { BoxProps as MuiBoxProps } from '@mui/material';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { CircularProgressProps } from '@/core/design-systems/components/circular-progress';

export interface LoaderTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'div'> {
  props: AdditionalProps & LoaderOwnProps;
  defaultComponent: RootComponent;
}

export type LoaderComponent = OverridableComponent<LoaderTypeMap<LoaderProps>>;

export interface LoaderOwnProps extends MuiBoxProps {
  variant: 'dot' | 'circle';
  color?: string | undefined;
  size?: number;
  slotProps?: {
    root?: MuiBoxProps;
    dot?: MuiBoxProps;
    circle?: CircularProgressProps;
  };
}

export type LoaderProps<RootComponent extends React.ElementType = LoaderTypeMap['defaultComponent'], AdditionalProps = {}> = OverrideProps<
  LoaderTypeMap<AdditionalProps, RootComponent>,
  RootComponent
> & {
  component?: RootComponent;
};
