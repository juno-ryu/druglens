export const WITHDRAWAL_REASONS = new Map<
  string,
  {
    value: number;
    label: string;
  }
>([
  [
    '1',
    {
      value: 1,
      label: 'CUSTOMER_SERVICE_ISSUE',
    },
  ],
  [
    '2',
    {
      value: 2,
      label: 'DOWNLOAD_ISSUE',
    },
  ],
  [
    '4',
    {
      value: 4,
      label: 'RETURN_REFUND_EXCHANGE_ISSUE',
    },
  ],
  [
    '8',
    {
      value: 8,
      label: 'LOW_VISIT_FREQUENCY',
    },
  ],
  [
    '16',
    {
      value: 16,
      label: 'PRODUCT_PRICE_ISSUE',
    },
  ],
  [
    '32',
    {
      value: 32,
      label: 'PRIVACY_CONCERN',
    },
  ],
  [
    '64',
    {
      value: 64,
      label: 'TRUST_IN_SHOP_ISSUE',
    },
  ],
  [
    '1000',
    {
      value: 1000,
      label: 'ETC',
    },
  ],
]);

export default WITHDRAWAL_REASONS;
