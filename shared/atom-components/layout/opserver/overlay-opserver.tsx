'use client';

import React, { Fragment } from 'react';
import { Dialog } from '@/core/design-systems';
import useMounted from '@/core/shared/hooks/effect/use-mounted/use-mounted';
import { useOverlayState } from '@/shared/stores/layout/use-overlay/use-overlay.hook';

const LayoutOverlayOpserver = () => {
  const { isMounted } = useMounted();
  const popupState = useOverlayState();

  if (!isMounted) return <Fragment />;

  return (
    <Fragment>
      {popupState.dialogs.map(({ key, children, ...restProps }) => (
        <Dialog key={key} open {...restProps}>
          {children}
        </Dialog>
      ))}
    </Fragment>
  );
};

export default LayoutOverlayOpserver;
