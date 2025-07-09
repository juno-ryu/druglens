import '@mui/material/styles';
import '@mui/material/Alert';
import { TypeAlertVariants } from '@/core/design-systems/components/alert/alert.const';
import { DesignIconProps } from '@/core/design-systems/components/design-icon';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Alert' {
  interface AlertPropsVariantOverrides extends Record<TypeAlertVariants, true> {
    //
  }

  interface AlertCloseIconSlotPropsOverrides extends DesignIconProps {
    //
  }
}
