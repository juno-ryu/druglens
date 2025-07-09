import { Components, Theme } from '@mui/material';

export type TypeInputBaseSizes = keyof ReturnType<typeof inputBaseSizes>;
export const inputBaseSizes = (theme: Theme) =>
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

export const MuiInputBaseOverride: Components<Theme>['MuiInputBase'] = {
  defaultProps: {
    type: 'text',
    value: '',
    placeholder: '',
    autoComplete: 'off',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      variants: [
        ...Object.entries(inputBaseSizes(theme)).map(([size, style]) => ({
          props: { size },
          style,
        })),
      ],
    }),
  },
};
