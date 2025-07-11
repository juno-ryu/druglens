import DesignIcon from '@/core/design-systems/components/design-icon';
import PaginationItem from '@/core/design-systems/components/pagination-item';
import { Components, Theme } from '@mui/material';

export type TypePaginationVariants = keyof ReturnType<typeof paginationVariants>;
export const paginationVariants = (theme: Theme) =>
  ({
    text: {
      //
    },
    outlined: {
      //
    },
  }) as const;

export type TypePaginationSizes = keyof ReturnType<typeof paginationSizes>;
export const paginationSizes = (theme: Theme) =>
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

export const MuiPaginationOverride: Components<Theme>['MuiPagination'] = {
  defaultProps: {
    variant: 'text',
    size: 'small',
    shape: 'circular',
    siblingCount: 1,
    boundaryCount: 1,
    renderItem: (props) => (
      <PaginationItem
        slots={{
          next: (slotProps) => <DesignIcon variant="ChevronRightThin" width={24} height={24} {...slotProps} />,
          previous: (slotProps) => <DesignIcon variant="ChevronLeftThin" width={24} height={24} {...slotProps} />,
        }}
        {...props}
      />
    ),
  },
  styleOverrides: {
    root: ({ theme }) => ({
      variants: [
        ...Object.entries(paginationVariants(theme)).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
        ...Object.entries(paginationSizes(theme)).map(([size, style]) => ({
          props: { size },
          style,
        })),
      ],
      '& > .MuiPagination-ul': {
        gap: '4px',
        flexWrap: 'nowrap',
        justifyContent: 'center',
      },
      padding: '4px 0',
    }),
  },
};
