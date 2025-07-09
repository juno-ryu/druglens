export type EnumLicense = (typeof EnumLicense)[keyof typeof EnumLicense];
export const EnumLicense = {
  PERSONAL: 'PERSONAL',
  LIMITED1: 'LIMITED1',
  LIMITED5: 'LIMITED5',
  UNLIMITED: 'UNLIMITED',
} as const;
