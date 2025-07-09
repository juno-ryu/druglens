import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { DialogAlertProps } from '@/core/shared/components/overlay/dialog-alert/dialog-alert.type';

export type TypeErrorAssistOptions<T extends FieldValues> = {
  formContext: UseFormReturn<T>;
};

type HasOneOf<T, Keys extends keyof T = keyof T> = Keys extends keyof T ? { [K in Keys]: Required<Pick<T, K>> & Partial<Omit<T, K>> }[Keys] : never;

export type TypeErrorAssistKey = string;
export type TypeErrorAssistCore = { message?: string; alertProps?: Pick<DialogAlertProps, 'content'> & Partial<DialogAlertProps> };
export type TypeErrorAssistValue<T> = { target: Path<T>; error?: unknown | Error } & HasOneOf<TypeErrorAssistCore, 'message' | 'alertProps'>;
export type TypeErrorAssistStack<T> = Map<TypeErrorAssistKey, TypeErrorAssistValue<T>>;
