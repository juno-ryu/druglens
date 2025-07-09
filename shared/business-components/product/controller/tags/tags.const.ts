export function generateCaseInsensitiveRegex(pattern: string) {
  return new RegExp(
    Array.from(pattern)
      .map((char) => `[${char.toLowerCase()}${char.toUpperCase()}]`)
      .join(''),
  );
}
export function extractMatchedSubstring(targetString: string, patternString: string) {
  const pattern = generateCaseInsensitiveRegex(patternString);
  const matched = targetString.match(pattern);
  return matched ? matched[0] : null;
}
