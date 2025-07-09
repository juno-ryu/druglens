type TransformUriOptions = {
  includeKeys?: string[];
  excludeKeys?: string[];
  sortKeys?: boolean;
  skipEmpay?: boolean;
  skipFalse?: boolean;
  skipZero?: boolean;
  encodeValues?: boolean;
};

export const transformParams = <T extends object>(params: T, options: TransformUriOptions = {}) => {
  const { includeKeys = [], excludeKeys = [], sortKeys = true, skipEmpay = true, skipFalse = false, skipZero = false, encodeValues = true } = options;

  const result: [string, string][] = [];
  const encodeValue = (v: T[keyof T]) => {
    if (!encodeValues) return String(v);
    return encodeURIComponent(String(v)).replace(/%2C/g, ',');
  };

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    if (includeKeys.length && !includeKeys.includes(key)) continue;
    if (excludeKeys.includes(key)) continue;
    if (skipEmpay && value === '') continue;
    if (skipEmpay && Array.isArray(value) && !value.length) continue;
    if (skipFalse && value === false) continue;
    if (skipZero && value === 0) continue;

    if (key === 'sort' && Array.isArray(value)) {
      for (const v of value) result.push([key, encodeValue(v)]);
    } else if (Array.isArray(value)){
      result.push([key, value.map(encodeValue).join(',')]);
    } else {
      result.push([key, encodeValue(value)]);
    }
  }

  if (sortKeys) {
    result.sort(([a], [b]) => {
      if (a === 'sort' || b === 'sort') return 0;
      return a.localeCompare(b);
    });
  }

  return result;
};

export const transformQueryUri = <T extends object>(baseUri: string, params: T, options?: TransformUriOptions): string => {
  const entries = transformParams(params, options);
  const query = entries.map(([key, value]) => `${key}=${value}`).join('&');
  return `${baseUri}${baseUri && query ? '?' : ''}${query}`;
};

export const transformColonUri = <T extends object>(baseUri: string, params: T, options?: TransformUriOptions): string => {
  const parts = transformParams(params, options)
    .map(([key, value]) => `:${key}:${value}`)
    .join('');
  return `${baseUri}${parts}`;
};
