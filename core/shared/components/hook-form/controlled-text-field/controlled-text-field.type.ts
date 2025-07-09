import { Control, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import { TextFieldProps } from '@/core/design-systems/components/text-field';

export interface ControlledTextFieldProps<T extends FieldValues = object> extends TextFieldProps {
  control: Control<T>;
  rules?: RegisterOptions<T>;
  name: FieldPath<T>;
}
