'use client';

import { FieldValues, useController } from 'react-hook-form';
import { Checkbox } from '@/core/design-systems';
import { ControlledCheckboxProps } from '@/core/shared/components/hook-form/controlled-checkbox/controlled-checkbox.type';

const ControlledCheckbox = <T extends FieldValues = FieldValues>(props: ControlledCheckboxProps<T>) => {
  const { control, name, rules = {}, value: checkboxValue, required = false, className = '', onChange, isReverseCheckboxValue = false, ...restProps } = props;

  const formattedRules = { ...rules, required };
  const { field, fieldState, formState } = useController({ control, name, rules: formattedRules });

  const isChecked = Array.isArray(field.value) ? field.value.includes(checkboxValue) : Boolean(field.value);
  const checked = isReverseCheckboxValue ? !isChecked : isChecked;

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newValue = Array.isArray(field.value) ? (checked ? [...field.value, checkboxValue] : field.value.filter((item: any) => item !== checkboxValue)) : checked;
    field.onChange(newValue);
    onChange?.(event, newValue);
  };

  return (
    <Checkbox
      {...field}
      id={name}
      name={name}
      required={required}
      checked={checked}
      className={`${className}`}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onCheckboxChange(event, isReverseCheckboxValue ? !event.target.checked : event.target.checked)}
      {...restProps}
    />
  );
};

export default ControlledCheckbox;
