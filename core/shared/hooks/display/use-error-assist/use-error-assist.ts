'use client';

import { useRef } from 'react';
import { FieldValues } from 'react-hook-form';
import {
  TypeErrorAssistKey,
  TypeErrorAssistOptions,
  TypeErrorAssistStack,
  TypeErrorAssistValue,
} from '@/core/shared/hooks/display/use-error-assist/use-error-assist.type';
import useDialog from '@/core/shared/hooks/effect/use-dialog/use-dialog';
import DialogAlert from '@/core/shared/components/overlay/dialog-alert/dialog-alert';

const useErrorAssist = <T extends FieldValues>(option: TypeErrorAssistOptions<T>) => {
  const { formContext } = option;
  const { onOpen, onClose } = useDialog();
  const stackRef = useRef<TypeErrorAssistStack<T>>(new Map());

  const onUpdate = (key: TypeErrorAssistKey, value: TypeErrorAssistValue<T>) => {
    stackRef.current.set(key, value);
  };

  const onReset = () => {
    stackRef.current.clear();
  };

  const onRemove = (key: TypeErrorAssistKey) => {
    stackRef.current.delete(key);
  };

  const assistItem = (key: TypeErrorAssistKey) => {
    if (!key) return;
    if (!stackRef.current.has(key)) return;

    const { target, message, alertProps } = stackRef.current.get(key)!;
    stackRef.current.delete(key);

    if (alertProps) {
      const dialogKey = `dialog-${target}` as const;
      onOpen({
        key: dialogKey,
        onClose: () => onClose(dialogKey),
        children: DialogAlert({
          ...alertProps,
          onSuccess: () => {
            onClose(dialogKey);
            alertProps?.onSuccess?.();
          },
        }),
      });
    }

    if (message) {
      formContext.setError(target, { message: message });
    }

    if (!alertProps && !message) {
      formContext.setError(target, { message: target });
    }
  };

  const assistAll = () => {
    if (!stackRef.current.size) return;
    stackRef.current.keys().forEach((key) => assistItem(key));
  };

  return {
    stack: stackRef.current,
    onUpdate,
    onReset,
    onRemove,
    assistItem,
    assistAll,
  };
};

export default useErrorAssist;
