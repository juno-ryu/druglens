/**
 * 금액의 할인률을 가져오는 메소드입니다.
 * @param before 할인 전 금액
 * @param after 할인 후 금액
 */
export function discountAmount(before: number, after: number) {
  if (!after) {
    return 100;
  }

  return 100 - Math.ceil((after / before) * 100);
}

export const INITIAL_PRODUCT_IMAGE_SIZE =
  '(max-width: 599px) calc(100vw - 34px), (max-width: 835px) calc(50vw - 34px), (max-width: 1199px) calc(50vw - 88px), (max-width: 1444px) calc(25vw - 57px), 304px';

export enum TagToolTipStorage {
  MAIN = 'storage_main_tag_tooltip_dismissed',
  PRODUCT_DETAIL = 'storage_detail_tag_tooltip_dismissed',
}
