import { Components, Theme } from '@mui/material';
import DesignIcon from '@/core/design-systems/components/design-icon';

export type TypeCheckboxSizes = keyof ReturnType<typeof checkboxSizes>;

export const checkboxSizes = (theme: Theme) =>
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

export const MuiCheckboxOverride: Components<Theme>['MuiCheckbox'] = {
  defaultProps: {
    component: 'span',
    icon: <DesignIcon variant="CheckboxOutline" />,
    checkedIcon: <DesignIcon variant="CheckboxFill" />,
    indeterminateIcon: <DesignIcon variant="CheckboxIndeterminate" />,
    color: 'augment/gray/800',
    size: 'medium',
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        variants: [
          ...Object.entries(checkboxSizes(theme)).map(([size, style]) => ({
            props: { size },
            style,
          })),
          {
            props: { disableRipple: true },
            style: { padding: 0 },
          },
        ],
        color: theme.palette['gray/400'],
        '&.Mui-disabled': { color: theme.palette['gray/200'] },
      };
    },
  },
};
