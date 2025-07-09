import { Control, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import { SwitchProps } from '@/core/design-systems/components/switch';

export interface ControlledSwitchProps<T extends FieldValues = object> extends SwitchProps {
  control: Control<T>;
  rules?: RegisterOptions<T>;
  name: FieldPath<T>;
}
