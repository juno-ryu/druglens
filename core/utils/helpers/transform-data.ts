import { cloneDeep, mergeWith } from 'lodash';

export const mergeWithDeep = <T>(
  obj: Partial<Record<keyof T, unknown>>,
  ...args: Array<Partial<Record<keyof T, unknown>> | ((objValue: unknown, srcValue: unknown, key: string) => unknown)>
): T => {
  const cloned = cloneDeep(obj);
  if (args.length === 0) return cloned as T;
  const maybeCustomizer = args[args.length - 1];
  const hasCustomizer = typeof maybeCustomizer === 'function';
  const sources = hasCustomizer ? (args.slice(0, -1) as Partial<Record<keyof T, unknown>>[]) : (args as Partial<Record<keyof T, unknown>>[]);
  const customizer = hasCustomizer ? (maybeCustomizer as (objValue: unknown, srcValue: unknown) => unknown) : undefined;
  return mergeWith(cloned, ...sources, customizer) as T;
};
