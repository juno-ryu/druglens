import { useEffect, useRef, useState } from 'react';
import { FieldValues, useFormContext, useWatch } from 'react-hook-form';
import { cloneDeep, isEqual } from 'lodash';
import { TypeTriggerFieldsOptions, TypeTriggerFieldsStructure } from '@/core/shared/hooks/display/use-trigger-fields/use-trigger-fields.type';

const useTriggerFields = <T extends FieldValues>(options: TypeTriggerFieldsOptions<T>) => {
  const { type, fields, onChange } = options;

  const formContext = useFormContext<T>();
  const watched = useWatch({
    name: fields,
    control: formContext.control,
  });

  const fieldsRef = useRef(fields);
  const prevRef = useRef<typeof watched>(watched);
  const [structure, setStructure] = useState<TypeTriggerFieldsStructure>({
    isValid: false,
  });

  const onUpdate = async () => {
    if (isEqual(fieldsRef, fields) && isEqual(prevRef.current, watched)) return;
    fieldsRef.current = cloneDeep(fields);
    prevRef.current = cloneDeep(watched);
    if (type === 'trigger') await onTrigger();
    onChange?.();
  };

  const onTrigger = async () => {
    const isValid = await formContext.trigger(fields);
    setStructure((prev) => ({ ...prev, isValid }));
  };

  useEffect(() => {
    (async () => {
      if (isEqual(prevRef.current, watched)) return;
      await onUpdate();
    })();
  }, [watched]);

  useEffect(() => {
    (async () => {
      if (isEqual(fieldsRef, fields)) return;
      await onUpdate();
    })();
  }, [fields]);

  return {
    ...structure,
    formContext,
    onTrigger,
  };
};

export default useTriggerFields;
