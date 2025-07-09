export type SelectOption<Value extends string | boolean = string> = {
  value: Value;
  label: string;
};

export const matchOptions = <T>(value?: string, matchrFn?: (value: string) => boolean): T[] => {
  if (!value) return [];
  const items = value.split(',').map((v) => v.trim());
  const filtered = matchrFn ? items.filter(matchrFn) : items;
  return filtered as unknown as T[];
};
