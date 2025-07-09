/**
 * @description 소수점 비율 값을 퍼센트 문자열로 변환
 * 예: 0.044 → "4.4%"
 *
 * @param value - 소수점 기반 비율 값 (예: 0.044)
 * @param digits - 소수점 자리수 (기본: 1)
 * @returns 퍼센트 문자열 (예: "4.4%")
 */
export function convertToPercentString(value: number, digits: number = 1): string {
  const percent = Math.round(value * 100 * 10 ** digits) / 10 ** digits;
  return `${percent.toFixed(digits)}%`;
}
