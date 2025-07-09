'use client';

import { forwardRef } from 'react';
import { Dialog as MuiDialog } from '@mui/material';
import { DialogComponent, DialogProps } from '@/core/design-systems/components/dialog/dialog.type';

const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiDialog ref={ref} {...restProps} />;
});

Dialog.displayName = 'Dialog';

export default Dialog as DialogComponent;
