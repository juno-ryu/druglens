/** 국내 사업자 브랜드의 사업자 종류 */
export enum BusinessType {
  /** 간이 사업자	*/
  SIMPLE = 'SIMPLE',
  /** 과세 사업자 */
  TAXABLE = 'TAXABLE',
  /** 면세 사업자 */
  EXEMPT = 'EXEMPT',
  /** 과면세 사업자 */
  MIXED = 'MIXED',
  /** 간이 과세자(세금 계산서 발행 가능) */
  SIMPLE_TAXABLE_WITH_INVOICE = 'SIMPLE_TAXABLE_WITH_INVOICE',
  /** 간이 과세자(세금 계산서 발행 불가능) */
  SIMPLE_TAXABLE_NO_INVOICE = 'SIMPLE_TAXABLE_NO_INVOICE',
}
