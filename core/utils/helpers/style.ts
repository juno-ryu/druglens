import { SxProps } from '@mui/material';

export const hasElement = (sx: SxProps) => {
  if (typeof sx !== 'object' || sx === null) return true;
  if ('display' in sx && sx.display === 'none') return false;
  return true;
};

export const shouldNotForwardPropsWithKeys =
  <CustomProps>(props: Array<keyof CustomProps>) =>
  (propName: PropertyKey): boolean =>
    !props.map((p) => p.toString()).includes(propName.toString());

export const generatedEnsureKey = <T extends string>(passKeys: T[], inputKey: string, fallbackKey: string): T => {
  const passMap: Record<string, true> = Object.fromEntries(passKeys.map((key) => [key, true]));
  if (passMap[inputKey]) return inputKey as T;
  return fallbackKey as T;
};

export function* generatedClassList(
  baseClass: string,
  modifiers: Record<string, string | boolean | undefined>,
  transform: (value: string) => string = (value) => value,
): Generator<string> {
  const prefix = baseClass ? `${baseClass}-` : '';
  for (const [key, value] of Object.entries(modifiers)) {
    if (!value) continue;
    if (value === true) yield `${prefix}${key}`;
    else yield `${prefix}${key}${transform(String(value))}`;
  }
}
