import { Control, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import { RadioProps } from '@/core/design-systems/components/radio';

export interface ControlledRadioProps<T extends FieldValues = FieldValues> extends RadioProps {
  control: Control<T>;
  rules?: RegisterOptions<T>;
  name: FieldPath<T>;
  label: React.ReactNode;
  isReverseCheckboxValue?: boolean;
}
