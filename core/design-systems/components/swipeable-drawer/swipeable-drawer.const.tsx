import { SwipeableDrawerOverride } from '@/core/design-systems/components/swipeable-drawer';

export const MuiSwipeableDrawerOverride: SwipeableDrawerOverride = {
  defaultProps: {
    component: 'div',
    anchor: 'bottom',
    elevation: 24,
    keepMounted: true,
    PaperProps: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '16px 16px 0 0',
      },
    },
  },
};
