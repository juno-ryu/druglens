export const getPriority = <T extends Record<string, number>>(map: T, lang: keyof T) => {
  return map[lang] ?? 100;
};
