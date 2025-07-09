import { Components, Theme } from '@mui/material';
import DesignIcon from '@/core/design-systems/components/design-icon/design-icon';

export type TypeRadioSizes = keyof ReturnType<typeof radioSizes>;
export const radioSizes = (theme: Theme) =>
  ({
    small: {
      '.MuiDesignIcon-root': { width: '20px' },
    },
    medium: {
      '.MuiDesignIcon-root': { width: '24px' },
    },
    large: {
      //
    },
  }) as const;

export const MuiRadioOverride: Components<Theme>['MuiRadio'] = {
  defaultProps: {
    component: 'span',
    icon: <DesignIcon variant="RadioOutline" />,
    checkedIcon: <DesignIcon variant="RadioFill" />,
    color: 'augment/gray/800',
    size: 'medium',
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      variants: [
        ...Object.entries(radioSizes(theme)).map(([size, style]) => ({
          props: { size },
          style,
        })),
        {
          props: { disableRipple: true, disableTouchRipple: true },
          style: {
            padding: 0,
          },
        },
      ],
      color: theme.palette['gray/400'],
      '&.Mui-disabled': { color: theme.palette['gray/200'] },
    }),
  },
};
