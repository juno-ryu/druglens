import { Components, Theme } from '@mui/material';

export type TypeSwitchSizes = keyof ReturnType<typeof switchSizes>;
export const switchSizes = (theme: Theme) =>
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
  }) as const;

export const MuiSwitchOverride: Components<Theme>['MuiSwitch'] = {
  defaultProps: {
    component: 'span',
    size: 'medium',
    color: 'black',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const isDefaultColor = ownerState?.color === 'black';

      return {
        variants: [
          ...Object.entries(switchSizes(theme)).map(([size, style]) => ({
            props: { size },
            style,
          })),
          {
            props: { disabled: true },
            style: { opacity: 0.3 },
          },
        ],
        '&&': {
          '.MuiSwitch-track': {
            background: theme.palette['black'],
            opacity: 0.4,
          },
          '.Mui-checked': {
            color: theme.palette[isDefaultColor ? 'inherit' : ownerState?.color || 'black'],
          },

          '.Mui-checked+.MuiSwitch-track': {
            background: theme.palette[isDefaultColor ? 'inherit' : ownerState?.color || 'black'],
            opacity: isDefaultColor ? 0.6 : 0.3,
          },

          '.Mui-disabled+.MuiSwitch-track': {
            opacity: 0.6,
          },
        },
      };
    },
  },
};
