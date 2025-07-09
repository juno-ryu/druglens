'use client';

import { FieldValues, useController } from 'react-hook-form';
import { Switch } from '@/core/design-systems';
import { ControlledSwitchProps } from '@/core/shared/components/hook-form/controlled-switch/controlled-switch.type';

const ControlledSwitch = <T extends FieldValues = FieldValues>(props: ControlledSwitchProps<T>) => {
  const { control, name, rules = {}, required = false, className = '', onChange, ...restProps } = props;

  const formattedRules = { ...rules, required };
  const { field, fieldState, formState } = useController({ control, name, rules: formattedRules });

  const onSwitchChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    field.onChange(checked);
    onChange?.(event, checked);
  };

  return (
    <Switch
      {...field}
      id={name}
      name={name}
      required={required}
      checked={field.value ?? false}
      className={`${className}`}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onSwitchChange(event, event.target.checked)}
      {...restProps}
    />
  );
};

export default ControlledSwitch;
