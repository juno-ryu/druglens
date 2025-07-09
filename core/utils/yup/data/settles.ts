import { BrandSettleTypes } from '@/core/shared/service/enum/brand-settle-types';

export const SETTLES = new Map([
  [
    BrandSettleTypes.DOMESTIC_PERSONAL,
    {
      value: BrandSettleTypes.DOMESTIC_PERSONAL,
      label: '국내 개인',
      fieldKey: 'domesticPersonal',
    },
  ],
  [
    BrandSettleTypes.DOMESTIC_NORMAL_BUSINESS,
    {
      value: BrandSettleTypes.DOMESTIC_NORMAL_BUSINESS,
      label: '국내 일반 과세자',
      fieldKey: 'domesticNormalBusiness',
    },
  ],
  [
    BrandSettleTypes.DOMESTIC_SPECIAL_TAX_BUSINESS,
    {
      value: BrandSettleTypes.DOMESTIC_SPECIAL_TAX_BUSINESS,
      label: '국내 과세 특례 사업자',
      fieldKey: 'domesticSpecialTaxBusiness',
    },
  ],
  [
    BrandSettleTypes.DOMESTIC_SIMPLE_WITH_INVOICE_BUSINESS,
    {
      value: BrandSettleTypes.DOMESTIC_SIMPLE_WITH_INVOICE_BUSINESS,
      label: '국내 간이 과세자(세금 계산서 발행 가능)',
      fieldKey: 'domesticSimpleWithInvoiceBusiness',
    },
  ],
  [
    BrandSettleTypes.DOMESTIC_SIMPLE_NO_INVOICE_BUSINESS,
    {
      value: BrandSettleTypes.DOMESTIC_SIMPLE_NO_INVOICE_BUSINESS,
      label: '국내 간이 과세자(세금 계산서 발행 불가능)',
      fieldKey: 'domesticSimpleNoInvoiceBusiness',
    },
  ],
  [
    BrandSettleTypes.DOMESTIC_EXEMPT_BUSINESS,
    {
      value: BrandSettleTypes.DOMESTIC_EXEMPT_BUSINESS,
      label: '국내 면세 사업자',
      fieldKey: 'domesticExemptBusiness',
    },
  ],
  [
    BrandSettleTypes.DOMESTIC_NON_PROFIT_BUSINESS,
    {
      value: BrandSettleTypes.DOMESTIC_NON_PROFIT_BUSINESS,
      label: '국내 비영리 사업자',
      fieldKey: 'domesticNonProfitBusiness',
    },
  ],
  [
    BrandSettleTypes.DOMESTIC_UNIQUE_BUSINESS,
    {
      value: BrandSettleTypes.DOMESTIC_UNIQUE_BUSINESS,
      label: '국내 고유 사업자',
      fieldKey: 'domesticUniqueBusiness',
    },
  ],
  [
    BrandSettleTypes.OVERSEA,
    {
      value: BrandSettleTypes.OVERSEA,
      label: '해외',
      fieldKey: 'overseaSettle',
    },
  ],
]);

export default SETTLES;
