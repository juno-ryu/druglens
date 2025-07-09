import { BooleanAsString } from '@/core/utils/types/overridable/primitive';

export function isTruthy(value: boolean | BooleanAsString): boolean {
  return value === true || value === 'true';
}
export function isFalsy(value: boolean | BooleanAsString): boolean {
  return value === false || value === 'false';
}
