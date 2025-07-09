'use client';

import { FieldValues, useController } from 'react-hook-form';
import { FormControlLabel, Radio } from '@/core/design-systems';
import { ControlledRadioProps } from '@/core/shared/components/hook-form/controlled-radio/controlled-radio.type';

const ControlledRadio = <T extends FieldValues = FieldValues>(props: ControlledRadioProps<T>) => {
  const { control, name, rules = {}, value: radioValue, required = false, label = '', isReverseCheckboxValue = false, className = '', onChange, ...restProps } = props;

  const formattedRules = { ...rules, required };
  const { field, fieldState, formState } = useController({ control, name, rules: formattedRules });

  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>, value: typeof radioValue) => {
    field.onChange(value);
    onChange?.(event, value === radioValue);
  };

  return (
    <FormControlLabel
      required={required}
      control={
        <Radio
          {...field}
          checked={field.value === radioValue}
          value={radioValue}
          className={`${className}`}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onRadioChange(event, radioValue)}
          {...restProps}
        />
      }
      label={label}
    />
  );
};

export default ControlledRadio;
