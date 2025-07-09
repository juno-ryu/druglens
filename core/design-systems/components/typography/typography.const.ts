import { Components, Theme } from '@mui/material';

export type TypeTypographyVariants = keyof typeof typographyVariants;
export const typographyVariants = {
  // Headline
  'headline/h1': {
    fontSize: '40px',
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  'headline/h2': {
    fontSize: '36px',
    lineHeight: 1.33333,
    letterSpacing: 0,
  },
  'headline/h3': {
    fontSize: '32px',
    lineHeight: 1.3125,
    letterSpacing: 0,
  },
  'headline/h4': {
    fontSize: '30px',
    lineHeight: 1.33333,
    letterSpacing: 0,
  },
  // Title
  'title/title1': {
    fontSize: '28px',
    lineHeight: 1.28571,
    letterSpacing: 0,
  },
  'title/title2': {
    fontSize: '26px',
    lineHeight: 1.30769,
    letterSpacing: 0,
  },
  'title/title3': {
    fontSize: '24px',
    lineHeight: 1.33333,
    letterSpacing: 0,
  },
  'title/title4': {
    fontSize: '22px',
    lineHeight: 1.45455,
    letterSpacing: 0,
  },
  'title/title5': {
    fontSize: '20px',
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  // Body
  'body/body1': {
    fontSize: '18px',
    lineHeight: 1.44444,
    letterSpacing: 0,
  },
  'body/body2': {
    fontSize: '17px',
    lineHeight: 1.41176,
    letterSpacing: 0,
  },
  'body/body3': {
    fontSize: '16px',
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  'body/body4': {
    fontSize: '15px',
    lineHeight: 1.46667,
    letterSpacing: 0,
  },
  'body/body5': {
    fontSize: '14px',
    lineHeight: 1.42857,
    letterSpacing: 0,
  },
  'body/body6': {
    fontSize: '13px',
    lineHeight: 1.38462,
    letterSpacing: 0,
  },
  // Label
  'label/label1': {
    fontSize: '12px',
    lineHeight: 1.33333,
    letterSpacing: 0,
  },
  'label/label2': {
    fontSize: '11px',
    lineHeight: 1.27273,
    letterSpacing: 0,
  },
  'label/label3': {
    fontSize: '10px',
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  // Aritcle
  'aritcle/desktop/title': {
    fontSize: '24px',
    lineHeight: 1.58333,
    letterSpacing: 0,
  },
  'aritcle/mobile/title': {
    fontSize: '20px',
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  'aritcle/desktop/body': {
    fontSize: '16px',
    lineHeight: 2.0,
    letterSpacing: 0,
  },
  'aritcle/mobile/body': {
    fontSize: '14px',
    lineHeight: 2.0,
    letterSpacing: 0,
  },
  // Infornation
  'infornation/info1': {
    fontSize: '16px',
    lineHeight: 1.625,
    letterSpacing: 0,
  },
  'infornation/info2': {
    fontSize: '15px',
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  'infornation/info3': {
    fontSize: '14px',
    lineHeight: 1.57143,
    letterSpacing: 0,
  },
} as const;

export const MuiTypographyOverride: Components<Theme>['MuiTypography'] = {
  defaultProps: {
    variant: 'body/body3',
    component: 'span',
    fontWeight: 400,
    color: 'gray/800',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      variants: [
        ...Object.entries(typographyVariants).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
      ],
    }),
  },
};
