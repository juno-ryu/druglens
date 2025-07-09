export const PLANS = new Map<
  string,
  {
    value: number;
    label: string;
    planCommissionRate: number;
    originalCommissionRate: number;
  }
>([
  [
    '6',
    {
      value: 6,
      label: 'NON_EXCLUSIVE',
      planCommissionRate: 0.2,
      originalCommissionRate: 0.2,
    },
  ],
  [
    '7',
    {
      value: 7,
      label: 'EXCLUSIVE',
      planCommissionRate: 0.15,
      originalCommissionRate: 0.2,
    },
  ],
]);

export default PLANS;
