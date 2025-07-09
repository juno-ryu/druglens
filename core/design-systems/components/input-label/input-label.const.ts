import { Components, Theme } from '@mui/material';

export type TypeInputLabelSizes = keyof ReturnType<typeof inputLabelSizes>;
export const inputLabelSizes = (theme: Theme) =>
  ({
    small: {
      //
    },
    medium: {
      //
    },
    large: {
      //
    },
    customA: {
      //
    },
    customB: {
      //
    },
  }) as const;

export const MuiInputLabelOverride: Components<Theme>['MuiInputLabel'] = {
  defaultProps: {
    component: 'label',
    required: false,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      variants: [
        ...Object.entries(inputLabelSizes(theme)).map(([size, style]) => ({
          props: { size },
          style,
        })),
      ],
    }),
  },
};
