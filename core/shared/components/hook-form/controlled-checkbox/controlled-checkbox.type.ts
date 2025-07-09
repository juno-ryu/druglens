import { Control, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import { CheckboxProps } from '@/core/design-systems/components/checkbox';

export interface ControlledCheckboxProps<T extends FieldValues = object> extends CheckboxProps {
  control: Control<T>;
  rules?: RegisterOptions<T>;
  name: FieldPath<T>;
  isReverseCheckboxValue?: boolean;
}
