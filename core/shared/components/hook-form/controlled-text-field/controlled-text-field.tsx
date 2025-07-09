'use client';

import { FieldValues, useController } from 'react-hook-form';
import { TextField } from '@/core/design-systems';
import { ControlledTextFieldProps } from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field.type';

const ControlledTextField = <T extends FieldValues = FieldValues>(props: ControlledTextFieldProps<T>) => {
  const { type, control, name, rules = {}, select = false, required = false, slotProps, children, className = '', onChange, onBlur, sx, ...restProps } = props;

  const formattedRules = { ...rules, required };
  const { field, fieldState } = useController({ control, name, rules: formattedRules });
  const fieldValue = field.value === 0 ? 0 : field.value || '';

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = type === 'number' ? Number(event.target.value || 0) : event.target.value || '';
    field.onChange(value);
    onChange?.(event);
  };

  const onSelectChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!slotProps?.select?.native || !slotProps?.select?.multiple) {
      const newValue = event.target.value;
      field.onChange(newValue);
      onChange?.(event);
      return;
    }
    const newValue = new Set<string>(field.value);
    if (newValue.has(event.target.value)) newValue.delete(event.target.value);
    else newValue.add(event.target.value);
    field.onChange(Array.from(newValue));
    onChange?.(event);
  };

  return (
    <TextField
      inputRef={field.ref}
      id={name}
      name={name}
      type={type}
      select={select}
      value={fieldValue}
      error={!!fieldState?.error}
      required={required}
      slotProps={slotProps}
      className={`${className}`}
      onChange={select ? onSelectChange : onInputChange}
      onBlur={(event) => {
        field.onBlur();
        onBlur?.(event);
      }}
      sx={{
        flex: '1 1 0px',
        minWidth: '0px',
        width: '100%',
        ...sx,
      }}
      {...restProps}
    >
      {children}
    </TextField>
  );
};

export default ControlledTextField;
