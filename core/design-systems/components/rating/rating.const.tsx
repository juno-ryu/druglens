import { Components, Theme } from '@mui/material';
import DesignIcon from '@/core/design-systems/components/design-icon/design-icon';

export type TypeRatingSizes = keyof ReturnType<typeof ratingSizes>;

export const ratingSizes = (theme: Theme) =>
  ({
    small: {
      '& i': { width: '18px' },
    },
    medium: {
      '& i': { width: '24px' },
    },
    large: {
      '& i': { width: '32px' },
    },
  }) as const;

export const MuiRatingOverride: Components<Theme>['MuiRating'] = {
  defaultProps: {
    icon: <DesignIcon variant="Star" />,
    emptyIcon: <DesignIcon variant="Star" />,
    size: 'medium',
    sx: { width: 'auto', '& svg': { maxWidth: 'fit-content' } },
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        variants: [
          ...Object.entries(ratingSizes(theme)).map(([size, style]) => ({
            props: { size },
            style,
          })),
        ],
        '.MuiRating-decimal': {
          '& label, & span': {
            zIndex: 1,
          },
        },
      };
    },
    icon: ({ theme }) => ({
      color: theme.palette['yellow/500'],
    }),
    iconEmpty: ({ theme }) => ({
      color: theme.palette['gray/200'],
    }),
  },
};
