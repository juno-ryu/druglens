/** 관리자 페이지에서 리뷰 조회 검색 조건 중 키워드를 입력할 때 그 키워드를 어떤 값에서 검색할 지 정의 */
export enum ReviewFilterKeywordType {
  /** 본문 내용 */
  CONTENT = 'CONTENT',
  /** 작성 유저 email */
  USER_EMAIL = 'USER_EMAIL',
  /** 리뷰가 작성 된 상품의 이름 */
  PRODUCT_NAME = 'PRODUCT_NAME',
}
