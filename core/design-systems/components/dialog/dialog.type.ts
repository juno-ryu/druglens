import { DialogProps as MuiDialogProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface DialogTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'div'> {
  props: AdditionalProps & DialogProps;
  defaultComponent: RootComponent;
}

export type DialogComponent = OverridableComponent<DialogTypeMap<DialogProps>>;

export type DialogProps = Omit<MuiDialogProps, 'component' | 'children'> & {
  //
};
