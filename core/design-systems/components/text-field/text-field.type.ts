import { TextFieldProps as MuiTextFieldProps, TextFieldVariants as MuiTextFieldVariants } from '@mui/material';
import { FormHelperTextProps } from '@/core/design-systems/components/form-helper-text';
import { SelectProps } from '@/core/design-systems/components/select';

export type TextFieldComponent = React.ComponentType<TextFieldProps>;

export type TextFieldProps<Variant extends MuiTextFieldVariants = MuiTextFieldVariants> = Omit<MuiTextFieldProps<Variant>, 'component' | 'helperText'> & {
  success?: boolean;
  helperText?: {
    key: string;
    withIcon: boolean;
    value: string;
  }[];
  slotProps?: {
    select?: SelectProps;
    formHelperText?: FormHelperTextProps;
  };
};
