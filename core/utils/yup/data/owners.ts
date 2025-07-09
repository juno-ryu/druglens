import { TaxTypes } from '@/core/shared/service/enum/tax-types';

export const OWNERS = new Map([
  [
    TaxTypes.PERSONAL,
    {
      value: TaxTypes.PERSONAL,
      label: 'PERSONAL',
    },
  ],
  [
    TaxTypes.BUSINESS,
    {
      value: TaxTypes.BUSINESS,
      label: 'BUSINESS',
    },
  ],
]);

export default OWNERS;
