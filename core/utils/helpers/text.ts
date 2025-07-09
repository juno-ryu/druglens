export const matchHighlight = (original: string, highlight: string) => {
  if (!highlight) return [{ isHighlight: false, value: original }];
  const pattern = highlight.replace(/([.*+?^${}()|[\]\\])/g, '\\$1');
  return original
    .split(new RegExp(`(${pattern})`, 'gi'))
    .map((word) => ({ isHighlight: word.toLowerCase() === highlight.toLowerCase(), value: word }))
    .filter(Boolean);
};

export const toPascalCase = (string: string) => {
  return string.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase());
};

export const normalizeToString = (value: string | string[]) => {
  return Array.isArray(value) ? value.join(',') : value;
};
