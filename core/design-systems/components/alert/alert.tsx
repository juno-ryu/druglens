'use client';

import { forwardRef } from 'react';
import { Alert as MuiAlert } from '@mui/material';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import { AlertComponent, AlertProps } from '@/core/design-systems/components/alert';

// do: ref, component, children
// do-not: (empty)
const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { severity, color, size = 'small', children, ...restProps } = props;

  const rootClassList = Array.from(generatedClassList('MuiAlert', { size }, toPascalCase));

  return (
    <MuiAlert ref={ref} classes={{ root: rootClassList.join(' ') }} severity={color} color={color} data-size={size} {...restProps}>
      {children}
    </MuiAlert>
  );
});

Alert.displayName = 'Alert';

export default Alert as AlertComponent;
