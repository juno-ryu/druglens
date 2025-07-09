'use client';

import { Box, SwipeableDrawer as MuiSwipeableDrawer } from '@mui/material';
import DesignIcon from '@/core/design-systems/components/design-icon';
import { SwipeableDrawerComponent, SwipeableDrawerProps } from '@/core/design-systems/components/swipeable-drawer/swipeable-drawer.type';

// do: ref
// do-not: component, children
const SwipeableDrawer = (props: SwipeableDrawerProps) => {
  const { isControllerble = false, children, ...restProps } = props;

  return (
    <MuiSwipeableDrawer {...restProps}>
      {isControllerble && (
        <Box width="100%" display="flex" justifyContent="center" p="12px">
          <DesignIcon variant="DrawerHandler" />
        </Box>
      )}
      {children}
    </MuiSwipeableDrawer>
  );
};
SwipeableDrawer.displayName = 'SwipeableDrawer';

export default SwipeableDrawer as SwipeableDrawerComponent;
